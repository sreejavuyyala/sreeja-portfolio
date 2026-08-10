import { Mail } from "lucide-react";
import { profile } from "../data/profile";
import { SectionEyebrow } from "./SectionEyebrow";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-slate-light/50 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="06" label="Contact" />
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {profile.email}
        </h2>
        <p className="mt-3 max-w-xl text-slate">
          {profile.location} · {profile.relocation}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink"
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
          {!profile.github.isPlaceholder && (
            <a
              href={profile.github.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-slate-light px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
