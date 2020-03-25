import React from 'react';
import { Field, FieldArray } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextInput from '../common/TextInput';

const StyledFoodSection = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    margin: 0 0 20px 0;
  }
`;

const StyledIngredientContainer = styled.div`
  display: grid;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(8, 35px);

    & > span {
      grid-column: 1/3;
      grid-row: 1/2;
    }

    & > div:nth-of-type(1) {
      grid-column: 2/6;
      grid-row: 1/2;
    }

    & > div:nth-of-type(2) {
      grid-column: 6/9;
      grid-row: 1/2;
    }

    & > div:nth-of-type(3) {
      grid-column: 3/5;
      grid-row: 2/3;
    }

    & > div:nth-of-type(4) {
      grid-column: 5/7;
      grid-row: 2/3;
    }

    & > div:nth-of-type(5) {
      grid-column: 7/9;
      grid-row: 2/3;
    }

    & > button {
      grid-column: 5/9;
      grid-row: 3/4;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    grid-template-columns: repeat(12, 50px);

    & > span {
      grid-column: 1/2;
      grid-row: 1/2;
    }

    & > div:nth-of-type(1) {
      grid-column: 2/5;
      grid-row: 1/2;
    }

    & > div:nth-of-type(2) {
      grid-column: 5/7;
      grid-row: 1/2;
    }

    & > div:nth-of-type(3) {
      grid-column: 7/9;
      grid-row: 1/2;
    }

    & > div:nth-of-type(4) {
      grid-column: 9/11;
      grid-row: 1/2;
    }

    & > div:nth-of-type(5) {
      grid-column: 11/13;
      grid-row: 1/2;
    }

    & > button {
      grid-column: 9/13;
      grid-row: 2/3;
    }
  }
`;

const FoodSection = ({ id, name, meals }) => {
  return (
    <StyledFoodSection>
      <FieldArray
        id={id}
        name={name}
        render={mealsHelpers => {
          return (
            <>
              {
                meals
                && meals.length > 0
                && meals.map((meal, mealIndex) => (
                  <div key={mealIndex}>
                    <TextInput id={`${name}[${mealIndex}].name`} name={`${name}[${mealIndex}].name`} type="text" label={`Meal ${mealIndex + 1}`} />
                    <FieldArray
                      id={`${id}[${mealIndex}].ingredients`}
                      name={`${name}[${mealIndex}].ingredients`}
                      render={ingredientsHelpers => {
                        return (
                          <>
                            <span>Ingredients</span>
                            {
                              meals[mealIndex].ingredients
                              && meals[mealIndex].ingredients.length > 0
                              && meals[mealIndex].ingredients.map((ingredient, ingredientIndex) => (
                                <div key={ingredientIndex}>
                                  <StyledIngredientContainer>
                                    <span>{ingredientIndex + 1}</span>
                                    <TextInput id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].name`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].name`} type="text" />
                                    <TextInput id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].weight`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].weight`} type="text" />
                                    <TextInput id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].proteins`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].proteins`} type="text" />
                                    <TextInput id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].carbs`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].carbs`} type="text" />
                                    <TextInput id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].fat`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].fat`} type="text" />
                                    <button
                                      type="button"
                                      onClick={() => ingredientsHelpers.remove(ingredientIndex)}
                                    >
                                      Delete ingredient
                                    </button>
                                  </StyledIngredientContainer>
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
                          </>
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
              <button
                type="button"
                onClick={() => mealsHelpers.push({
                  name: '', ingredients: []
                })}
              >
                Add meal
              </button>
            </>
          );
        }}
      />
    </StyledFoodSection>
  );
};

FoodSection.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  meals: PropTypes.array
};

export default FoodSection;
