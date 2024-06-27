import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import data from '../../data/data.json';

const Chart = ({ timeframe }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Filter data based on the timeframe (for simplicity, it's not implemented here)
    setChartData(data);
  }, [timeframe]);

  const handlePointClick = (data) => {
    alert(`Timestamp: ${data.activeLabel}\nValue: ${data.activePayload[0].value}`);
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={chartData}
        onClick={handlePointClick}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
