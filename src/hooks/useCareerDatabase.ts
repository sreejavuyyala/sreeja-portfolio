import { useEffect, useRef, useState } from "react";
import type { Database } from "sql.js";
import { buildCareerDatabase, readSchema, type TableSchema } from "../lib/database";
import { loadSqlJs } from "../lib/sqlite";

export type DbStatus = "idle" | "loading" | "ready" | "error";

export function useCareerDatabase(shouldLoad: boolean) {
  const [status, setStatus] = useState<DbStatus>("idle");
  const [schema, setSchema] = useState<TableSchema[]>([]);
  const [error, setError] = useState<string | null>(null);
  const dbRef = useRef<Database | null>(null);

  useEffect(() => {
    if (!shouldLoad) return;
    let cancelled = false;
    setStatus((s) => (s === "idle" ? "loading" : s));

    loadSqlJs()
      .then((SQL) => {
        if (cancelled) return;
        const db = buildCareerDatabase(SQL);
        dbRef.current = db;
        setSchema(readSchema(db));
        setStatus("ready");
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Failed to load the database engine.");
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
    // `status` is intentionally excluded — including it re-fires this effect the instant
    // setStatus("loading") lands, which cancels the very promise chain it just started.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldLoad]);

  useEffect(() => {
    return () => {
      dbRef.current?.close();
      dbRef.current = null;
    };
  }, []);

  return { status, schema, error, dbRef };
}
