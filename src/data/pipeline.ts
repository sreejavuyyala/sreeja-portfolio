import type { PipelineStage } from "../types";

export interface PipelineStageInfo {
  id: PipelineStage;
  label: string;
}

export const pipelineStageInfo: PipelineStageInfo[] = [
  { id: "ingest", label: "Ingest" },
  { id: "validate", label: "Validate" },
  { id: "transform", label: "Transform" },
  { id: "store", label: "Store" },
  { id: "serve", label: "Serve" },
  { id: "monitor", label: "Monitor" },
];