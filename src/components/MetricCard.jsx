import React from 'react';
import { getMetricHealth, METRIC_LABELS } from '../utils/logic';

const MetricCard = ({ metricKey, value }) => {
  const health = getMetricHealth(metricKey, value);
  const label = METRIC_LABELS[metricKey] || metricKey;

  // Format the value for display
  const displayValue = metricKey === 'bugRate' ? `${(value * 100).toFixed(0)}%` : value;

  return (
    <div className={`glass-card metric-card`}>
      <div className={`status-dot status-${health}-bg`} title={`Status: ${health}`}></div>
      <div className={`metric-value status-${health}`}>
        {displayValue}
      </div>
      <div className="metric-label">
        {label}
      </div>
    </div>
  );
};

export default MetricCard;
