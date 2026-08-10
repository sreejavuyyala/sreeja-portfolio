import { Loader2, Play } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";
import type { SqlValue } from "sql.js";
import { achievements, experience } from "../data/experience";
import { presetQueries } from "../data/presetQueries";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { useCareerDatabase } from "../hooks/useCareerDatabase";
import { useInView } from "../hooks/useInView";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { SectionEyebrow } from "./SectionEyebrow";

const INITIAL_QUERY = "-- Try your own. Schema is on the right.\n";
const MAX_RENDERED_ROWS = 500;

interface QueryResult {
  columns: string[];
  values: SqlValue[][];
}

function formatCell(value: SqlValue): string {
  if (value === null) return "null";
  if (value instanceof Uint8Array) return `<${value.length} bytes>`;
  return String(value);
}

export function QueryConsole() {
  const { ref: sectionRef, inView } = useInView<HTMLElement>("250px");
  const { status, schema, error: loadError, dbRef } = useCareerDatabase(inView);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const [query, setQuery] = useState(INITIAL_QUERY);
  const [result, setResult] = useState<QueryResult | null>(null);
  const [execMs, setExecMs] = useState<number | null>(null);
  const [runError, setRunError] = useState<string | null>(null);
  const [hasRun, setHasRun] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const runQuery = useCallback(
    (sql: string) => {
      const db = dbRef.current;
      if (!db) return;
      setHasRun(true);
      try {
        const start = performance.now();
        const execResult = db.exec(sql);
        const ms = performance.now() - start;
        const last = execResult[execResult.length - 1];
        setResult(last ? { columns: last.columns, values: last.values } : { columns: [], values: [] });
        setExecMs(ms);
        setRunError(null);
      } catch (err) {
        setRunError(err instanceof Error ? err.message : String(err));
        setResult(null);
        setExecMs(null);
      }
    },
    [dbRef],
  );

  const handlePreset = (sql: string) => {
    setQuery(sql);
    runQuery(sql);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      runQuery(query);
    }
  };

  const rows = useMemo(() => result?.values.slice(0, MAX_RENDERED_ROWS) ?? [], [result]);
  const truncated = (result?.values.length ?? 0) > MAX_RENDERED_ROWS;

  return (
    <section id="query" ref={sectionRef} className="scroll-mt-20 border-b border-slate-light/50 bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="06" label="Query My Career" />
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Query my career
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate">
          This is a real SQLite database, running in your browser via WebAssembly, seeded from the same data behind
          everything above. Run one of the presets or write your own query — JOINs, aggregates, and typos all work
          exactly like they would against any other database.
        </p>

        <div className="mt-10">
          {status === "error" ? (
            <ConsoleFallback
              note={`The SQL engine couldn't load in this browser${loadError ? ` (${loadError})` : ""}, so here's the same data as plain tables.`}
            />
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
              <div className="overflow-hidden rounded-xl border border-console-border bg-console-bg shadow-lg">
                <div className="flex flex-wrap items-center gap-2 border-b border-console-border bg-console-panel px-4 py-3 sm:px-5">
                  <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.14em] text-console-muted">
                    Presets
                  </span>
                  {presetQueries.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => handlePreset(preset.sql)}
                      disabled={status !== "ready"}
                      className="rounded-full border border-console-border px-3 py-1 font-mono text-xs text-console-text transition-colors hover:border-console-success hover:text-console-success disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                <div className="p-4 sm:p-5">
                  <label htmlFor="sql-editor" className="sr-only">
                    SQL query
                  </label>
                  <textarea
                    id="sql-editor"
                    ref={textareaRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    readOnly={isMobile}
                    spellCheck={false}
                    rows={5}
                    aria-describedby="sql-editor-hint"
                    className="w-full resize-y rounded-lg border border-console-border bg-console-panel px-4 py-3 font-mono text-sm text-console-text outline-none focus-visible:border-console-success sm:text-[15px]"
                  />

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <p id="sql-editor-hint" className="font-mono text-xs text-console-muted">
                      {isMobile ? "Read-only on mobile — try a preset above." : "⌘/Ctrl + Enter to run"}
                    </p>
                    <button
                      type="button"
                      onClick={() => runQuery(query)}
                      disabled={status !== "ready"}
                      className="inline-flex items-center gap-2 rounded-md bg-console-success px-4 py-2 text-sm font-medium text-console-bg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {status === "loading" ? (
                        <Loader2 size={15} className="animate-spin" aria-hidden="true" />
                      ) : (
                        <Play size={15} aria-hidden="true" />
                      )}
                      Run query
                    </button>
                  </div>

                  <div className="mt-5" aria-live="polite">
                    {status === "loading" && (
                      <p className="flex items-center gap-2 font-mono text-sm text-console-muted">
                        <Loader2 size={14} className="animate-spin" aria-hidden="true" />
                        Initializing database…
                      </p>
                    )}

                    {status === "ready" && runError && (
                      <div
                        role="alert"
                        className="rounded-lg border border-console-error/40 bg-console-error/10 px-4 py-3 font-mono text-sm text-console-error"
                      >
                        {runError}
                      </div>
                    )}

                    {status === "ready" && !runError && result && (
                      <div>
                        <p className="mb-2 font-mono text-xs text-console-muted">
                          {result.columns.length === 0
                            ? "Query OK — no rows returned."
                            : `${result.values.length} row${result.values.length === 1 ? "" : "s"} · ${execMs?.toFixed(2)} ms${truncated ? ` · showing first ${MAX_RENDERED_ROWS}` : ""}`}
                        </p>
                        {result.columns.length > 0 && (
                          <div className="overflow-x-auto rounded-lg border border-console-border">
                            <table className="w-full min-w-max border-collapse text-left font-mono text-sm">
                              <thead>
                                <tr className="bg-console-panel">
                                  {result.columns.map((col) => (
                                    <th
                                      key={col}
                                      scope="col"
                                      className="whitespace-nowrap border-b border-console-border px-3 py-2 font-medium text-console-success"
                                    >
                                      {col}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {rows.map((row, i) => (
                                  <tr key={i} className="border-b border-console-border/60 last:border-0">
                                    {row.map((cell, j) => (
                                      <td key={j} className="whitespace-nowrap px-3 py-2 text-console-text">
                                        {cell === null ? <span className="text-console-muted italic">null</span> : formatCell(cell)}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    )}

                    {status === "ready" && !hasRun && (
                      <p className="font-mono text-sm text-console-muted">Run a query to see results here.</p>
                    )}
                  </div>
                </div>
              </div>

              <SchemaPanel status={status} schema={schema} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SchemaPanel({
  status,
  schema,
}: {
  status: "idle" | "loading" | "ready" | "error";
  schema: { name: string; columns: { name: string; type: string }[] }[];
}) {
  return (
    <aside aria-label="Database schema" className="rounded-xl border border-slate-light/60 bg-surface p-4">
      <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-slate">Schema</h3>
      {status === "loading" || status === "idle" ? (
        <p className="mt-3 font-mono text-xs text-slate">Loading…</p>
      ) : (
        <div className="mt-3 flex flex-col gap-4">
          {schema.map((table) => (
            <div key={table.name}>
              <p className="font-mono text-xs font-semibold text-primary">{table.name}</p>
              <ul className="mt-1 flex flex-col gap-0.5">
                {table.columns.map((col) => (
                  <li key={col.name} className="flex items-baseline justify-between gap-2 font-mono text-[11px] text-slate">
                    <span className={col.name === "id" ? "font-semibold text-ink" : undefined}>
                      {col.name}
                      {col.name === "id" && " (pk)"}
                    </span>
                    <span className="text-slate-light">{col.type}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

function ConsoleFallback({ note }: { note: string }) {
  return (
    <div className="flex flex-col gap-8">
      <p className="rounded-lg border border-signal/40 bg-signal-light px-4 py-3 text-sm text-ink">{note}</p>

      <FallbackTable
        title="Experience"
        columns={["Company", "Role", "Start", "End"]}
        rows={experience.map((e) => [e.company, e.role, e.start, e.end])}
      />
      <FallbackTable
        title="Achievements"
        columns={["Company", "Stage", "Description"]}
        rows={achievements.map((a) => [
          experience.find((e) => e.id === a.experienceId)?.company ?? a.experienceId,
          a.stage,
          a.description,
        ])}
      />
      <FallbackTable
        title="Projects"
        columns={["Name", "Year", "Repo"]}
        rows={projects.map((p) => [p.name, p.year, p.repoUrl ?? "—"])}
      />
      <FallbackTable
        title="Skills"
        columns={["Name", "Category", "Contexts"]}
        rows={skills.map((s) => [s.name, s.category, s.contexts.join(", ") || "—"])}
      />
    </div>
  );
}

function FallbackTable({ title, columns, rows }: { title: string; columns: string[]; rows: string[][] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-ink">{title}</h3>
      <div className="mt-2 overflow-x-auto rounded-lg border border-slate-light/60">
        <table className="w-full min-w-max border-collapse text-left text-sm">
          <thead>
            <tr className="bg-surface">
              {columns.map((col) => (
                <th key={col} scope="col" className="whitespace-nowrap border-b border-slate-light/60 px-3 py-2 font-medium text-slate">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-slate-light/40 last:border-0 odd:bg-surface">
                {row.map((cell, j) => (
                  <td key={j} className="px-3 py-2 text-ink">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
