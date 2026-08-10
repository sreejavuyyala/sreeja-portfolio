import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg py-8">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs text-slate">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
