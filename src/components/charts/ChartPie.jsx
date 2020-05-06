import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

import { COLOR } from '../../constants/styles';

const COLORS = [
  COLOR.BLUE,
  COLOR.YELLOW,
  COLOR.RED
];

const renderCustomLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, value, index
}) => {
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={COLORS[index]}
      textAnchor={x > cx ? 'start' : 'end'}
    >
      {value}%
    </text>
  );
};

const ChartPie = ({ data }) => (
  <ResponsiveContainer width="100%" height={280}>
    <PieChart>
      <Pie
        isAnimationActive={false}
        data={data}
        dataKey="value"
        outerRadius={80}
        cx="50%"
        cy="50%"
        label={renderCustomLabel}
        labelLine
      >
        {
          data.map((entry, index) => (
            <Cell fill={COLORS[index]} key={index} />
          ))
        }
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

ChartPie.propTypes = {
  data: PropTypes.array.isRequired
};

export default ChartPie;
