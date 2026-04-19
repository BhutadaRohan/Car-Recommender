export default function StepFuel({ next, back, options }) {
  return (
    <div className="max-w-2xl mx-auto text-white">
      {/* HEADER */}
      <h2 className="text-2xl font-bold mb-2">Preferred Fuel Type</h2>

      <p className="text-sm text-gray-400 mb-6">
        Choose fuel type based on your driving style
      </p>

      {/* OPTIONS */}
      <div className="grid grid-cols-2 gap-4">
        {options.fuels?.map((fuel) => (
          <button
            key={fuel}
            onClick={() => next({ fuel })}
            className="
              group text-left p-4 rounded-2xl
              bg-gray-900 border border-gray-700
              hover:border-blue-500 hover:bg-gray-800
              hover:shadow-lg
              transition-all duration-200
              active:scale-95
            "
          >
            {/* TITLE ROW */}
            <div className="flex items-center justify-between">
              <div className="font-semibold capitalize text-white group-hover:text-blue-400">
                {fuel}
              </div>

              {/* STATUS DOT */}
              <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-blue-500" />
            </div>

            {/* DESCRIPTION */}
            <div className="text-xs text-gray-400 mt-2 leading-relaxed">
              {fuel === "ev"
                ? "Zero emission electric mobility"
                : fuel === "diesel"
                  ? "High torque, long distance efficiency"
                  : "Balanced performance for daily use"}
            </div>
          </button>
        ))}
      </div>

      {/* BACK BUTTON */}
      <button
        onClick={back}
        className="
          mt-6 text-sm text-gray-400
          hover:text-white transition
        "
      >
        ← Back
      </button>
    </div>
  );
}
