import React from 'react';
import { Field, FieldArray } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextInput from '../common/TextInput';

const StyledTrainingSection = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    margin: 0 0 20px 0;
  }
`;

const StyledSetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 35px);

  & > span {
    grid-column: 1/3;
    grid-row: 1/2;
  }

  & > div:nth-of-type(1) {
    grid-column: 3/5;
    grid-row: 1/2;
  }

  & > div:nth-of-type(2) {
    grid-column: 5/7;
    grid-row: 1/2;
  }

  & > button {
    grid-column: 7/9;
    grid-row: 1/2;
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
              {
                exercises
                && exercises.length > 0
                && exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex}>
                    <TextInput id={`${name}[${exerciseIndex}].name`} name={`${name}[${exerciseIndex}].name`} type="text" label={`Exercise ${exerciseIndex + 1}`} />
                    <FieldArray
                      id={`${id}[${exerciseIndex}].sets`}
                      name={`${name}[${exerciseIndex}].sets`}
                      render={setsHelpers => {
                        return (
                          <>
                            <span>Sets</span>
                            {
                              exercises[exerciseIndex].sets
                              && exercises[exerciseIndex].sets.length > 0
                              && exercises[exerciseIndex].sets.map((set, setIndex) => (
                                <div key={setIndex}>
                                  <StyledSetContainer>
                                    <span>{setIndex + 1}</span>
                                    <TextInput id={`${id}[${exerciseIndex}].sets[${setIndex}].reps`} name={`${name}[${exerciseIndex}].sets[${setIndex}].reps`} type="text" />
                                    <TextInput id={`${id}[${exerciseIndex}].sets[${setIndex}].weight`} name={`${name}[${exerciseIndex}].sets[${setIndex}].weight`} />
                                    <button
                                      type="button"
                                      onClick={() => setsHelpers.remove(setIndex)}
                                    >
                                      Delete set
                                    </button>
                                  </StyledSetContainer>
                                </div>
                              ))
                            }
                            <button
                              type="button"
                              onClick={() => setsHelpers.push({
                                reps: '', weight: ''
                              })}
                            >
                              Add set
                            </button>
                          </>
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
              <button
                type="button"
                onClick={() => exercisesHelpers.push({
                  name: '', sets: []
                })}
              >
                Add exercise
              </button>
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
