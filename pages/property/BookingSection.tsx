import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // Calculate number of nights
  const nights =
    checkIn && checkOut
      ? Math.max(
          (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
            (1000 * 60 * 60 * 24),
          0
        )
      : 0;

  const total = nights * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-24">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          value={checkIn}
          onChange={e => setCheckIn(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          value={checkOut}
          onChange={e => setCheckOut(e.target.value)}
        />
      </div>
      {/* Total payment */}
      <div className="mt-4">
        <p>Total payment: <strong>${total > 0 ? total : price}</strong></p>
      </div>
      {/* Reserve button */}
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full">Reserve now</button>
    </div>
  );
};

export default BookingSection;
