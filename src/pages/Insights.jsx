import React, { useContext, useMemo } from 'react';
import { MetricsContext } from '../context/MetricsContext';
import { generateInsightsAndActions } from '../utils/logic';
import InsightsSection from '../components/InsightsSection';
import ActionsSection from '../components/ActionsSection';

const Insights = () => {
  const { metrics } = useContext(MetricsContext);
  const insights = useMemo(() => generateInsightsAndActions(metrics), [metrics]);

  return (
    <div className="page-container animate-fade-in">
      <header className="page-header">
        <h2>🧠 AI Insights & Recommended Actions</h2>
        <p>Deep dive into what your metrics mean and how to improve them.</p>
      </header>

      <div className="analysis-grid">
        <InsightsSection insights={insights} />
        <ActionsSection insights={insights} />
      </div>
    </div>
  );
};

export default Insights;
