// types.ts

export type Lang = "ar" | "he";

export interface BlogSection {
  heading: string;
  body?: string;
  items?: string[];
}

export interface BlogContent {
  title: string;
  intro: string;
  sections: BlogSection[];
}

export interface BlogPost {
  id: string;            // unique slug or id
  ar: BlogContent;       // Arabic content
  he: BlogContent;       // Hebrew content
  tag?: string;          // optional category/tag
  date?: string;         // publish date
  image?: string;        // optional thumbnail
}
