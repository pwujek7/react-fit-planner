import React from 'react';
import { Field, FieldArray } from 'formik';
import PropTypes from 'prop-types';

const FoodSection = ({ id, name, meals }) => {
  return (
    <FieldArray
      id={id}
      name={name}
      render={mealsHelpers => {
        return (
          <div>
            {
              meals
              && meals.length > 0
              && meals.map((meal, mealIndex) => (
                <div key={mealIndex}>
                  <span>Meal {mealIndex + 1}</span>
                  <Field name={`${name}[${mealIndex}].name`} />
                  <FieldArray
                    id={`${id}[${mealIndex}].ingredients`}
                    name={`${name}[${mealIndex}].ingredients`}
                    render={ingredientsHelpers => {
                      return (
                        <div>
                          {
                            meals[mealIndex].ingredients
                            && meals[mealIndex].ingredients.length > 0
                            && meals[mealIndex].ingredients.map((ingredient, ingredientIndex) => (
                              <div key={ingredientIndex}>
                                <span>Ingredient {ingredientIndex + 1}</span>
                                <Field id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].name`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].name`} />
                                <Field id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].weight`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].weight`} />
                                <Field id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].proteins`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].proteins`} />
                                <Field id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].carbs`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].carbs`} />
                                <Field id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].fat`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].fat`} />
                                <button
                                  type="button"
                                  onClick={() => ingredientsHelpers.remove(ingredientIndex)}
                                >
                                  Delete ingredient
                                </button>
                              </div>
                            ))
                          }
                          <button
                            type="button"
                            onClick={() => ingredientsHelpers.push({
                              name: '', weight: '', proteins: '', carbs: '', fat: ''
                            })}
                          >
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
            <button
              type="button"
              onClick={() => mealsHelpers.push({
                name: '', ingredients: []
              })}
            >
              Add meal
            </button>
          </div>
        );
      }}
    />
  );
};

FoodSection.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  meals: PropTypes.array
};

export default FoodSection;
