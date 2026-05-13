import PlaceholderScreen from '../components/PlaceholderScreen.jsx'

function MyPlanPage() {
  return (
    <PlaceholderScreen
      eyebrow="Academic roadmap"
      title="My Plan"
      description="Placeholder for semester-by-semester roadmap, planned courses, and degree progress."
      nextActions={[
        { label: 'Plan Courses', to: '/plan-courses' },
        { label: 'Back to Dashboard', to: '/dashboard' },
      ]}
    />
  )
}

export default MyPlanPage
