import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FoodSection from './FoodSection';
import TrainingSection from './TrainingSection';
import CheckBoxInput from '../common/CheckBoxInput';

import { createDay, updateDay } from '../../actions/daysActions';
import { selectDays, selectDayById } from '../../selectors/selectors';
import { emptyValues } from '../../constants/emptyValues';

const StyledDayFormContainer = styled.div`
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    width: 260px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    width: 520px;
  }
`;

const DayForm = ({ create, update }) => {
  const { dayId } = useParams();
  const days = useSelector(selectDays);
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
    <StyledDayFormContainer>
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
                <CheckBoxInput
                  id="isTrainingDay"
                  name="isTrainingDay"
                  value={values.isTrainingDay}
                  label="Do you train today ?"
                />
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
    </StyledDayFormContainer>
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
