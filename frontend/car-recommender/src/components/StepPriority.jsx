export default function StepPriority({ next, back }) {
  return (
    <div className="max-w-2xl mx-auto text-white">
      {/* HEADER */}
      <h2 className="text-2xl font-bold mb-2">What matters most to you?</h2>

      <p className="text-sm text-gray-400 mb-6">
        We’ll rank your recommendations based on this priority
      </p>

      {/* OPTIONS */}
      <div className="grid grid-cols-3 gap-4">
        {/* MILEAGE */}
        <button
          onClick={() => next({ priority: "mileage" })}
          className="
            group text-left p-4 rounded-2xl
            bg-gray-900 border border-gray-700
            hover:border-green-500 hover:bg-gray-800
            hover:shadow-lg
            transition-all duration-200
            active:scale-95
          "
        >
          <div className="flex items-center justify-between">
            <div className="font-semibold text-white group-hover:text-green-400">
              Mileage
            </div>
            <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-green-500" />
          </div>

          <div className="text-xs text-gray-400 mt-2">
            Maximum fuel efficiency
          </div>
        </button>

        {/* SAFETY */}
        <button
          onClick={() => next({ priority: "safety" })}
          className="
            group text-left p-4 rounded-2xl
            bg-gray-900 border border-gray-700
            hover:border-green-500 hover:bg-gray-800
            hover:shadow-lg
            transition-all duration-200
            active:scale-95
          "
        >
          <div className="flex items-center justify-between">
            <div className="font-semibold text-white group-hover:text-green-400">
              Safety
            </div>
            <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-green-500" />
          </div>

          <div className="text-xs text-gray-400 mt-2">
            Maximum protection & rating
          </div>
        </button>

        {/* PERFORMANCE */}
        <button
          onClick={() => next({ priority: "performance" })}
          className="
            group text-left p-4 rounded-2xl
            bg-gray-900 border border-gray-700
            hover:border-green-500 hover:bg-gray-800
            hover:shadow-lg
            transition-all duration-200
            active:scale-95
          "
        >
          <div className="flex items-center justify-between">
            <div className="font-semibold text-white group-hover:text-green-400">
              Performance
            </div>
            <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-green-500" />
          </div>

          <div className="text-xs text-gray-400 mt-2">
            Power & driving experience
          </div>
        </button>
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
