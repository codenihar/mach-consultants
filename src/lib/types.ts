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
  | { block_type: "header"; headerBlock: { text: string; level: number } }
  | { block_type: "paragraph"; paragraphBlock: { text: string } };

export interface Blog {
  id: string;
  title: string;
  featured_image_url?: string;
  published: string;
  updated_at: string;
  contentBlocks: ContentBlock[];
}
