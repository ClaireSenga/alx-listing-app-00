export interface CardProps {
	title: string
	imageUrl: string
	children?: React.ReactNode
}

export interface ButtonProps {
	label: string
	onClick: () => void
}

// interfaces/index.ts

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];   // e.g. ["Luxury Villa", "Pool", …]
  price: number;
  offers: Offers;       // bed/shower/occupants info
  image: string;        // URL to the image
  discount: string;     // e.g. "30" or "" if none
}
