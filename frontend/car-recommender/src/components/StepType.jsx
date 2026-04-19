export default function StepType({ next, back, options }) {
  return (
    <div className="max-w-2xl mx-auto text-white">
      {/* HEADER */}
      <h2 className="text-2xl font-bold text-white mb-2">Choose Car Type</h2>

      <p className="text-sm text-gray-400 mb-6">
        Pick the body style that fits your lifestyle
      </p>

      {/* OPTIONS */}
      <div className="grid grid-cols-2 gap-4">
        {options.types?.length ? (
          options.types.map((type) => (
            <button
              key={type}
              onClick={() => next({ type })}
              className="
                group text-left p-4 rounded-2xl
                bg-gray-900 border border-gray-700
                hover:border-blue-500 hover:bg-gray-800
                hover:shadow-lg
                transition-all duration-200
                active:scale-95
              "
            >
              <div className="flex items-center justify-between">
                {/* TYPE NAME */}
                <div className="font-semibold capitalize text-white group-hover:text-blue-400">
                  {type}
                </div>

                {/* SMALL ICON DOT */}
                <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-blue-500" />
              </div>

              {/* DESCRIPTION */}
              <div className="text-xs text-gray-400 mt-2 leading-relaxed">
                {type === "suv"
                  ? "Rugged, spacious and ideal for long drives"
                  : type === "sedan"
                    ? "Comfortable ride with highway stability"
                    : "Compact size perfect for city driving"}
              </div>
            </button>
          ))
        ) : (
          <p className="text-gray-500">No options available</p>
        )}
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
