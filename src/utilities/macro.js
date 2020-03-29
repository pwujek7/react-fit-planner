const calculateProteins = (proteins) => {
  return proteins * 4;
};

const calculateCarbs = (carbs) => {
  return carbs * 4;
};

const calculateFat = (fat) => {
  return fat * 9;
};

export const calculateCalories = (proteins, carbs, fat) => {
  const proteinsAmount = calculateProteins(proteins);
  const carbsAmount = calculateCarbs(carbs);
  const fatAmount = calculateFat(fat);
  const calories = proteinsAmount + carbsAmount + fatAmount;

  return calories;
};

export const calculateMacroPercentage = (proteins, carbs, fat) => {
  const proteinsAmount = calculateProteins(proteins);
  const carbsAmount = calculateCarbs(carbs);
  const fatAmount = calculateFat(fat);
  const calories = calculateCalories(proteins, carbs, fat);
  const proteinsPercentage = parseFloat(((proteinsAmount / calories) * 100).toFixed(2));
  const carbsPercentage = parseFloat(((carbsAmount / calories) * 100).toFixed(2));
  const fatPercentage = parseFloat(((fatAmount / calories) * 100).toFixed(2));

  return [
    {
      name: 'proteins',
      value: proteinsPercentage
    },
    {
      name: 'carbohydrates',
      value: carbsPercentage
    },
    {
      name: 'fat',
      value: fatPercentage
    }
  ];
};
