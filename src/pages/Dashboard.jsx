import React, { useContext } from 'react';
import { MetricsContext } from '../context/MetricsContext';
import MetricCard from '../components/MetricCard';

const Dashboard = () => {
  const { metrics } = useContext(MetricsContext);

  return (
    <div className="page-container animate-fade-in">
      <header className="page-header">
        <h2>📊 Metrics Dashboard</h2>
        <p>A quick overview of your key engineering metrics.</p>
      </header>
      
      <div className="metrics-container">
        {Object.entries(metrics).map(([key, value]) => (
          <MetricCard key={key} metricKey={key} value={value} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
