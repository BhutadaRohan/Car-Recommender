export default function StepSeating({ next, back, options }) {
  return (
    <div className="max-w-2xl mx-auto text-white">
      {/* HEADER */}
      <h2 className="text-2xl font-bold mb-2">Seating Capacity</h2>

      <p className="text-sm text-gray-400 mb-6">
        How many people do you usually travel with?
      </p>

      {/* OPTIONS */}
      <div className="grid grid-cols-2 gap-4">
        {options.seatings?.map((seat) => (
          <button
            key={seat}
            onClick={() => next({ seating: seat })}
            className="
              group text-left p-4 rounded-2xl
              bg-gray-900 border border-gray-700
              hover:border-purple-500 hover:bg-gray-800
              hover:shadow-lg
              transition-all duration-200
              active:scale-95
            "
          >
            {/* HEADER ROW */}
            <div className="flex items-center justify-between">
              <div className="font-semibold text-white group-hover:text-purple-400">
                {seat} Seater
              </div>

              <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-purple-500" />
            </div>

            {/* DESCRIPTION */}
            <div className="text-xs text-gray-400 mt-2">
              {seat === 5
                ? "Perfect for city driving & daily commute"
                : "Ideal for family travel & long road trips"}
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
