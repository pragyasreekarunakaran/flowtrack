import React from 'react';

const InsightsSection = ({ insights }) => {
  return (
    <div className="section-container">
      <h2>🧠 AI Insights</h2>
      {insights.length === 0 ? (
        <p>No major insights detected. Everything looks great!</p>
      ) : (
        insights.map((item) => (
          <div key={item.id} className="glass-card insight-item">
            <div className="insight-header">
              <span className={`insight-metric-tag status-${item.status}-bg status-${item.status}`}>
                {item.metric}
              </span>
            </div>
            <p className="insight-text">{item.insight}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default InsightsSection;
