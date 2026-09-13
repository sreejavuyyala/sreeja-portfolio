import { motion, useReducedMotion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { PortraitPhoto } from "./PortraitPhoto";
import headshot from "../assets/sreeja-headshot.webp";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
    },
  };

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="top" className="border-b border-slate-light/50 bg-bg">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 md:grid-cols-[1fr_auto]">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-5">
          <motion.p
            variants={item}
            className="font-mono text-xs uppercase tracking-[0.2em] text-primary"
          >
            {profile.location} · {profile.relocation}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="font-display text-xl text-slate sm:text-2xl">
            {profile.title}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-on-primary transition-colors hover:bg-ink hover:text-bg"
            >
              <Mail size={16} aria-hidden="true" />
              Email
            </a>
            <a
              href={profile.linkedin.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-slate-light px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={profile.github.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-slate-light px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href="#query"
              className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium text-slate transition-colors hover:text-ink"
            >
              Query my career
              <ArrowDown size={14} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto aspect-[3/4] w-[200px] shrink-0 sm:w-[240px] md:w-[280px] lg:w-[300px]"
        >
          <div
            className="absolute -inset-10 -z-10 rounded-full bg-primary/15 blur-3xl dark:bg-primary/10"
            aria-hidden="true"
          />
          <PortraitPhoto src={headshot} alt={profile.name} className="h-full w-full select-none" />
        </motion.div>
      </div>
    </section>
  );
}
