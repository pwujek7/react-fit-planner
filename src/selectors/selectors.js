import { createSelector } from 'reselect';

export const selectAuth = state => state.auth;
export const selectDays = state => state.days;

export const selectDaysData = createSelector(
  selectDays,
  days => days.data
    .slice()
    .sort((a, b) => {
      const dateA = new Date(a.createdDate);
      const dateB = new Date(b.createdDate);
      return dateB - dateA;
    })
);

export const selectDayById = (dayId) => {
  return createSelector(
    selectDaysData,
    days => days.filter(day => day.id === dayId)
  );
};

export const selectDayMeals = (dayId) => {
  return createSelector(
    selectDayById(dayId),
    days => days[0].meals.map(meal => meal)
  );
};

export const selectDayIngredients = (dayId) => {
  return createSelector(
    selectDayMeals(dayId),
    days => days.flatMap(day => day.ingredients)
  );
};

export const selectCurrentMacroAmount = (macroName, dayId) => {
  return createSelector(
    selectDayIngredients(dayId),
    days => days
      .map(day => +day[macroName])
      .reduce((a, b) => a + b, 0)
  );
};
