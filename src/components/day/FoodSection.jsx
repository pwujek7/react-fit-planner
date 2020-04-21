import React from 'react';
import { FieldArray } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledDayFormSection from './StyledDayFormSection';
import StyledDayFormSectionHeading from './StyledDayFormSectionHeading';
import StyledDayFormBtnAdd from './StyledDayFormBtnAdd';
import StyledDayFormBtnDelete from './StyledDayFormBtnDelete';
import StyledDayFormGridBar from './StyledDayFormGridBar';

import TextInput from '../common/TextInput';
import Icon from '../common/Icon';
import StyledText,
{
  FONTCOLOR, FONTSIZE, FONTWEIGHT
} from '../common/styled/StyledText';

import { ICONS, COLORS } from '../../constants/icons';

const StyledIngredientContainer = styled.div`
  display: grid;
  border-bottom: 1px solid ${({ theme }) => theme.color.veryLightGray};
  padding: 5px 0 10px 0;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(8, 39.5px);

    & > span {
      grid-column: 1/2;
      grid-row: 1/2;
      align-self: end;
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
      grid-column: 1/4;
      grid-row: 2/3;
    }

    & > div:nth-of-type(4) {
      grid-column: 4/6;
      grid-row: 2/3;
    }

    & > div:nth-of-type(5) {
      grid-column: 6/8;
      grid-row: 2/3;
    }

    & > button:nth-of-type(1) {
      grid-column: 8/9;
      grid-row: 2/3;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    grid-template-columns: repeat(12, 50px);

    & > span {
      grid-column: 1/2;
      grid-row: 1/2;
    }

    & > div:nth-of-type(1) {
      grid-column: 2/4;
      grid-row: 1/2;
    }

    & > div:nth-of-type(2) {
      grid-column: 4/6;
      grid-row: 1/2;
    }

    & > div:nth-of-type(3) {
      grid-column: 6/8;
      grid-row: 1/2;
    }

    & > div:nth-of-type(4) {
      grid-column: 8/10;
      grid-row: 1/2;
    }

    & > div:nth-of-type(5) {
      grid-column: 10/12;
      grid-row: 1/2;
    }

    & > button:nth-of-type(1) {
      grid-column: 12/13;
      grid-row: 1/2;
    }
  }
`;

const StyledDayFormBar = styled(StyledDayFormGridBar)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(8, 39.5px);

    ${StyledText} {
      grid-column: 2/3;
      grid-row: 1/2;
      align-self: end;
    }

    & > div:nth-of-type(1) {
      grid-column: 3/8;
      grid-row: 1/2;
    }

    ${StyledDayFormBtnDelete} {
      grid-column: 8/9;
      grid-row: 1/2;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    grid-template-columns: repeat(12, 50px);

    ${StyledText} {
      grid-column: 5/6;
      grid-row: 1/2;
      align-self: end;
    }

    & > div:nth-of-type(1) {
      grid-column: 6/12;
      grid-row: 1/2;
    }

    ${StyledDayFormBtnDelete} {
      grid-column: 12/13;
      grid-row: 1/2;
    }
  }
`;

const FoodSection = ({ id, name, meals }) => {
  return (
    <StyledDayFormSection>
      <FieldArray
        id={id}
        name={name}
        render={mealsHelpers => {
          return (
            <>
              <StyledDayFormSectionHeading
                fontColor={FONTCOLOR.GRAY}
                fontSize={FONTSIZE.S}
                fontWeight={FONTWEIGHT.NORMAL}
              >
                Meals
                <StyledDayFormBtnAdd
                  type="button"
                  onClick={() => mealsHelpers.push({
                    name: '',
                    ingredients: [{
                      name: '', weight: '', proteins: '', carbs: '', fat: ''
                    }]
                  })}
                >
                  <Icon icon={ICONS.PLUS} size="16" color={COLORS.WHITE} />
                </StyledDayFormBtnAdd>
              </StyledDayFormSectionHeading>
              {
                meals
                && meals.length > 0
                && meals.map((meal, mealIndex) => (
                  <div key={mealIndex}>
                    <StyledDayFormBar>
                      <StyledText
                        fontColor={FONTCOLOR.LIGHTGRAY}
                        fontSize={FONTSIZE.S}
                        fontWeight={FONTWEIGHT.NORMAL}
                      >
                        {mealIndex + 1}
                      </StyledText>
                      <TextInput id={`${name}[${mealIndex}].name`} name={`${name}[${mealIndex}].name`} type="text" label="Meal name" />
                      <StyledDayFormBtnDelete
                        type="button"
                        onClick={() => mealsHelpers.remove(mealIndex)}
                      >
                        <Icon icon={ICONS.BIN} size="20" color={COLORS.LIGHTGRAY} />
                      </StyledDayFormBtnDelete>
                    </StyledDayFormBar>
                    <FieldArray
                      id={`${id}[${mealIndex}].ingredients`}
                      name={`${name}[${mealIndex}].ingredients`}
                      render={ingredientsHelpers => {
                        return (
                          <>
                            <StyledDayFormSectionHeading
                              fontColor={FONTCOLOR.GRAY}
                              fontSize={FONTSIZE.S}
                              fontWeight={FONTWEIGHT.NORMAL}
                            >
                              Ingredients
                              <StyledDayFormBtnAdd
                                type="button"
                                onClick={() => ingredientsHelpers.push({
                                  name: '', weight: '', proteins: '', carbs: '', fat: ''
                                })}
                              >
                                <Icon icon={ICONS.PLUS} size="16" color={COLORS.WHITE} />
                              </StyledDayFormBtnAdd>
                            </StyledDayFormSectionHeading>
                            {
                              meals[mealIndex].ingredients
                              && meals[mealIndex].ingredients.length > 0
                              && meals[mealIndex].ingredients.map((ingredient, ingredientIndex) => (
                                <div key={ingredientIndex}>
                                  <StyledIngredientContainer>
                                    <StyledText
                                      fontColor={FONTCOLOR.LIGHTGRAY}
                                      fontSize={FONTSIZE.S}
                                      fontWeight={FONTWEIGHT.NORMAL}
                                    >
                                      {`${mealIndex + 1}.${ingredientIndex + 1}`}
                                    </StyledText>
                                    <TextInput id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].name`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].name`} label="Name" type="text" />
                                    <TextInput id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].weight`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].weight`} label="Weight [g]" type="text" />
                                    <TextInput id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].proteins`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].proteins`} label="Proteins [g]" type="text" />
                                    <TextInput id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].carbs`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].carbs`} label="Carbs [g]" type="text" />
                                    <TextInput id={`${id}[${mealIndex}].ingredients[${ingredientIndex}].fat`} name={`${name}[${mealIndex}].ingredients[${ingredientIndex}].fat`} label="Fat [g]" type="text" />
                                    <StyledDayFormBtnDelete
                                      type="button"
                                      onClick={() => ingredientsHelpers.remove(ingredientIndex)}
                                    >
                                      <Icon icon={ICONS.BIN} size="20" color={COLORS.LIGHTGRAY} />
                                    </StyledDayFormBtnDelete>
                                  </StyledIngredientContainer>
                                </div>
                              ))
                            }
                          </>
                        );
                      }}
                    />
                  </div>
                ))
              }
            </>
          );
        }}
      />
    </StyledDayFormSection>
  );
};

FoodSection.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  meals: PropTypes.array
};

export default FoodSection;
