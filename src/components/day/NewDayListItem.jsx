import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Icon from '../common/Icon';

import { ICONS, COLORS } from '../../constants/icons';

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
  background-color: ${({ theme }) => theme.color.white};
  width: 50px;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: -12px;
  right: 12px;
`;

const NewDayListItem = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/day');
  };

  return (
    <StyledNewDayListItem onClick={handleClick}>
      <StyledNewDayItemDatePanel>
        <span>new</span>
        <span>day</span>
      </StyledNewDayItemDatePanel>
      <StyledNewDayItemIconPanel>
        <Icon icon={ICONS.PLUS} size="24" color={COLORS.DARKBLUE} />
      </StyledNewDayItemIconPanel>
    </StyledNewDayListItem>
  );
};

export default NewDayListItem;
