import { useEffect, useState } from "react";
import { filterCars } from "../api";

export default function Results({ filters, backStep, reset }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    filterCars(filters).then((res) => {
      setCars(res.cars || []);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 text-gray-400 animate-pulse">
        Finding your best matches...
      </div>
    );
  }

  if (!cars.length) {
    return (
      <div className="text-center py-20">
        <p className="text-red-400 font-semibold text-lg">
          No cars match your preferences
        </p>
        <p className="text-sm text-gray-500 mt-2">Try adjusting your filters</p>
      </div>
    );
  }

  const best = cars[0];

  return (
    <div className="space-y-8 text-white">
      {/* 📌 DARK STICKY FILTER BAR */}
      <div className="sticky top-0 z-10 bg-gray-950/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* FILTER PILLS */}
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300">
              💰 ₹{filters.minBudget?.toLocaleString()} – ₹
              {filters.maxBudget?.toLocaleString()}
            </span>

            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300">
              ⛽ {filters.fuel || "Any"}
            </span>

            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300">
              🚗 {filters.type || "Any"}
            </span>

            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300">
              👥 {filters.seating || "Any"} seater
            </span>

            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300">
              🎯 {filters.priority || "Balanced"}
            </span>
          </div>
        </div>
      </div>

      {/* 📊 HEADER */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Best Matches</h2>
        <p className="text-sm text-gray-400 mt-1">
          {cars.length} cars found for your preferences
        </p>
      </div>

      {/* 🏆 BEST MATCH */}
      <div className="max-w-5xl mx-auto px-4">
        <div
          className="
          bg-gradient-to-br from-green-900/30 to-gray-900
          border border-green-600/40
          rounded-2xl p-6 shadow-lg
        "
        >
          <div className="text-sm font-semibold text-green-400">
            🏆 Top Recommendation
          </div>

          <div className="flex items-center gap-2 mt-1">
            <h3 className="text-2xl font-bold">
              {best.make} {best.model}
            </h3>
            <p className="text-sm text-gray-400">{best.variant}</p>

            <span className="text-xs px-2 py-1 rounded bg-gray-800 text-yellow-400 border border-gray-700">
              ⭐ {best.reviews}/5
            </span>
          </div>

          {/* SPECS */}
          <div className="grid grid-cols-3 gap-6 mt-6 text-sm">
            <div>
              <p className="text-gray-400">Price</p>
              <p className="font-semibold text-white">₹{best.price}</p>
            </div>

            <div>
              <p className="text-gray-400">Mileage</p>
              <p className="font-semibold text-white">{best.mileage} km/l</p>
            </div>

            <div>
              <p className="text-gray-400">Safety</p>
              <p className="font-semibold text-white">{best.safety}/5</p>
            </div>
          </div>

          <p className="text-green-300 text-sm mt-5">
            {best.reason || "Best overall match based on your preferences"}
          </p>
        </div>
      </div>

      {/* 📋 OTHER CARS */}
      <div className="max-w-5xl mx-auto px-4 space-y-4">
        {cars.slice(1).map((car, i) => (
          <div
            key={i}
            className="
              bg-gray-900 border border-gray-800
              rounded-xl p-5
              hover:border-blue-500 hover:bg-gray-800
              transition
            "
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-white">
                  {car.make} {car.model}
                  <span className="px-2 text-xs text-gray-400">
                    {car.variant}
                  </span>
                </h4>
              </div>

              <div className="text-right">
                <p className="font-semibold text-white">₹{car.price}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-400 capitalize">{car.fuel}</p>

                  <span className="text-xs px-2 py-0.5 rounded bg-gray-800 text-yellow-400 border border-gray-700">
                    ⭐ {car.reviews}
                  </span>
                </div>
              </div>
            </div>

            {/* MINI SPECS */}
            <div className="flex gap-4 mt-3 text-xs text-gray-400">
              <span>🚗 {car.mileage} km/l</span>
              <span>🛡️ {car.safety}/5</span>
              <span>👥 {car.seating}</span>
            </div>

            <p className="text-xs text-gray-500 mt-3">{car.reason}</p>
          </div>
        ))}

        {/* ACTIONS */}
        <div className="max-w-5xl flex justify-center gap-2">
          <button
            onClick={backStep}
            className="
                px-4 py-1.5 text-sm rounded-lg
                border border-gray-700 text-gray-300
                hover:bg-gray-800 transition
              "
          >
            ← Back
          </button>

          <button
            onClick={reset}
            className="
                px-4 py-1.5 text-sm rounded-lg
                bg-red-600 text-white
                hover:bg-red-500 transition
              "
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
