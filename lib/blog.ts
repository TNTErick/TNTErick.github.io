import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostFrontmatter } from "@/content/types";

const POSTS_DIR = path.join(process.cwd(), "app", "blog", "posts");

export function getLatestPosts(count = 3): PostFrontmatter[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data } = matter(raw);
      return data as PostFrontmatter;
    })
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
