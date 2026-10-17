import content from "@/content/index";
import { getLatestPosts } from "@/lib/blog";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Writing from "./_components/Writing";
import Sites from "./_components/Sites";
import Footer from "./_components/Footer";

export const metadata = {
  title: content.person.name,
  description: content.person.tagline,
};

export default function V1Page() {
  const posts = getLatestPosts(3);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Nav person={content.person} />
      <main>
        <Hero person={content.person} />
        <About person={content.person} />
        <Projects projects={content.projects} />
        <Writing posts={posts} />
        <Sites sites={content.sites} />
      </main>
      <Footer person={content.person} />
    </div>
  );
}
