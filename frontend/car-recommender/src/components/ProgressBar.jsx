export default function ProgressBar({ step, total }) {
  const percent = (step / total) * 100;

  return (
    <div className="mb-6">
      {/* STEP TEXT */}
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-gray-400">
          Step <span className="text-white font-semibold">{step}</span> of{" "}
          <span className="text-white font-semibold">{total}</span>
        </p>

        <p className="text-xs text-gray-500">
          {Math.round(percent)}% completed
        </p>
      </div>

      {/* TRACK */}
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        {/* FILL */}
        <div
          className="
            h-2 rounded-full
            bg-gradient-to-r from-blue-500 to-indigo-500
            transition-all duration-500 ease-out
            shadow-[0_0_10px_rgba(59,130,246,0.4)]
          "
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
