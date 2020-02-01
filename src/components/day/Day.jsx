import React from 'react';
import {
  Formik,
  Field,
  Form,
  FieldArray
} from 'formik';

const Day = () => {
  return (
    <Formik
      initialValues={{
        isTrainingDay: false,
        exercises: [
          {
            name: 'barbell bench press',
            sets: [
              {
                reps: 2,
                weight: 100
              },
              {
                reps: 3,
                weight: 80
              }
            ]
          },
          {
            name: 'barbell row',
            sets: [
              {
                reps: 2,
                weight: 50
              }
            ]
          }
        ],
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {
        ({ values }) => (
          <Form>
            <p>Day Form</p>
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
        )
      }
    </Formik>
  );
};

export default Day;
