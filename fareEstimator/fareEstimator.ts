function fareEstimator(
  ride_time: number,
  ride_distance: number,
  cost_per_minute: number[],
  cost_per_mile: number[]
): number[] {
  const fare: number[] = [];
  for (let index = 0; index < cost_per_minute.length; index++) {
    const element = cost_per_minute[index];
    fare.push(
      Math.floor(
        ride_time * cost_per_minute[index] +
          ride_distance * cost_per_mile[index]
      )
    );
  }
  return fare;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
