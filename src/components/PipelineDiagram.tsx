import { motion, useReducedMotion } from "framer-motion";
import { pipelineStages } from "../data/pipeline";

const VIEW_WIDTH = 1000;
const Y = 30;
const START_X = 30;
const END_X = 970;

function nodeX(index: number, count: number): number {
  return START_X + ((END_X - START_X) * index) / (count - 1);
}

export function PipelineDiagram() {
  const reduceMotion = useReducedMotion();
  const count = pipelineStages.length;
  const lastX = nodeX(count - 1, count);

  return (
    <div className="w-full" role="img" aria-label="Pipeline diagram: ingest, validate, transform, serve, monitor">
      <svg viewBox={`0 0 ${VIEW_WIDTH} 60`} className="w-full" preserveAspectRatio="none" aria-hidden="true">
        <motion.line
          x1={START_X}
          y1={Y}
          x2={END_X}
          y2={Y}
          stroke="var(--color-slate-light)"
          strokeWidth={2}
          initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />

        {!reduceMotion && (
          <motion.circle
            r={5}
            fill="var(--color-signal)"
            initial={{ cx: START_X, cy: Y, opacity: 0 }}
            animate={{ cx: lastX, cy: Y, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.3, delay: 0.3, ease: "easeInOut" }}
          />
        )}

        {pipelineStages.map((_, index) => {
          const isLast = index === count - 1;
          return (
            <motion.circle
              key={index}
              cx={nodeX(index, count)}
              cy={Y}
              r={isLast ? 7 : 5}
              fill={isLast ? "var(--color-signal)" : "var(--color-primary)"}
              initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.5 + index * 0.18 }}
            />
          );
        })}
      </svg>

      <div className="mt-2 flex justify-between gap-1 font-mono text-[8px] uppercase tracking-normal text-slate sm:gap-2 sm:text-[10px] sm:tracking-[0.15em]">
        {pipelineStages.map((stage) => (
          <span key={stage}>{stage}</span>
        ))}
      </div>
    </div>
  );
}
