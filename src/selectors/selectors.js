import { createSelector } from 'reselect';

export const selectDayById = (dayId) => {
  return createSelector(
    state => state.days.data,
    days => days.filter(day => day.id === dayId)
  );
};
