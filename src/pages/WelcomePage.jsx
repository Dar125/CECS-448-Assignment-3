import PlaceholderScreen from '../components/PlaceholderScreen.jsx'

function WelcomePage() {
  return (
    <PlaceholderScreen
      eyebrow="First-time user flow"
      title="Welcome"
      description="Entry point for new students before major selection and graduation goal setup."
      nextActions={[{ label: 'Get Started', to: '/onboarding/major' }]}
    />
  )
}

export default WelcomePage
