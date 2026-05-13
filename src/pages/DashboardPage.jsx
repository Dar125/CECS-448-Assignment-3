import PlaceholderScreen from '../components/PlaceholderScreen.jsx'

function DashboardPage() {
  return (
    <PlaceholderScreen
      eyebrow="Main hub"
      title="Dashboard"
      description="Future home for progress, next steps, deadlines, alerts, and course planning entry points."
      nextActions={[
        { label: 'Plan My Courses', to: '/plan-courses' },
        { label: 'View Alert', to: '/alerts' },
        { label: 'Find Support', to: '/resources' },
      ]}
    />
  )
}

export default DashboardPage
