
import { Product, Testimonial, Review } from './types';

export interface FAQItem {
  question: string;
  answer: string;
}

const mockReviews: Review[] = [
  {
    id: 'r1',
    userName: 's*****a',
    rating: 5,
    comment: 'Bagus banget bahannya! Pengiriman cepet, admin ramah. Bakal langganan disini.',
    date: '2024-03-15',
    variant: 'Size S, Pink'
  },
  {
    id: 'r2',
    userName: 'm*****9',
    rating: 5,
    comment: 'Realpict sesuai foto. Pas banget di badan, bahannya adem pol.',
    date: '2024-03-12',
    variant: 'Size M, Neutral'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Berapa lama waktu pengiriman di GelisLux?",
    answer: "Pengiriman standar kami memakan waktu 3-5 hari kerja untuk seluruh wilayah Indonesia. Untuk wilayah Jabodetabek, paket biasanya sampai dalam 1-2 hari kerja."
  },
  {
    question: "Bagaimana cara menentukan ukuran (size) yang tepat?",
    answer: "Kami menyediakan 'Size Guide' di setiap halaman produk. Untuk produk celana, kami menyertakan saran berat badan (BB) dan tinggi badan (TB) di deskripsi."
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'm1',
    name: "Kaos Polos Essential Cotton",
    price: 85000,
    category: "Men",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1000&auto=format&fit=crop",
    description: "Kaos polos basic dengan bahan Heavy Cotton 24s. Menyerap keringat, tidak menerawang, dan potongan modern yang sangat nyaman untuk sehari-hari.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy", "Sand"],
    condition: "New",
    likes: 3100,
    rating: 4.8,
    soldCount: 5600,
    reviews: mockReviews
  },
  {
    id: 'w2',
    name: "Daster Silk Peony Luxury",
    price: 145000,
    category: "Women",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
    description: "Daster eksklusif dengan bahan silk premium. Sangat lembut dan dingin di kulit, memberikan kesan mewah meskipun saat bersantai di rumah.",
    sizes: ["All Size"],
    colors: ["Rose Gold", "Sage Green", "Silver"],
    condition: "New",
    likes: 1240,
    rating: 5.0,
    soldCount: 890,
    reviews: mockReviews
  },
  {
    id: 'k1',
    name: "Baju Tidur Cloud Soft Kids",
    price: 95000,
    category: "Kids",
    image: "https://i.ibb.co.com/7tFX2BW8/782b9dee597c7eca0b9172ace16fe4c9.jpg",
    video: "https://res.cloudinary.com/dsvolqki6/video/upload/v1769098462/dreamina-2026-01-22-8655-Cinematic_slow_zoom_into_the_white_blous..._spaw0e.mp4",
    colors: ["Cloud White", "black", "Minty Green", "Sunny Yellow"],
    colorImages: {
      "Cloud White": "https://i.pinimg.com/736x/20/ad/12/20ad120acdd29d9e93f2a40c772e1e9d.jpg",
      "black": "https://i.pinimg.com/736x/00/22/28/002228606ad8ffe49d468387de013a46.jpg",
      "Minty Green": "https://i.pinimg.com/736x/ac/d4/f9/acd4f91891ab257e74cbd8ce15b7967a.jpg",
      "Sunny Yellow": "https://i.pinimg.com/1200x/b8/7b/61/b87b619d06c462c26b76db7480734abf.jpg"
    },
    description: "Setelan baju tidur anak dengan bahan katun organik yang sangat lembut untuk kulit si kecil yang sensitif. Motif awan yang menggemaskan.",
    sizes: ["2th", "4th", "6th", "8th"],
    condition: "New",
    likes: 950,
    rating: 4.9,
    soldCount: 430,
    reviews: mockReviews
  },
  {
    id: 'w1',
    name: "Signature Flared Blue Jeans",
    price: 255000,
    category: "Women",
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=1000&auto=format&fit=crop",
    description: "Celana denim dengan potongan flared (cutbray) yang sedang viral. Bahan denim berkualitas yang memberikan siluet kaki lebih jenjang.",
    sizes: ["27", "28", "29", "30", "31"],
    colors: ["Blue Denim"],
    condition: "New",
    likes: 4500,
    rating: 4.9,
    soldCount: 2150,
    reviews: mockReviews
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: "Paula Vianna",
    role: "Verified Buyer",
    content: "Celana jeansnya beneran bikin kaki kelihatan jenjang! Bahannya juga gak kaku, enak banget dipake seharian.",
    avatar: "https://picsum.photos/seed/customer1/100/100",
    rating: 5
  },
  {
    id: 't2',
    author: "Bunda Alif",
    role: "Happy Mom",
    content: "Baju tidur anaknya adem banget, anakku biasanya gampang keringetan tapi pake ini tidurnya pules.",
    avatar: "https://picsum.photos/seed/customer2/100/100",
    rating: 5
  }
];

export const PAYMENT_METHODS = {
  ewallet: [
    { id: 'gopay', name: 'GoPay' },
    { id: 'ovo', name: 'OVO' },
    { id: 'dana', name: 'DANA' }
  ],
  bank: [
    { id: 'bca', name: 'BCA Virtual Account' },
    { id: 'mandiri', name: 'Mandiri Virtual Account' },
    { id: 'bni', name: 'BNI Virtual Account' }
  ]
};
