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

const StyledSetContainer = styled.div`
  display: grid;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(8, 39.5px);

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

const StyledDayFormBar = styled(StyledDayFormGridBar)`
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

const TrainingSection = ({ id, name, exercises }) => {
  return (
    <StyledDayFormSection>
      <FieldArray
        id={id}
        name={name}
        render={exercisesHelpers => {
          return (
            <>
              <StyledDayFormSectionHeading
                fontColor={FONTCOLOR.GRAY}
                fontSize={FONTSIZE.S}
                fontWeight={FONTWEIGHT.NORMAL}
              >
                Exercises
                <StyledDayFormBtnAdd
                  type="button"
                  onClick={() => exercisesHelpers.push({
                    name: '',
                    sets: [{
                      reps: '', weight: ''
                    }]
                  })}
                >
                  <Icon icon={ICONS.PLUS} size="16" color={COLORS.WHITE} />
                </StyledDayFormBtnAdd>
              </StyledDayFormSectionHeading>
              {
                exercises
                && exercises.length > 0
                && exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex}>
                    <StyledDayFormBar>
                      <StyledText
                        fontColor={FONTCOLOR.GRAY}
                        fontSize={FONTSIZE.S}
                        fontWeight={FONTWEIGHT.NORMAL}
                      >
                        {exerciseIndex + 1}
                      </StyledText>
                      <TextInput id={`${name}[${exerciseIndex}].name`} name={`${name}[${exerciseIndex}].name`} type="text" label="Exercise name" />
                      <StyledDayFormBtnDelete
                        type="button"
                        onClick={() => exercisesHelpers.remove(exerciseIndex)}
                      >
                        <Icon icon={ICONS.BIN} size="20" color={COLORS.LIGHTGRAY} />
                      </StyledDayFormBtnDelete>
                    </StyledDayFormBar>
                    <FieldArray
                      id={`${id}[${exerciseIndex}].sets`}
                      name={`${name}[${exerciseIndex}].sets`}
                      render={setsHelpers => {
                        return (
                          <>
                            <StyledDayFormSectionHeading
                              fontColor={FONTCOLOR.GRAY}
                              fontSize={FONTSIZE.S}
                              fontWeight={FONTWEIGHT.NORMAL}
                            >
                              Sets
                              <StyledDayFormBtnAdd
                                type="button"
                                onClick={() => setsHelpers.push({
                                  reps: '', weight: ''
                                })}
                              >
                                <Icon icon={ICONS.PLUS} size="16" color={COLORS.WHITE} />
                              </StyledDayFormBtnAdd>
                            </StyledDayFormSectionHeading>
                            {
                              exercises[exerciseIndex].sets
                              && exercises[exerciseIndex].sets.length > 0
                              && exercises[exerciseIndex].sets.map((set, setIndex) => (
                                <StyledSetContainer key={setIndex}>
                                  <StyledText
                                    fontColor={FONTCOLOR.LIGHTGRAY}
                                    fontSize={FONTSIZE.S}
                                    fontWeight={FONTWEIGHT.NORMAL}
                                  >
                                    {`${exerciseIndex + 1}.${setIndex + 1}`}
                                  </StyledText>
                                  <TextInput id={`${id}[${exerciseIndex}].sets[${setIndex}].reps`} name={`${name}[${exerciseIndex}].sets[${setIndex}].reps`} label="Reps" type="text" />
                                  <TextInput id={`${id}[${exerciseIndex}].sets[${setIndex}].weight`} name={`${name}[${exerciseIndex}].sets[${setIndex}].weight`} label="Weight" />
                                  <StyledDayFormBtnDelete
                                    type="button"
                                    onClick={() => setsHelpers.remove(setIndex)}
                                  >
                                    <Icon icon={ICONS.BIN} size="20" color={COLORS.LIGHTGRAY} />
                                  </StyledDayFormBtnDelete>
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
    </StyledDayFormSection>
  );
};

TrainingSection.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  exercises: PropTypes.array
};

export default TrainingSection;
