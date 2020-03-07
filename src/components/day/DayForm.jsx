import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Formik,
  Field,
  Form,
} from 'formik';
import PropTypes from 'prop-types';

import FoodSection from './FoodSection';
import TrainingSection from './TrainingSection';

import { createDay, updateDay } from '../../actions/daysActions';
import { selectDayById } from '../../selectors/selectors';
import { emptyValues } from '../../constants/emptyValues';

const DayForm = ({ create, update }) => {
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
              <FoodSection id="meals" name="meals" meals={values.meals} />
              <br />
              <div>
                <span>Do you train today ?</span>
                <Field type="checkbox" id="isTrainingDay" name="isTrainingDay" checked={values.isTrainingDay} />
              </div>
              <br />
              {
                values.isTrainingDay
                && <TrainingSection id="exercises" name="exercises" exercises={values.exercises} />
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

DayForm.propTypes = {
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(DayForm);
