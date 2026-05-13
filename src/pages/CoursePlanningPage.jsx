import PlaceholderScreen from '../components/PlaceholderScreen.jsx'

function CoursePlanningPage() {
  return (
    <PlaceholderScreen
      eyebrow="Typical scenario flow"
      title="Course Planning"
      description="Placeholder for recommended courses, other available courses, and prerequisite recovery paths."
      nextActions={[
        { label: 'View Course Details', to: '/courses/cecs-343' },
        { label: 'Save Plan', to: '/confirmation' },
      ]}
    />
  )
}

export default CoursePlanningPage
