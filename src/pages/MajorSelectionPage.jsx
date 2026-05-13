import PlaceholderScreen from '../components/PlaceholderScreen.jsx'

function MajorSelectionPage() {
  return (
    <PlaceholderScreen
      eyebrow="Onboarding"
      title="Major Selection"
      description="Placeholder for selecting a major from a searchable list with plain-language guidance."
      nextActions={[
        { label: 'Back to Welcome', to: '/' },
        { label: 'Continue', to: '/onboarding/graduation' },
      ]}
    />
  )
}

export default MajorSelectionPage
