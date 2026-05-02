import React, { useContext } from 'react';
import { MetricsContext } from '../context/MetricsContext';
import { getMetricHealth } from '../utils/logic';

const ManagerSummary = () => {
  const { metrics } = useContext(MetricsContext);

  const healthChecks = {
    cycleTime: getMetricHealth('cycleTime', metrics.cycleTime),
    leadTime: getMetricHealth('leadTime', metrics.leadTime),
    bugRate: getMetricHealth('bugRate', metrics.bugRate),
    deploymentFrequency: getMetricHealth('deploymentFrequency', metrics.deploymentFrequency),
    prThroughput: getMetricHealth('prThroughput', metrics.prThroughput),
  };

  const warnings = Object.values(healthChecks).filter(status => status === 'warning').length;
  
  return (
    <div className="page-container animate-fade-in">
      <header className="page-header">
        <h2>👔 Manager Summary</h2>
        <p>A high-level overview of team performance and overall health.</p>
      </header>

      <div className="glass-card summary-card">
        <h3>Team Health Overview</h3>
        <p className="summary-text">
          Currently, the team is tracking <strong>{Object.keys(healthChecks).length}</strong> key metrics. 
          There are <strong>{warnings}</strong> areas requiring attention.
        </p>
        
        <div className="summary-details">
          {warnings === 0 ? (
            <p className="status-good">The team is operating optimally across all tracked metrics. Development speed and quality are excellent.</p>
          ) : (
            <p className="status-warning">
              There are bottlenecks impacting team performance. We recommend focusing on identifying 
              the root causes behind the delayed delivery metrics. Check the AI Insights page for specific 
              actionable steps for the individual contributors.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagerSummary;
