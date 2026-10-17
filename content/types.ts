export interface PersonLinks {
  github?: string;
  linkedin?: string;
  email?: string;
  twitter?: string;
  [key: string]: string | undefined;
}

export interface Person {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  avatar?: string;
  links: PersonLinks;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  url?: string;
  repo?: string;
  featured: boolean;
}

export type SiteType = "tool" | "blog" | "project" | "other";

export interface Site {
  id: string;
  title: string;
  description: string;
  url: string;
  type: SiteType;
  internal: boolean;
}

export interface SiteContent {
  person: Person;
  projects: Project[];
  sites: Site[];
}

export interface PostFrontmatter {
  title: string;
  date: string;
  slug: string;
  summary: string;
  tags?: string[];
  draft?: boolean;
}

export interface Post extends PostFrontmatter {
  content: string;
}
