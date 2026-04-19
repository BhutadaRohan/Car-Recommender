import { useState } from "react";

export default function StepBudget({ next }) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1500000);

  const isInvalid = min > max;

  const selectPreset = (minVal, maxVal) => {
    next({ minBudget: minVal, maxBudget: maxVal });
  };

  const handleManualNext = () => {
    if (isInvalid) return;
    next({ minBudget: min, maxBudget: max });
  };

  const presets = [
    { min: 0, max: 800000, label: "₹0 – ₹8L", desc: "Entry level cars" },
    {
      min: 800000,
      max: 1200000,
      label: "₹8L – ₹12L",
      desc: "Balanced options",
    },
    {
      min: 1200000,
      max: 2000000,
      label: "₹12L – ₹20L",
      desc: "Premium features",
    },
    { min: 2000000, max: 3000000, label: "₹20L+", desc: "High-end SUVs" },
  ];

  return (
    <div className="max-w-2xl mx-auto text-white">
      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          What’s your budget range?
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Choose a range or customize your budget
        </p>
      </div>

      {/* PRESETS */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {presets.map((p) => (
          <button
            key={p.label}
            onClick={() => selectPreset(p.min, p.max)}
            className="
              text-left p-4 rounded-2xl
              border border-gray-700 bg-gray-900
              hover:border-blue-500 hover:bg-gray-800
              transition-all duration-200
            "
          >
            <div className="font-semibold text-white">{p.label}</div>
            <div className="text-xs text-gray-400 mt-1">{p.desc}</div>
          </button>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-gray-700" />
        <span className="text-xs text-gray-500 uppercase tracking-wide">
          or customize
        </span>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      {/* INPUT CARD */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5 shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          {/* MIN */}
          <div>
            <label className="text-xs text-gray-400">Minimum Budget</label>
            <input
              type="number"
              value={min}
              step={50000}
              onChange={(e) => setMin(Number(e.target.value))}
              className="
                w-full mt-1 px-3 py-2
                rounded-lg bg-gray-800 border border-gray-700
                text-white placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
            />
          </div>

          {/* MAX */}
          <div>
            <label className="text-xs text-gray-400">Maximum Budget</label>
            <input
              type="number"
              value={max}
              step={50000}
              onChange={(e) => setMax(Number(e.target.value))}
              className="
                w-full mt-1 px-3 py-2
                rounded-lg bg-gray-800 border border-gray-700
                text-white placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
            />
          </div>
        </div>

        {/* RANGE DISPLAY */}
        <div className="mt-4 text-sm">
          {!isInvalid ? (
            <p className="text-gray-300">
              Selected:{" "}
              <span className="font-semibold text-white">
                ₹{min.toLocaleString()} – ₹{max.toLocaleString()}
              </span>
            </p>
          ) : (
            <p className="text-red-400 font-medium">
              Min budget cannot exceed max budget
            </p>
          )}
        </div>

        {/* BUTTON */}
        <button
          onClick={handleManualNext}
          disabled={isInvalid}
          className={`
            w-full mt-4 py-2.5 rounded-xl font-medium
            transition-all duration-200
            ${
              isInvalid
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-500"
            }
          `}
        >
          Apply Custom Range
        </button>
      </div>
    </div>
  );
}
