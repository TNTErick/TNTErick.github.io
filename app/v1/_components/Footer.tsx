import type { Person } from "@/content/types";

export default function Footer({ person }: { person: Person }) {
  const { links } = person;

  return (
    <footer
      id="contact"
      className="border-t border-zinc-800/60 py-16"
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Contact
        </h2>
        <div className="flex flex-wrap gap-4">
          {links.email && (
            <a
              href={`mailto:${links.email}`}
              className="text-sm text-zinc-400 transition-colors hover:text-violet-400"
            >
              {links.email}
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-violet-400"
            >
              GitHub ↗
            </a>
          )}
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-violet-400"
            >
              LinkedIn ↗
            </a>
          )}
          {links.twitter && (
            <a
              href={links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-violet-400"
            >
              Twitter ↗
            </a>
          )}
        </div>
        <p className="mt-12 text-xs text-zinc-700">
          © {new Date().getFullYear()} {person.name}
        </p>
      </div>
    </footer>
  );
}
