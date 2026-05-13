import PlaceholderScreen from '../components/PlaceholderScreen.jsx'

function GraduationGoalPage() {
  return (
    <PlaceholderScreen
      eyebrow="Onboarding"
      title="Graduation Goal"
      description="Placeholder for expected graduation term and transfer credit questions."
      nextActions={[
        { label: 'Back to Major', to: '/onboarding/major' },
        { label: 'Finish Setup', to: '/dashboard' },
      ]}
    />
  )
}

export default GraduationGoalPage
