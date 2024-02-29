const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Using reduce() to calculate the totalBatteries
const totalBatteries = batteryBatches.reduce(
  (total, batch) => total + batch,
  0
);

// Output the result
console.log(totalBatteries); // Output: 31
