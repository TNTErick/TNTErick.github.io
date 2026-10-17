import type { Person } from "@/content/types";

export default function About({ person }: { person: Person }) {
  return (
    <section id="about" className="border-t border-zinc-800/60 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          About
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-300">
          {person.bio}
        </p>
      </div>
    </section>
  );
}
