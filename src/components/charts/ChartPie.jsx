import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip
} from 'recharts';

const COLORS = ['#3399ff', '#ffd633', '#ff4d4d'];

const ChartPie = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
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
      <Legend verticalAlign="top" height={36} />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

ChartPie.propTypes = {
  data: PropTypes.array.isRequired
};

export default ChartPie;
