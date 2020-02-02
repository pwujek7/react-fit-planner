import React from 'react';
import { connect, useSelector } from 'react-redux';
import {
  Formik,
  Field,
  Form,
  FieldArray
} from 'formik';
import PropTypes from 'prop-types';

import { createDay } from '../../actions/daysActions';

const Day = ({ create }) => {
  const days = useSelector(state => state.days);
  const { postDataError, postDataErrorMessage } = days;

  return (
    <Formik
      initialValues={{
        isTrainingDay: false,
        meals: [
          {
            name: '',
            ingredients: [
              {
                name: '',
                weight: 0,
                proteins: 0,
                carbs: 0,
                fat: 0
              }
            ]
          }
        ],
        exercises: [
          {
            name: '',
            sets: [
              {
                reps: 0,
                weight: 0
              },
            ]
          }
        ],
      }}
      onSubmit={values => {
        const valuesToSubmit = values.isTrainingDay
          ? { isTrainingDay: values.isTrainingDay, meals: values.meals, exercises: values.exercises }
          : { isTrainingDay: values.isTrainingDay, meals: values.meals };
        create({ ...valuesToSubmit });
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
              <button type="submit">submit</button>
            </Form>
            {
              postDataError && <p>{postDataErrorMessage}</p>
            }
          </>
        )
      }
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    create: (dayData) => dispatch(createDay(dayData))
  };
};

Day.propTypes = {
  create: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Day);
