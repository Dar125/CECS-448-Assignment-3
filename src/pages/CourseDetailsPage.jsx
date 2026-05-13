import { useParams } from 'react-router-dom'
import PlaceholderScreen from '../components/PlaceholderScreen.jsx'

function CourseDetailsPage() {
  const { courseId } = useParams()

  return (
    <PlaceholderScreen
      eyebrow="Course detail"
      title="Course Details"
      description={`Placeholder for ${courseId}, including description, prerequisite explanation, and why the course matters.`}
      nextActions={[
        { label: 'Add to Plan', to: '/confirmation' },
        { label: 'Back to Planning', to: '/plan-courses' },
      ]}
    />
  )
}

export default CourseDetailsPage
