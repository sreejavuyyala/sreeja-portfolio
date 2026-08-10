import type { SqlJsStatic } from "sql.js";

// Loaded lazily from a CDN — never bundled — so first paint never waits on WASM.
const SQL_JS_CDN_BASE = "https://cdn.jsdelivr.net/npm/sql.js@1.13.0/dist/";

declare global {
  interface Window {
    initSqlJs?: (config?: { locateFile?: (file: string) => string }) => Promise<SqlJsStatic>;
  }
}

let sqlJsPromise: Promise<SqlJsStatic> | null = null;

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

export function loadSqlJs(): Promise<SqlJsStatic> {
  if (!sqlJsPromise) {
    sqlJsPromise = loadScript(`${SQL_JS_CDN_BASE}sql-wasm.js`)
      .then(() => {
        if (!window.initSqlJs) {
          throw new Error("sql.js script loaded but did not register initSqlJs");
        }
        return window.initSqlJs({ locateFile: (file) => `${SQL_JS_CDN_BASE}${file}` });
      })
      .catch((err) => {
        sqlJsPromise = null;
        throw err;
      });
  }
  return sqlJsPromise;
}
