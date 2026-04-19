import { useState } from "react";
import { filterCars } from "./api";
import ProgressBar from "./components/ProgressBar";
import StepBudget from "./components/StepBudget";
import StepType from "./components/StepType";
import StepFuel from "./components/StepFuel";
import StepPriority from "./components/StepPriority";
import StepSeating from "./components/StepSeating";
import Results from "./components/Results";

const stepToFilterKey = {
  1: ["minBudget", "maxBudget"],
  2: ["type"],
  3: ["fuel"],
  4: ["seating"],
  5: ["priority"],
};

export default function App() {
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({});
  const [options, setOptions] = useState({});
  const [error, setError] = useState("");

  const next = async (newData) => {
    const updatedFilters = { ...filters, ...newData };
    setFilters(updatedFilters);

    const res = await filterCars(updatedFilters);

    if (res.error) {
      setError(res.message);
      return;
    }

    setError("");
    setOptions(res.availableOptions);
    setStep((s) => s + 1);
  };

  const back = async () => {
    const keys = stepToFilterKey[step - 1] || [];

    // 1. compute next filters FIRST (no mutation)
    const nextFilters = { ...filters };

    keys.forEach((key) => {
      delete nextFilters[key];
    });

    // 2. update state
    setFilters(nextFilters);

    // 3. call API with CLEAN DATA (not stale state)
    const res = await filterCars(nextFilters);

    if (res.error) {
      setError(res.message);
      return;
    }

    setError("");
    setOptions(res.availableOptions);
    setStep((s) => s - 1);
  };

  const handleReset = async () => {
    const resetFilters = {};

    setFilters(resetFilters);
    setStep(1);

    const res = await filterCars(resetFilters);

    if (res.error) {
      setError(res.message);
      return;
    }

    setError("");
    setOptions(res.availableOptions);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl shadow-lg rounded-2xl p-6">
        <div className="max-w-xl mx-auto p-6">
          <h1 className="text-2xl font-bold  mb-4">🚗 CarBatao</h1>
          <p className="text-sm text-gray-500">
            Kaunsi gaadi leni hai? Hum bata dete hain.
          </p>
          <ProgressBar step={step} total={6} />

          {error && (
            <div className="bg-red-100 text-red-600 p-2 my-2 rounded">
              {error}
            </div>
          )}

          {step === 1 && <StepBudget next={next} />}
          {step === 2 && <StepType next={next} back={back} options={options} />}
          {step === 3 && <StepFuel next={next} back={back} options={options} />}
          {step === 4 && (
            <StepSeating next={next} back={back} options={options} />
          )}
          {step === 5 && <StepPriority next={next} back={back} />}
          {step === 6 && (
            <Results
              filters={filters}
              backStep={() => back()}
              reset={() => handleReset()}
            />
          )}
        </div>
      </div>
    </div>
  );
}
