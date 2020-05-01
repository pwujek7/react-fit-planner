import React from 'react';
import { useHistory } from 'react-router-dom';

import Icon from '../common/Icon';
import { ICONS, COLORS } from '../../constants/icons';

const NewDayListItem = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/day');
  };

  return (
    <div onClick={handleClick}>
      <div>
        <span>add</span>
        <span>new</span>
        <span>day</span>
      </div>
      <div>
        <Icon icon={ICONS.PLUS} size="24" color={COLORS.DARKBLUE} />
      </div>
    </div>
  );
};

export default NewDayListItem;
