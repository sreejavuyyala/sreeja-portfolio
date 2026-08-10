import { profile } from "../data/profile";

type Tone = "keyword" | "string" | "default";
type Token = { text: string; tone: Tone };

const TONE_CLASS: Record<Tone, string> = {
  keyword: "text-console-success",
  string: "text-console-signal",
  default: "text-console-text",
};

const QUERY_LINES: Token[][] = [
  [
    { text: "SELECT", tone: "keyword" },
    { text: " * ", tone: "default" },
    { text: "FROM", tone: "keyword" },
    { text: " engineers", tone: "default" },
  ],
  [
    { text: " WHERE", tone: "keyword" },
    { text: " focus        ", tone: "default" },
    { text: "IN", tone: "keyword" },
    { text: " (", tone: "default" },
    { text: "'backend'", tone: "string" },
    { text: ", ", tone: "default" },
    { text: "'data_engineering'", tone: "string" },
    { text: ")", tone: "default" },
  ],
  [
    { text: "   AND", tone: "keyword" },
    { text: " industries   ", tone: "default" },
    { text: "IN", tone: "keyword" },
    { text: " (", tone: "default" },
    { text: "'healthcare'", tone: "string" },
    { text: ", ", tone: "default" },
    { text: "'financial_services'", tone: "string" },
    { text: ")", tone: "default" },
  ],
  [
    { text: "   AND", tone: "keyword" },
    { text: " ships_to     = ", tone: "default" },
    { text: "'production'", tone: "string" },
  ],
  [
    { text: " ORDER BY", tone: "keyword" },
    { text: " curiosity ", tone: "default" },
    { text: "DESC;", tone: "keyword" },
  ],
];

const RESULT_ROW = [
  { label: "name", value: profile.name },
  { label: "role", value: profile.title },
  { label: "location", value: profile.location },
  { label: "open_to", value: profile.relocation },
];

export function HeroQuerySnippet() {
  return (
    <div className="w-full max-w-xl rounded-lg border border-console-border bg-console-bg px-4 py-4 sm:px-5 sm:py-5">
      <pre className="overflow-x-auto font-mono text-[12px] leading-relaxed sm:text-[13px]">
        <code>
          {QUERY_LINES.map((line, i) => (
            <div key={i}>
              {line.map((token, j) => (
                <span key={j} className={TONE_CLASS[token.tone]}>
                  {token.text}
                </span>
              ))}
            </div>
          ))}
        </code>
      </pre>

      <div className="mt-4 overflow-x-auto rounded-md border border-console-border">
        <table className="w-full min-w-max border-collapse text-left font-mono text-[11px] sm:text-xs">
          <thead>
            <tr className="bg-console-panel">
              {RESULT_ROW.map((col) => (
                <th key={col.label} scope="col" className="whitespace-nowrap border-b border-console-border px-2.5 py-1.5 font-medium text-console-success">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {RESULT_ROW.map((col) => (
                <td key={col.label} className="whitespace-nowrap px-2.5 py-1.5 text-console-text">
                  {col.value}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-2 font-mono text-[10px] text-console-muted">1 row returned</p>
    </div>
  );
}