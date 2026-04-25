export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  specs: { [key: string]: string };
  features: string[];
}

export interface Tutorial {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
  category: string;
  image: string;
}
