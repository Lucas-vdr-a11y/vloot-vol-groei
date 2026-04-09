export interface ContentSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface DeelvraagContent {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  question: string;
  sections: ContentSection[];
}
