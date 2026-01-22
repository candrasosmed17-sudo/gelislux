
export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
  variant?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  image: string;
  video?: string; // Menambahkan URL video review
  colorImages?: Record<string, string>; // Memetakan warna ke URL gambar
  description: string;
  sizes: string[];
  colors: string[];
  condition: string;
  likes: number;
  rating: number;
  soldCount: number;
  reviews: Review[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export enum AppRoute {
  HOME = 'home',
  PRODUCT = 'product'
}
