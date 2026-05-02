import React, { createContext, useState, useEffect } from 'react';

export const MetricsContext = createContext();

const DEFAULT_METRICS = {
  cycleTime: 6,
  leadTime: 8,
  bugRate: 0.3,
  deploymentFrequency: 3,
  prThroughput: 10,
};

export const MetricsProvider = ({ children }) => {
  const [metrics, setMetrics] = useState(() => {
    const saved = localStorage.getItem('flowtrack_metrics');
    return saved ? JSON.parse(saved) : DEFAULT_METRICS;
  });

  useEffect(() => {
    localStorage.setItem('flowtrack_metrics', JSON.stringify(metrics));
  }, [metrics]);

  return (
    <MetricsContext.Provider value={{ metrics, setMetrics }}>
      {children}
    </MetricsContext.Provider>
  );
};
