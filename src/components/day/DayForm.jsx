import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FoodSection from './FoodSection';
import TrainingSection from './TrainingSection';
import CheckBoxInput from '../common/CheckBoxInput';
import StyledHeading from '../common/styled/StyledHeading';
import StyledButton from '../common/styled/StyledButton';
import StyledErrorMessage from '../common/styled/StyledErrorMessage';
import Icon from '../common/Icon';

import { createDay, updateDay } from '../../actions/daysActions';
import { selectDays, selectDayById } from '../../selectors/selectors';
import { emptyValues } from '../../constants/emptyValues';
import { formatDate } from '../../utilities/date';
import { ICONS, COLORS } from '../../constants/icons';

const StyledDayFormContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.color.darkBlue};
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    width: 340px;
    padding: 10px 10px 20px 10px;
    margin: 0 0 40px 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    width: 620px;
  }
`;

const StyledDayFormHeading = styled(StyledHeading)`
  background-color: ${({ theme }) => theme.color.white};
  padding: 0 10px;
  position: absolute;

  & > svg {
    margin: 0 5px 0 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    top: -15px;
    right: 20px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    right: 410px;
  }
`;

const StyledDayFormSubmit = styled(StyledButton)`
  position: absolute;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    bottom: -20px;
    right: -10px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
    right: -20px;
  }
`;

const DayForm = ({ create, update }) => {
  const { dayId } = useParams();
  const days = useSelector(selectDays);
  const dayValues = useSelector(selectDayById(dayId));
  const { createdDate } = dayValues[0] || {};
  const [dDay, month, year] = formatDate(createdDate);
  const isEditMode = dayId !== undefined;
  const initialValues = isEditMode ? dayValues[0] : emptyValues;
  const headingCopy = isEditMode ? `${dDay}-${month}-${year}` : 'New day';
  const {
    postDayError,
    postDayErrorMessage,
    editDayError,
    editDayErrorMessage
  } = days;

  return (
    <StyledDayFormContainer>
      <StyledDayFormHeading>
        <Icon icon={ICONS.CALENDAR} size="24" color={COLORS.DARKBLUE} />
        {headingCopy}
      </StyledDayFormHeading>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          const valuesToSubmit = {
            ...(isEditMode && { id: values.id, createdDate: values.createdDate }),
            meals: values.meals,
            isTrainingDay: values.isTrainingDay,
            ...(values.isTrainingDay ? { exercises: values.exercises } : { exercises: [] })
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
                <FoodSection id="meals" name="meals" meals={values.meals} />
                <CheckBoxInput
                  id="isTrainingDay"
                  name="isTrainingDay"
                  value={values.isTrainingDay}
                  label="Do you train today ?"
                />
                {
                  values.isTrainingDay
                    && <TrainingSection id="exercises" name="exercises" exercises={values.exercises} />
                }
                {
                  dayId
                    && (
                      <>
                        <Field type="hidden" name="id" id="id" />
                        <Field type="hidden" name="createdDate" id="createdDate" />
                      </>
                    )
                }
                <StyledDayFormSubmit type="submit">Submit</StyledDayFormSubmit>
              </Form>
              {
                postDayError
                  && <StyledErrorMessage>{postDayErrorMessage}</StyledErrorMessage>
              }
              {
                editDayError
                  && <StyledErrorMessage>{editDayErrorMessage}</StyledErrorMessage>
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
