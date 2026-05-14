import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/myplan.css'

const courses = [
  {
    code: 'CS 410',
    title: 'Operating Systems',
    desc: 'Study of operating system design and implementation.',
    instructor: 'Dr. Sarah Johnson',
    schedule: 'MWF 10:00-10:50',
    seats: '12 / 30 seats',
    rating: '4.5 / 5.0',
    eligible: true,
    prereqs: ['CS 301 ✓', 'CS 250 ✓'],
  },
  {
    code: 'CS 425',
    title: 'Machine Learning',
    desc: 'Introduction to machine learning algorithms and applications.',
    instructor: 'Dr. Michael Chen',
    schedule: 'TR 13:00-14:15',
    seats: '5 / 25 seats',
    rating: '4.8 / 5.0',
    eligible: false,
    prereqs: ['CS 301 ✓', 'STAT 400 (missing)'],
  },
  {
    code: 'CS 360',
    title: 'Computer Networks',
    desc: 'Principles of computer networking and internet protocols.',
    instructor: 'Dr. Emily Rodriguez',
    schedule: 'MWF 14:00-14:50',
    seats: '18 / 30 seats',
    rating: '4.3 / 5.0',
    eligible: true,
    prereqs: ['CS 250 ✓'],
  },
]

function CoursePlanningPage() {
  const [activeTab, setActiveTab] = useState('browse')

  return (
    <div className="my-plan-page">
      <aside className="plan-sidebar">
        <div className="brand-box">
          <div className="brand-icon">🎓</div>

          <div>
            <h2>Academic Planner</h2>
            <p>First-Gen Success</p>
          </div>
        </div>

        <nav className="side-links">
          <Link to="/dashboard">⌂ Dashboard</Link>
          <Link to="/my-plan">▱ My Plan</Link>
          <Link to="/plan-courses" className="selected">
            ☰ Courses
          </Link>
          <Link to="/resources">◎ Resources</Link>
        </nav>
      </aside>

      <main className="plan-main course-page-main">
        <div className="plan-header">
          <div>
            <h1>Course Planning</h1>
            <p>Browse and plan your courses</p>
          </div>
        </div>

        <div className="tab-box">
          <button
            className={activeTab === 'browse' ? 'active' : ''}
            onClick={() => setActiveTab('browse')}
          >
            Browse Courses
          </button>

          <button
            className={activeTab === 'schedule' ? 'active' : ''}
            onClick={() => setActiveTab('schedule')}
          >
            Current Schedule
          </button>
        </div>

        {activeTab === 'browse' ? (
          <section className="semester-section">
            {courses.map((course) => (
              <div className="course-card" key={course.code}>
                <div className="semester-title-row">
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'center',
                      }}
                    >
                      <h2>
                        {course.code} - {course.title}
                      </h2>

                      <span
                        className={`status ${
                          course.eligible ? 'done' : 'planned'
                        }`}
                      >
                        {course.eligible
                          ? 'Eligible'
                          : 'Prerequisites Not Met'}
                      </span>
                    </div>

                    <p>{course.desc}</p>
                  </div>

                  <button className="button-link">
                    View Details
                  </button>
                </div>

                <div className="course-grid">
                  <div className="course-box">
                    <p>Instructor</p>
                    <h4>{course.instructor}</h4>
                  </div>

                  <div className="course-box">
                    <p>Schedule</p>
                    <h4>{course.schedule}</h4>
                  </div>

                  <div className="course-box">
                    <p>Availability</p>
                    <h4>{course.seats}</h4>
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <p>Prerequisites:</p>

                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                      flexWrap: 'wrap',
                      marginTop: '10px',
                    }}
                  >
                    {course.prereqs.map((req) => (
                      <span
                        key={req}
                        className={`status ${
                          req.includes('missing') ? 'planned' : 'done'
                        }`}
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section className="semester-card">
            <div className="semester-title-row">
              <h2>Spring 2026 Schedule</h2>
              <p>15 credits total</p>
            </div>

            <div className="course-grid">
              <div className="course-box">
                <h4>CS 320 - Database Systems</h4>
                <p>TR 09:00-10:15</p>
              </div>

              <div className="course-box">
                <h4>CS 340 - Software Engineering</h4>
                <p>MWF 13:00-13:50</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default CoursePlanningPage
