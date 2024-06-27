import React, { useState } from 'react';
import Chart from './components/chart';
import TimeframeSelector from './components/TimeframeSelector';
import './styles/App.css';

const App = () => {
  const [timeframe, setTimeframe] = useState('daily');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Charting App</h1>
      </header>
      <TimeframeSelector onSelect={setTimeframe} />
      <div className="chart-container">
        <Chart timeframe={timeframe} />
      </div>
    </div>
  );
};

export default App;
