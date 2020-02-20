import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Formik,
  Field,
  Form,
  FieldArray
} from 'formik';
import PropTypes from 'prop-types';

import { createDay, updateDay } from '../../actions/daysActions';
import { selectDayById } from '../../selectors/selectors';
import { emptyValues } from '../../constants/emptyValues';

const Day = ({ create, update }) => {
  const { dayId } = useParams();
  const days = useSelector(state => state.days);
  const dayValues = useSelector(selectDayById(dayId));
  const isEditMode = dayId !== undefined;
  const initialValues = isEditMode ? dayValues[0] : emptyValues;
  const {
    postDayError,
    postDayErrorMessage,
    editDayError,
    editDayErrorMessage
  } = days;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        const valuesToSubmit = {
          ...(isEditMode && { id: values.id, createdDate: values.createdDate }),
          meals: values.meals,
          isTrainingDay: values.isTrainingDay,
          ...(values.isTrainingDay && { exercises: values.exercises })
        };

        if (isEditMode) {
          update({ ...valuesToSubmit }, dayId);
        } else {
          create({ ...valuesToSubmit, createdDate: new Date().toString() });
        }
      }}
    >
      {
        ({ values }) => (
          <>
            <Form>
              <p>Day Form</p>
              <br />
              <FieldArray
                id="meals"
                name="meals"
                render={mealsHelpers => {
                  const { meals } = values;
                  return (
                    <div>
                      {
                        meals
                        && meals.length > 0
                        && meals.map((meal, mealIndex) => (
                          <div key={mealIndex}>
                            <span>Meal {mealIndex + 1}</span>
                            <Field name={`meals[${mealIndex}].name`} />

                            <FieldArray
                              id={`meals[${mealIndex}].ingredients`}
                              name={`meals[${mealIndex}].ingredients`}
                              render={ingredientsHelpers => {
                                return (
                                  <div>
                                    {
                                      meals[mealIndex].ingredients
                                      && meals[mealIndex].ingredients.length > 0
                                      && meals[mealIndex].ingredients.map((ingredient, ingredientIndex) => (
                                        <div key={ingredientIndex}>
                                          <span>Ingredient {ingredientIndex + 1}</span>
                                          <Field id={`meals[${mealIndex}].ingredients[${ingredientIndex}].name`} name={`meals[${mealIndex}].ingredients[${ingredientIndex}].name`} />
                                          <Field id={`meals[${mealIndex}].ingredients[${ingredientIndex}].weight`} name={`meals[${mealIndex}].ingredients[${ingredientIndex}].weight`} />
                                          <Field id={`meals[${mealIndex}].ingredients[${ingredientIndex}].proteins`} name={`meals[${mealIndex}].ingredients[${ingredientIndex}].proteins`} />
                                          <Field id={`meals[${mealIndex}].ingredients[${ingredientIndex}].carbs`} name={`meals[${mealIndex}].ingredients[${ingredientIndex}].carbs`} />
                                          <Field id={`meals[${mealIndex}].ingredients[${ingredientIndex}].fat`} name={`meals[${mealIndex}].ingredients[${ingredientIndex}].fat`} />
                                          <button
                                            type="button"
                                            onClick={() => ingredientsHelpers.remove(ingredientIndex)}
                                          >
                                            Delete ingredient
                                          </button>
                                        </div>
                                      ))
                                    }
                                    <button type="button" onClick={() => ingredientsHelpers.push({ name: '', weight: '', proteins: '', carbs: '', fat: '' })}>
                                      Add ingredient
                                    </button>
                                  </div>
                                );
                              }}
                            />

                            <button
                              type="button"
                              onClick={() => mealsHelpers.remove(mealIndex)}
                            >
                              Delete meal
                            </button>
                          </div>
                        ))
                      }
                      <br />
                      <button type="button" onClick={() => mealsHelpers.push({ name: '', ingredients: [] })}>
                        Add meal
                      </button>
                    </div>
                  );
                }}
              />
              <br />
              <div>
                <span>Do you train today ?</span>
                <Field type="checkbox" id="isTrainingDay" name="isTrainingDay" checked={values.isTrainingDay} />
              </div>
              <br />
              {
                values.isTrainingDay && (
                  <FieldArray
                    id="exercises"
                    name="exercises"
                    render={exercisesHelpers => {
                      const { exercises } = values;
                      return (
                        <div>
                          {
                            exercises
                            && exercises.length > 0
                            && exercises.map((exercise, exerciseIndex) => (
                              <div key={exerciseIndex}>
                                <span>Exercise {exerciseIndex + 1}</span>
                                <Field name={`exercises[${exerciseIndex}].name`} />

                                <FieldArray
                                  id={`exercises[${exerciseIndex}].sets`}
                                  name={`exercises[${exerciseIndex}].sets`}
                                  render={setsHelpers => {
                                    return (
                                      <div>
                                        {
                                          exercises[exerciseIndex].sets
                                          && exercises[exerciseIndex].sets.length > 0
                                          && exercises[exerciseIndex].sets.map((set, setIndex) => (
                                            <div key={setIndex}>
                                              <span>Set {setIndex + 1}</span>
                                              <Field id={`exercises[${exerciseIndex}].sets[${setIndex}].reps`} name={`exercises[${exerciseIndex}].sets[${setIndex}].reps`} />
                                              <Field id={`exercises[${exerciseIndex}].sets[${setIndex}].weight`} name={`exercises[${exerciseIndex}].sets[${setIndex}].weight`} />
                                              <button
                                                type="button"
                                                onClick={() => setsHelpers.remove(setIndex)}
                                              >
                                                Delete set
                                              </button>
                                            </div>
                                          ))
                                        }
                                        <button type="button" onClick={() => setsHelpers.push({ reps: '', weight: '' })}>
                                          Add set
                                        </button>
                                      </div>
                                    );
                                  }}
                                />

                                <button
                                  type="button"
                                  onClick={() => exercisesHelpers.remove(exerciseIndex)}
                                >
                                  Delete exercise
                                </button>
                              </div>
                            ))
                          }
                          <br />
                          <button type="button" onClick={() => exercisesHelpers.push({ name: '', sets: [] })}>
                            Add exercise
                          </button>
                        </div>
                      );
                    }}
                  />
                )
              }
              <br />
              {
                dayId
                && (
                  <>
                    <Field type="hidden" name="id" id="id" />
                    <Field type="hidden" name="createdDate" id="createdDate" />
                  </>
                )
              }
              <button type="submit">submit</button>
            </Form>
            {
              postDayError && <p>{postDayErrorMessage}</p>
            }
            {
              editDayError && <p>{editDayErrorMessage}</p>
            }
          </>
        )
      }
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    create: (dayData) => dispatch(createDay(dayData)),
    update: (dayData, dayId) => dispatch(updateDay(dayData, dayId))
  };
};

Day.propTypes = {
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Day);
