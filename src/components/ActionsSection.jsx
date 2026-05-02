import React from 'react';

const ActionsSection = ({ insights }) => {
  // Extract actions that need attention
  const actionableInsights = insights.filter(item => item.actions && item.actions.length > 0);

  return (
    <div className="section-container">
      <h2>🚀 Recommended Actions</h2>
      {actionableInsights.length === 0 ? (
        <p>Keep up the good work! No immediate actions required.</p>
      ) : (
        actionableInsights.map((item) => (
          <div key={`${item.id}-actions`} className="glass-card action-item">
            <div className="insight-header">
              <span className="insight-metric-tag" style={{ background: 'var(--card-border)', color: 'var(--text-main)' }}>
                To improve {item.metric}
              </span>
            </div>
            <ul className="action-list">
              {item.actions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default ActionsSection;
