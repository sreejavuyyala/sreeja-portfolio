import { motion, useReducedMotion } from "framer-motion";
import { pipelineStageInfo } from "../data/pipeline";
import type { PipelineStage } from "../types";

const VIEW_WIDTH = 1000;
const Y = 30;
const START_X = 30;
const END_X = 970;

function nodeX(index: number, count: number): number {
  return START_X + ((END_X - START_X) * index) / (count - 1);
}

interface PipelineExplorerProps {
  selectedStage: PipelineStage | null;
  onSelectStage: (stage: PipelineStage | null) => void;
}

export function PipelineExplorer({ selectedStage, onSelectStage }: PipelineExplorerProps) {
  const reduceMotion = useReducedMotion();
  const count = pipelineStageInfo.length;
  const lastX = nodeX(count - 1, count);

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${VIEW_WIDTH} 60`} className="w-full" preserveAspectRatio="none" aria-hidden="true">
        <line x1={START_X} y1={Y} x2={END_X} y2={Y} stroke="var(--color-slate-light)" strokeWidth={2} />

        {!reduceMotion && (
          <motion.circle
            r={5}
            fill="var(--color-signal)"
            initial={{ cx: START_X, cy: Y, opacity: 0 }}
            animate={{ cx: lastX, cy: Y, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 }}
          />
        )}

        {pipelineStageInfo.map((stage, index) => {
          const isSelected = selectedStage === stage.id;
          return (
            <motion.circle
              key={stage.id}
              cx={nodeX(index, count)}
              cy={Y}
              initial={{ r: 5 }}
              animate={{ r: isSelected ? 8 : 5 }}
              transition={{ duration: 0.2 }}
              fill={isSelected ? "var(--color-signal)" : "var(--color-primary)"}
            />
          );
        })}
      </svg>

      <div
        role="group"
        aria-label="Filter achievements by pipeline stage"
        className="mt-3 flex flex-wrap justify-between gap-1.5"
      >
        {pipelineStageInfo.map((stage) => {
          const isSelected = selectedStage === stage.id;
          return (
            <button
              key={stage.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelectStage(isSelected ? null : stage.id)}
              className={`rounded-md px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors sm:px-3 sm:text-[11px] sm:tracking-[0.15em] ${
                isSelected ? "bg-signal-text text-white" : "text-slate hover:bg-primary-light hover:text-primary"
              }`}
            >
              {stage.label}
            </button>
          );
        })}
      </div>

      {selectedStage && (
        <button
          type="button"
          onClick={() => onSelectStage(null)}
          className="mt-3 font-mono text-xs text-primary underline underline-offset-2 hover:text-ink"
        >
          Clear filter — show everything
        </button>
      )}
    </div>
  );
}