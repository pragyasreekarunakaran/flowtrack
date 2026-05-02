import React, { useContext } from 'react';
import { MetricsContext } from '../context/MetricsContext';
import { METRIC_LABELS } from '../utils/logic';

const InputData = () => {
  const { metrics, setMetrics } = useContext(MetricsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMetrics(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  return (
    <div className="page-container animate-fade-in">
      <header className="page-header">
        <h2>✍️ Input Data</h2>
        <p>Update your engineering metrics to instantly see new insights.</p>
      </header>

      <div className="glass-card form-container">
        <form className="metrics-form" onSubmit={(e) => e.preventDefault()}>
          {Object.keys(metrics).map((key) => (
            <div className="form-group" key={key}>
              <label htmlFor={key}>{METRIC_LABELS[key] || key}</label>
              <input
                type="number"
                id={key}
                name={key}
                value={metrics[key]}
                onChange={handleChange}
                step={key === 'bugRate' ? '0.01' : '1'}
                min="0"
                className="glass-input"
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default InputData;
