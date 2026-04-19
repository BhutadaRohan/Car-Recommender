function scoreCar(car, priority) {
  let score = 0;

  // base signals
  score += car.mileage * 1.5;
  score += car.safety * 10;
  score += car.reviews * 8;

  // priority boost (corrected)
  if (priority === "mileage") {
    score += car.mileage * 2.5;
  }

  if (priority === "safety") {
    score += car.safety * 15;
  }

  if (priority === "performance") {
    score += car.reviews * 12 + car.price / 200000;
  }

  // EV relevance boost
  if (car.fuel === "ev") {
    score += 6;
  }

  return score;
}

function explainCar(car, priority) {
  const reasons = [];

  if (car.mileage > 20) reasons.push("excellent mileage");
  if (car.safety >= 4) reasons.push("high safety rating");
  if (car.reviews >= 4.3) reasons.push("strong user reviews");

  if (priority === "mileage") {
    return `Great fuel efficiency at ${car.mileage} km/l`;
  }

  if (priority === "safety") {
    return `Top safety rating of ${car.safety}/5 with ${reasons.join(", ")}`;
  }

  if (priority === "performance") {
    return `Well balanced performance with ${car.reviews}★ rating`;
  }

  return `Balanced option with ${reasons.join(", ")}`;
}

module.exports = { scoreCar, explainCar };
