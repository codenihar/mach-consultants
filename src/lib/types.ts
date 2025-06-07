export type NavItem = {
  name: string;
  route: string;
};

export type Policy = {
  name: string;
  route: string;
};

// Admin
export type ContentBlock =
  | { type: "header"; data: { text: string; level: number } }
  | { type: "paragraph"; data: { text: string } }
  | { type: "list"; data: { style: "ordered" | "unordered"; items: string[] } }
  | { type: "quote"; data: { text: string; caption?: string } }
  | {
      type: "image";
      data: { file: { url: string }; caption?: string; withBorder?: boolean };
    };

export interface Blog {
  id: string;
  title: string;
  published: string;
  featured_image_url?: string;
  content: ContentBlock[];
}
