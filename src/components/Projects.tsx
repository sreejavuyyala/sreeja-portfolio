import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";
import { projects } from "../data/projects";
import type { Project } from "../types";
import { SectionEyebrow } from "./SectionEyebrow";

export function Projects() {
  const reduceMotion = useReducedMotion();
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-20 bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="03" label="Projects" />
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Projects</h2>

        {featured && <FeaturedProject project={featured} />}

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {rest.map((project, i) => (
            <motion.article
              key={project.id}
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: reduceMotion ? 0 : i * 0.08 }}
              className="flex flex-col gap-4 rounded-xl border border-slate-light/60 bg-surface p-6"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
                  {project.context} · {project.year}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">{project.name}</h3>
              </div>

              <ul className="flex flex-col gap-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <ul className="mt-auto flex flex-wrap gap-2 border-t border-slate-light/60 pt-4">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full bg-primary-light px-2.5 py-1 font-mono text-[10px] text-primary">
                    {tech}
                  </li>
                ))}
              </ul>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-ink"
                >
                  View code
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const [previewActive, setPreviewActive] = useState(false);

  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-primary/30 bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-5 p-6 sm:p-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-signal-text">Lead project · {project.year}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{project.name}</h3>
          </div>

          {project.stats && (
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.stats.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-primary-light px-3 py-2.5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.08em] text-primary">{stat.label}</dt>
                  <dd className="mt-0.5 font-display text-base font-semibold text-primary">{stat.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <ul className="flex flex-col gap-2.5">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-full bg-primary-light px-2.5 py-1 font-mono text-[10px] text-primary">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-on-primary transition-colors hover:bg-ink hover:text-bg"
              >
                View dashboard
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-slate-light px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
              >
                View code
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="relative min-h-[320px] border-t border-primary/20 bg-console-bg lg:border-t-0 lg:border-l">
          {previewActive && project.liveUrl ? (
            <iframe
              src={project.liveUrl}
              title={`Live preview of ${project.name}`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
              className="h-full min-h-[320px] w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPreviewActive(true)}
              disabled={!project.liveUrl}
              className="flex h-full min-h-[320px] w-full flex-col items-center justify-center gap-3 text-console-text"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-signal text-white">
                <Play size={22} aria-hidden="true" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-console-muted">
                Load live dashboard
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}