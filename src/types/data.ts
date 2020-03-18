export interface Root {
  title: string;
  version: number;
  href: string;
  results: Result[];
}

export interface Result {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
}
