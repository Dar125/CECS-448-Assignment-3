export const alerts = [
  {
    id: 'advisor-hold',
    title: 'Advisor meeting required',
    severity: 'warning',
    detail: 'Schedule your advisor meeting before registration opens.',
    actionLabel: 'Schedule Now',
    to: '/alerts',
    recoveryAction: 'Schedule with advisor',
  },
  {
    id: 'prerequisite-missing',
    title: 'Prerequisite needs attention',
    severity: 'warning',
    detail: 'CECS 491A is blocked until the prerequisite path is updated.',
    actionLabel: 'Review Plan',
    to: '/plan-courses',
    recoveryAction: 'Add prerequisite to plan',
  },
]
