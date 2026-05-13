import PlaceholderScreen from '../components/PlaceholderScreen.jsx'

function AlertsPage() {
  return (
    <PlaceholderScreen
      eyebrow="High-stress flow"
      title="Alerts and Errors"
      description="Placeholder for registration holds, GPA warnings, prerequisite errors, and recovery guidance."
      nextActions={[
        { label: 'Find Support', to: '/resources' },
        { label: 'Back to Dashboard', to: '/dashboard' },
      ]}
    />
  )
}

export default AlertsPage
