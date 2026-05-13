import PlaceholderScreen from '../components/PlaceholderScreen.jsx'

function ConfirmationPage() {
  return (
    <PlaceholderScreen
      eyebrow="Feedback state"
      title="Confirmation"
      description="Placeholder for success feedback after saving a plan, adding a course, or completing setup."
      nextActions={[
        { label: 'View My Plan', to: '/my-plan' },
        { label: 'Back to Dashboard', to: '/dashboard' },
      ]}
    />
  )
}

export default ConfirmationPage
