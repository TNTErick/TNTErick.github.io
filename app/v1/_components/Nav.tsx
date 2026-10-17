import type { Person } from "@/content/types";

export default function Nav({ person }: { person: Person }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <span className="font-mono text-sm text-zinc-400">{person.name}</span>
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#about" className="transition-colors hover:text-zinc-100">About</a>
          <a href="#projects" className="transition-colors hover:text-zinc-100">Projects</a>
          <a href="#writing" className="transition-colors hover:text-zinc-100">Writing</a>
          <a href="#contact" className="transition-colors hover:text-zinc-100">Contact</a>
        </div>
      </nav>
    </header>
  );
}
