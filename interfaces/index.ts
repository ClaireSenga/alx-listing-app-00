export interface PropertyAddress {
  city: string;
  country: string;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: PropertyAddress;
  image: string;
  images?: string[]; // optional for gallery
  description: string;
  category: string[]; // amenities
  price: number;
  reviews: Review[];
}
