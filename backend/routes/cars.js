const express = require("express");
const router = express.Router();
const cars = require("../data/cars.json");
const { scoreCar, explainCar } = require("../utils/scorer");

function getAvailableOptions(filteredCars) {
  return {
    types: [...new Set(filteredCars.map((c) => c.type))],
    fuels: [...new Set(filteredCars.map((c) => c.fuel))],
    seatings: [...new Set(filteredCars.map((c) => c.seating))],
  };
}

router.post("/filter", (req, res) => {
  const filters = req.body;

  // 1. SOFT FILTER (do NOT kill dataset early)
  let filtered = cars.filter((car) => {
    const budgetMatch =
      (!filters.minBudget || car.price >= filters.minBudget) &&
      (!filters.maxBudget || car.price <= filters.maxBudget);

    const typeMatch = !filters.type || car.type === filters.type;
    const fuelMatch = !filters.fuel || car.fuel === filters.fuel;
    const seatMatch = !filters.seating || car.seating === filters.seating;

    return budgetMatch && typeMatch && fuelMatch && seatMatch;
  });

  const count = filtered.length;

  // 🚨 fallback
  if (count === 0) {
    return res.json({
      error: true,
      message: "No cars match your selection.",
      suggestions: getAvailableOptions(cars),
    });
  }

  // 2. SCORING ENGINE (FIXED & BALANCED)
  const scoreCar = (car) => {
    let score = 0;

    // 🎯 Budget fit (VERY IMPORTANT)
    const mid = (filters.minBudget + filters.maxBudget) / 2;
    const budgetDiff = Math.abs(car.price - mid);
    score += Math.max(0, 50 - budgetDiff / 50000);

    // 🚗 Mileage importance
    score += car.mileage * 1.5;

    // 🛡️ Safety importance
    score += car.safety * 12;

    // ⭐ Reviews weight
    score += car.reviews * 8;

    // ⚙️ Priority boost (FIXED)
    if (filters.priority === "mileage") {
      score += car.mileage * 2;
    }

    if (filters.priority === "safety") {
      score += car.safety * 15;
    }

    if (filters.priority === "performance") {
      score += car.reviews * 10 + car.safety * 5;
    }

    // 🔥 EV bonus (important modern UX)
    if (car.fuel === "ev") {
      score += 5;
    }

    return score;
  };

  // 3. APPLY SCORING
  filtered = filtered.map((car) => ({
    ...car,
    score: scoreCar(car),
    reason: explainCar(car, filters.priority),
  }));

  // 4. SORT
  filtered.sort((a, b) => b.score - a.score);

  // 5. DIVERSITY LAYER (VERY IMPORTANT FIX)
  const diversified = [];
  const usedTypes = new Set();

  for (const car of filtered) {
    if (!usedTypes.has(car.type)) {
      diversified.push(car);
      usedTypes.add(car.type);
    } else if (diversified.length < 8) {
      diversified.push(car);
    }

    if (diversified.length === 8) break;
  }

  // fallback if diversity over-restricts
  const finalCars =
    diversified.length >= 5 ? diversified : filtered.slice(0, 8);

  // 6. AVAILABLE OPTIONS BASED ON FINAL SET
  const availableOptions = getAvailableOptions(filtered);

  res.json({
    error: false,
    cars: finalCars,
    count,
    availableOptions,
  });
});

module.exports = router;
