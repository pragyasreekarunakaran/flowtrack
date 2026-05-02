export function generateInsightsAndActions(metrics) {
  const insights = [];

  if (metrics.cycleTime > 5) {
    insights.push({
      id: 'cycle-time-high',
      metric: 'Cycle Time',
      status: 'warning',
      insight: 'Cycle time is high → development tasks may be taking longer than expected.',
      actions: [
        'Break tasks into smaller, more manageable units.',
        'Identify and remove context-switching blockers.'
      ],
    });
  } else {
    insights.push({
      id: 'cycle-time-ok',
      metric: 'Cycle Time',
      status: 'good',
      insight: 'Cycle time is healthy → tasks are moving steadily from In Progress to Done.',
      actions: [],
    });
  }

  if (metrics.leadTime > 7) {
    insights.push({
      id: 'lead-time-high',
      metric: 'Lead Time',
      status: 'warning',
      insight: 'High lead time → PRs are taking too long to go from open to deployed.',
      actions: [
        'Allocate dedicated team time for PR reviews.',
        'Automate testing to speed up PR approvals.'
      ],
    });
  }

  if (metrics.bugRate > 0.2) {
    insights.push({
      id: 'bug-rate-high',
      metric: 'Bug Rate',
      status: 'warning',
      insight: 'High bug rate → potential quality or testing issues.',
      actions: [
        'Increase test coverage before deployment.',
        'Add a staging verification step to the pipeline.'
      ],
    });
  }

  if (metrics.deploymentFrequency < 4) {
    insights.push({
      id: 'deploy-freq-low',
      metric: 'Deployment Frequency',
      status: 'warning',
      insight: 'Low deployment frequency → code is not reaching users often enough.',
      actions: [
        'Automate the deployment pipeline to reduce manual effort.',
        'Release smaller, incremental feature batches.'
      ],
    });
  } else {
    insights.push({
      id: 'deploy-freq-ok',
      metric: 'Deployment Frequency',
      status: 'good',
      insight: 'Deployment frequency is optimal → users are getting value consistently.',
      actions: [],
    });
  }

  if (metrics.prThroughput < 12) {
    insights.push({
      id: 'pr-throughput-low',
      metric: 'PR Throughput',
      status: 'warning',
      insight: 'Low PR throughput → team might be blocked or work units are too large.',
      actions: [
        'Improve PR review turnaround time.',
        'Ensure work is properly scoped before beginning development.'
      ],
    });
  }

  // If we only have good ones, maybe we just show warning ones for focus.
  // Actually, filtering to warnings only or keeping good ones as positive reinforcement?
  // Let's return all, and the UI can sort warnings first.
  return insights.sort((a, b) => (a.status === 'warning' ? -1 : 1));
}

// Helper to determine metric health
export function getMetricHealth(metricKey, value) {
  switch (metricKey) {
    case 'cycleTime': return value <= 5 ? 'good' : 'warning';
    case 'leadTime': return value <= 7 ? 'good' : 'warning';
    case 'bugRate': return value <= 0.2 ? 'good' : 'warning';
    case 'deploymentFrequency': return value >= 4 ? 'good' : 'warning';
    case 'prThroughput': return value >= 12 ? 'good' : 'warning';
    default: return 'good';
  }
}

export const METRIC_LABELS = {
  cycleTime: 'Cycle Time (Days)',
  leadTime: 'Lead Time (Days)',
  bugRate: 'Bug Rate (%)',
  deploymentFrequency: 'Deploys / Wk',
  prThroughput: 'PRs Merged / Wk',
};
