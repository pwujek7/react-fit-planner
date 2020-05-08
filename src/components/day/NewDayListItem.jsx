import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Icon from '../common/Icon';

import { ICONS } from '../../constants/icons';
import { COLOR, FLEXROW } from '../../constants/styles';

import { selectDayByCurrentDate } from '../../selectors/selectors';

const StyledNewDayItemDatePanel = styled.div`
  color: ${({ theme }) => theme.color.darkBlue};
  background-color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  position: absolute;

  & span {
    display: block;
    text-transform: uppercase;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: calc(${({ theme }) => theme.font.size.xxl} * 1.5);
    line-height: 30px;
    padding: 5px 5px 0 0;
    bottom: -15px;
    left: -10px;
  }
`;

const StyledNewDayListItem = styled.li`
  display: grid;
  height: 90px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  position: relative;
  cursor: pointer;
`;

const StyledNewDayItemIconPanel = styled.div`
  ${FLEXROW};
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  width: 50px;
  padding: 0 5px;
  position: absolute;
  top: -12px;
  right: 12px;
`;

const NewDayListItem = () => {
  const history = useHistory();
  const day = useSelector(selectDayByCurrentDate);
  const { id } = day[0] || {};
  const route = id ? `/day/${id}` : '/day';

  const handleClick = () => {
    history.push(route);
  };

  return (
    <StyledNewDayListItem onClick={handleClick}>
      <StyledNewDayItemDatePanel>
        <span>new</span>
        <span>day</span>
      </StyledNewDayItemDatePanel>
      <StyledNewDayItemIconPanel>
        <Icon icon={ICONS.PLUS} size="24" color={COLOR.DARKBLUE} />
      </StyledNewDayItemIconPanel>
    </StyledNewDayListItem>
  );
};

export default NewDayListItem;
