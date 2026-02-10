const conditionMultiplier: Record<string, number> = {
  Excellent: 1,
  Good: 0.9,
  Fair: 0.8,
  Poor: 0.65
};

const makeBaseValue: Record<string, number> = {
  Toyota: 7800000,
  Honda: 7200000,
  Nissan: 6400000,
  Mazda: 7000000,
  Hyundai: 6800000
};

export const estimateTradeIn = ({
  year,
  make,
  mileage,
  condition
}: {
  year: number;
  make: string;
  mileage: number;
  condition: string;
}) => {
  const currentYear = new Date().getFullYear();
  const age = Math.max(0, currentYear - year);
  const depreciation = Math.max(0.35, 1 - age * 0.06);
  const mileagePenalty = Math.max(0.6, 1 - mileage / 280000);
  const base = makeBaseValue[make] ?? 6000000;
  const conditionFactor = conditionMultiplier[condition] ?? 0.8;

  const estimate = base * depreciation * mileagePenalty * conditionFactor;
  return {
    min: Math.round(estimate * 0.93),
    max: Math.round(estimate * 1.07)
  };
};
