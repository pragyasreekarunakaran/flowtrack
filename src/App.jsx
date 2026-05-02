import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Insights from './pages/Insights';
import ManagerSummary from './pages/ManagerSummary';
import InputData from './pages/InputData';
import { MetricsProvider } from './context/MetricsContext';

function App() {
  return (
    <MetricsProvider>
      <BrowserRouter>
        <div className="app-container">
          <header className="header">
            <h1>FlowTrack</h1>
            <p>Developer Productivity Insights. Turning raw metrics into actionable steps.</p>
          </header>

          <Navbar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/summary" element={<ManagerSummary />} />
              <Route path="/input" element={<InputData />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </MetricsProvider>
  );
}

export default App;
