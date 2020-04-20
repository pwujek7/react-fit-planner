import React from 'react';
import { FieldArray } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextInput from '../common/TextInput';
import Icon from '../common/Icon';
import StyledText,
{
  FONTCOLOR, FONTSIZE, FONTWEIGHT
} from '../common/styled/StyledText';
import StyledButton from '../common/styled/StyledButton';

import { ICONS, COLORS } from '../../constants/icons';

const StyledTrainingSection = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    margin: 0 0 20px 0;
  }
`;

const StyledSetContainer = styled.div`
  display: grid;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(8, 39.5px);

    &:last-of-type {
      border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
      padding: 0 0 10px 0;
      margin: 0 0 20px 0;
    }

    & > span {
      grid-column: 3/4;
      grid-row: 1/2;
      align-self: end;
    }

    & > div:nth-of-type(1) {
      grid-column: 4/6;
      grid-row: 1/2;
    }

    & > div:nth-of-type(2) {
      grid-column: 6/8;
      grid-row: 1/2;
    }

    & > button {
      grid-column: 8/9;
      grid-row: 1/2;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    grid-template-columns: repeat(12, 50px);

    & > span {
      grid-column: 7/8;
      grid-row: 1/2;
      align-self: end;
    }

    & > div:nth-of-type(1) {
      grid-column: 8/10;
      grid-row: 1/2;
    }

    & > div:nth-of-type(2) {
      grid-column: 10/12;
      grid-row: 1/2;
    }

    & > button {
      grid-column: 12/13;
      grid-row: 1/2;
    }
  }
`;

const StyledExerciseText = styled(StyledText)`
  display: block;
  padding: 5px 0 5px 0;
  text-align: right;
`;

const StyledButtonDelete = styled(StyledButton)`
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  padding: 0;
  margin: 5px 0 0 0;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.white};
    border: none;

    & > svg path {
      fill: ${({ theme }) => theme.color.red};
    }
  }
`;

const StyledButtonAdd = styled(StyledButton)`
  background-color: ${({ theme }) => theme.color.lightGray};
  border: none;
  padding: 2px 5px 5px 5px;
  margin: 0 0 0 5px;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.limeGreen};
    border: none;
  }
`;

const StyledExerciseBar = styled.div`
  display: grid;
  border-bottom: 1px dotted ${({ theme }) => theme.color.lightGray};
  margin: 0 0 5px 0;
  padding: 0 0 10px 0;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(8, 39.5px);

    ${StyledText} {
      grid-column: 1/2;
      grid-row: 1/2;
      align-self: end;
    }

    & > div:nth-of-type(1) {
      grid-column: 2/8;
      grid-row: 1/2;
    }

    ${StyledButtonDelete} {
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

    ${StyledButtonDelete} {
      grid-column: 12/13;
      grid-row: 1/2;
    }
  }
`;

const TrainingSection = ({ id, name, exercises }) => {
  return (
    <StyledTrainingSection>
      <FieldArray
        id={id}
        name={name}
        render={exercisesHelpers => {
          return (
            <>
              <StyledExerciseText fontColor={FONTCOLOR.GRAY} fontSize={FONTSIZE.S} fontWeight={FONTWEIGHT.NORMAL}>
                Exercises
                <StyledButtonAdd
                  type="button"
                  onClick={() => exercisesHelpers.push({
                    name: '', sets: []
                  })}
                >
                  <Icon icon={ICONS.PLUS} size="16" color={COLORS.WHITE} />
                </StyledButtonAdd>
              </StyledExerciseText>
              {
                exercises
                && exercises.length > 0
                && exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex}>
                    <StyledExerciseBar>
                      <StyledText fontColor={FONTCOLOR.GRAY} fontSize={FONTSIZE.S} fontWeight={FONTWEIGHT.NORMAL}>
                        {exerciseIndex + 1}
                      </StyledText>
                      <TextInput id={`${name}[${exerciseIndex}].name`} name={`${name}[${exerciseIndex}].name`} type="text" label="Exercise name" />
                      <StyledButtonDelete
                        type="button"
                        onClick={() => exercisesHelpers.remove(exerciseIndex)}
                      >
                        <Icon icon={ICONS.BIN} size="20" color={COLORS.LIGHTGRAY} />
                      </StyledButtonDelete>
                    </StyledExerciseBar>
                    <FieldArray
                      id={`${id}[${exerciseIndex}].sets`}
                      name={`${name}[${exerciseIndex}].sets`}
                      render={setsHelpers => {
                        return (
                          <>
                            <StyledExerciseText fontColor={FONTCOLOR.GRAY} fontSize={FONTSIZE.S} fontWeight={FONTWEIGHT.NORMAL}>
                              Sets
                              <StyledButtonAdd
                                type="button"
                                onClick={() => setsHelpers.push({
                                  reps: '', weight: ''
                                })}
                              >
                                <Icon icon={ICONS.PLUS} size="16" color={COLORS.WHITE} />
                              </StyledButtonAdd>
                            </StyledExerciseText>
                            {
                              exercises[exerciseIndex].sets
                              && exercises[exerciseIndex].sets.length > 0
                              && exercises[exerciseIndex].sets.map((set, setIndex) => (
                                <StyledSetContainer key={setIndex}>
                                  <StyledText fontColor={FONTCOLOR.LIGHTGRAY} fontSize={FONTSIZE.S} fontWeight={FONTWEIGHT.NORMAL}>
                                    {`${exerciseIndex + 1}.${setIndex + 1}`}
                                  </StyledText>
                                  <TextInput id={`${id}[${exerciseIndex}].sets[${setIndex}].reps`} name={`${name}[${exerciseIndex}].sets[${setIndex}].reps`} label="Reps" type="text" />
                                  <TextInput id={`${id}[${exerciseIndex}].sets[${setIndex}].weight`} name={`${name}[${exerciseIndex}].sets[${setIndex}].weight`} label="Weight" />
                                  <StyledButtonDelete
                                    type="button"
                                    onClick={() => setsHelpers.remove(setIndex)}
                                  >
                                    <Icon icon={ICONS.BIN} size="20" color={COLORS.LIGHTGRAY} />
                                  </StyledButtonDelete>
                                </StyledSetContainer>
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
    </StyledTrainingSection>
  );
};

TrainingSection.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  exercises: PropTypes.array
};

export default TrainingSection;
