import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

import { theme } from '../../theme/Theme';

const COLORS = [
  theme.color.chartBlue,
  theme.color.chartYellow,
  theme.color.chartRed
];

const ChartPie = ({ data }) => (
  <ResponsiveContainer width="100%" height={280}>
    <PieChart>
      <Pie
        isAnimationActive={false}
        data={data}
        dataKey="value"
        outerRadius={80}
        fill="#8884d8"
        cx="50%"
        cy="50%"
        label
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
