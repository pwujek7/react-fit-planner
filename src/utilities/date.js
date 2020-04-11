const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

export const formatDate = (date) => {
  const fromString = new Date(date);
  const day = fromString.getDate();
  const month = MONTHS[fromString.getMonth()];
  const year = fromString.getFullYear();

  return [day, month, year];
};
