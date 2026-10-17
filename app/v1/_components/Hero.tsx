import type { Person } from "@/content/types";

export default function Hero({ person }: { person: Person }) {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-4 font-mono text-sm text-violet-400">{person.role}</p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
          {person.name}
        </h1>
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-zinc-400">
          {person.tagline}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
