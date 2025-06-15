import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { useState } from "react";

const TABS = ["What we offer", "Reviews", "About host"];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500">{property.rating} stars</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {property.images && property.images.map((img, idx) => (
            <img key={idx} src={img} alt={property.name} className={`w-full h-56 object-cover rounded-lg ${idx === 0 ? "col-span-2 h-96" : ""}`} />
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-4">
          <div className="flex space-x-4">
            {TABS.map((t, idx) => (
              <button
                key={t}
                onClick={() => setTab(idx)}
                className={`py-2 px-4 rounded ${tab === idx ? "bg-blue-500 text-white" : "bg-gray-100"}`}>
                {t}
              </button>
            ))}
          </div>
          <div className="mt-2">
            {tab === 0 && (
              <div>
                <h2 className="text-2xl font-semibold mt-4">Description</h2>
                <p>{property.description}</p>
                <h2 className="text-2xl font-semibold mt-4">What this place offers</h2>
                <ul className="flex flex-wrap space-x-4">
                  {property.category.map((amenity, index) => (
                    <li key={index} className="bg-gray-200 p-2 rounded-md mt-2">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tab === 1 && (
              <ReviewSection reviews={property.reviews} />
            )}
            {tab === 2 && (
              <div>
                <h2 className="text-2xl font-semibold mt-4">About host</h2>
                <p>The host will contact you after booking. More info coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Booking Section on the right for desktop, below for mobile */}
      <div className="md:w-1/3 w-full">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
