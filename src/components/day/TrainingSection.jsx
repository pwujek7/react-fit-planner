import React from 'react';
import { Field, FieldArray } from 'formik';
import PropTypes from 'prop-types';

const TrainingSection = ({ id, name, exercises }) => {
  return (
    <FieldArray
      id={id}
      name={name}
      render={exercisesHelpers => {
        return (
          <div>
            {
              exercises
              && exercises.length > 0
              && exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex}>
                  <span>Exercise {exerciseIndex + 1}</span>
                  <Field name={`${name}[${exerciseIndex}].name`} />

                  <FieldArray
                    id={`${id}[${exerciseIndex}].sets`}
                    name={`${name}[${exerciseIndex}].sets`}
                    render={setsHelpers => {
                      return (
                        <div>
                          {
                            exercises[exerciseIndex].sets
                            && exercises[exerciseIndex].sets.length > 0
                            && exercises[exerciseIndex].sets.map((set, setIndex) => (
                              <div key={setIndex}>
                                <span>Set {setIndex + 1}</span>
                                <Field id={`${id}[${exerciseIndex}].sets[${setIndex}].reps`} name={`${name}[${exerciseIndex}].sets[${setIndex}].reps`} />
                                <Field id={`${id}[${exerciseIndex}].sets[${setIndex}].weight`} name={`${name}[${exerciseIndex}].sets[${setIndex}].weight`} />
                                <button
                                  type="button"
                                  onClick={() => setsHelpers.remove(setIndex)}
                                >
                                  Delete set
                                </button>
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
            <button
              type="button"
              onClick={() => exercisesHelpers.push({
                name: '', sets: []
              })}
            >
              Add exercise
            </button>
          </div>
        );
      }}
    />
  );
};

TrainingSection.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  exercises: PropTypes.array
};

export default TrainingSection;
