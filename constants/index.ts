import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Modern Villa",
    rating: 4.9,
    address: {
      city: "Cape Town",
      country: "South Africa",
    },
    image: "/villa-main.jpg",
    images: ["/villa-main.jpg", "/villa1.jpg", "/villa2.jpg", "/villa3.jpg"],
    description: "A beautiful modern villa with all amenities and stunning views.",
    category: ["Pool", "Wi-Fi", "Kitchen", "Parking"],
    price: 1200,
    reviews: [
      {
        name: "Thandi",
        avatar: "/user1.jpg",
        rating: 5,
        comment: "Amazing place, will come back!",
      },
      {
        name: "James",
        avatar: "/user2.jpg",
        rating: 4,
        comment: "Very nice and clean!",
      },
    ],
  },
  // Add more properties if needed
];
