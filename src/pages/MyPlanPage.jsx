import { Link } from 'react-router-dom'

const semesters = [
  {
    term: 'Fall 2024',
    status: 'Completed',
    statusColor: 'green',
    credits: 15,
    gpa: '3.4',
    courses: [
      { code: 'ENG 101', title: 'English Composition I', credits: 3, grade: 'A-' },
      { code: 'MATH 141', title: 'Calculus I', credits: 4, grade: 'B+' },
      { code: 'CS 101', title: 'Intro to Computer Science', credits: 3, grade: 'A' },
      { code: 'HIST 110', title: 'World History', credits: 3, grade: 'B' },
      { code: 'PE 100', title: 'Physical Education', credits: 2, grade: 'A' },
    ],
  },
  {
    term: 'Spring 2025',
    status: 'Completed',
    statusColor: 'green',
    credits: 16,
    gpa: '3.5',
    courses: [
      { code: 'ENG 102', title: 'English Composition II', credits: 3, grade: 'A' },
      { code: 'MATH 142', title: 'Calculus II', credits: 4, grade: 'B+' },
      { code: 'CS 201', title: 'Data Structures', credits: 3, grade: 'A-' },
      { code: 'PHYS 211', title: 'Physics I', credits: 4, grade: 'B' },
      { code: 'MUS 100', title: 'Music Appreciation', credits: 2, grade: 'A' },
    ],
  },
  {
    term: 'Fall 2025',
    status: 'In Progress',
    statusColor: 'blue',
    credits: 15,
    courses: [
      { code: 'CS 301', title: 'Algorithms', credits: 3 },
      { code: 'CS 253', title: 'Computer Architecture', credits: 3 },
      { code: 'MATH 241', title: 'Linear Algebra', credits: 3 },
      { code: 'STAT 400', title: 'Applied Statistics', credits: 3 },
      { code: 'GE 210', title: 'Ethics and Society', credits: 3 },
    ],
  },
  {
    term: 'Spring 2026',
    status: 'Planned',
    statusColor: 'purple',
    credits: 15,
    courses: [
      { code: 'CS 343', title: 'Software Engineering', credits: 3 },
      { code: 'CS 425', title: 'Machine Learning', credits: 3, warning: true },
      { code: 'CS 346', title: 'Microcontrollers', credits: 3 },
      { code: 'GE 320', title: 'Global Issues', credits: 3 },
      { code: 'COMM 130', title: 'Public Speaking', credits: 3 },
    ],
  },
]

function Sidebar() {
  const navItems = [
    { label: 'Dashboard', to: '/dashboard', icon: '⌂' },
    { label: 'My Plan', to: '/my-plan', icon: '▧', active: true },
    { label: 'Courses', to: '/plan-courses', icon: '◫' },
    { label: 'Resources', to: '/resources', icon: '◎' },
  ]

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-white/10 bg-[#08111a]">
      <div className="flex items-center gap-3 border-b border-white/10 p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
          🎓
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Academic Planner</h2>
          <p className="text-xs text-slate-400">First-Gen Success</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
              item.active
                ? 'bg-indigo-500 text-white'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

function StatusBadge({ status, color }) {
  const colors = {
    green: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    blue: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    purple: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
  }

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${colors[color]}`}>
      {status}
    </span>
  )
}

function CourseCard({ course }) {
  return (
    <Link
      to="/course-details"
      className={`block rounded-xl border p-4 transition duration-200 hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
        course.warning
          ? 'border-amber-500/40 bg-amber-500/5'
          : 'border-white/10 bg-[#0f1726]'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold text-white">{course.code}</h4>
          <p className="mt-1 text-sm text-slate-300">{course.title}</p>
        </div>

        {course.grade && (
          <span className="rounded-lg border border-white/10 px-2 py-1 text-xs text-slate-300">
            {course.grade}
          </span>
        )}

        {course.warning && (
          <span className="rounded-lg border border-amber-400/30 bg-amber-400/10 px-2 py-1 text-xs text-amber-300">
            Check
          </span>
        )}
      </div>

      <p className="mt-4 text-xs text-slate-400">{course.credits} credits</p>
    </Link>
  )
}

function SemesterSection({ semester }) {
  const statusIcon =
    semester.status === 'Completed' ? '✓' : semester.status === 'In Progress' ? '●' : '○'

  const iconColor =
    semester.statusColor === 'green'
      ? 'bg-emerald-500'
      : semester.statusColor === 'blue'
      ? 'bg-blue-500'
      : 'bg-indigo-500'

  return (
    <section className="rounded-2xl border border-white/10 bg-[#0d1320] p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className={`flex h-8 w-8 items-center justify-center rounded-full ${iconColor}`}>
            <span className="text-sm font-bold text-white">{statusIcon}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-bold text-white">{semester.term}</h3>
            <StatusBadge status={semester.status} color={semester.statusColor} />
          </div>
        </div>

        <p className="text-sm text-slate-400">
          {semester.credits} credits
          {semester.gpa ? ` • ${semester.gpa} GPA` : ''}
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {semester.courses.map((course) => (
          <CourseCard key={`${semester.term}-${course.code}`} course={course} />
        ))}
      </div>
    </section>
  )
}

function MyPlanPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 px-5 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">
                  My Academic Plan
                </h1>
                <p className="mt-2 text-slate-400">
                  Track your progress toward graduation and understand what comes next.
                </p>
              </div>

              <div className="flex gap-3">
                <button className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10">
                  Share
                </button>
                <button className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10">
                  Export
                </button>
              </div>
            </header>

            <section className="mb-6 rounded-2xl border border-white/10 bg-[#0d1320] p-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-sm text-slate-400">Total Credits</p>
                  <p className="mt-2 text-2xl font-bold text-white">64 / 120</p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[53%] rounded-full bg-indigo-500" />
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Cumulative GPA</p>
                  <p className="mt-2 text-2xl font-bold text-white">3.45</p>
                  <p className="mt-3 text-sm text-slate-400">On track for honors</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Expected Graduation</p>
                  <p className="mt-2 text-2xl font-bold text-white">May 2028</p>
                  <p className="mt-3 text-sm text-slate-400">4 semesters remaining</p>
                </div>
              </div>
            </section>

            <section className="mb-6 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5">
              <div className="flex gap-3">
                <span className="text-amber-300">⚠</span>
                <div>
                  <h2 className="font-semibold text-amber-100">
                    You’re almost ready for CS 425
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    CS 425 Machine Learning requires STAT 400, which you’re taking this
                    semester. Complete STAT 400 with a C or better to stay on track.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8 flex w-full max-w-md rounded-2xl bg-slate-800 p-1">
              <button className="flex-1 rounded-xl bg-[#111827] px-4 py-2 text-sm font-semibold text-white">
                Semester Roadmap
              </button>
              <button className="flex-1 rounded-xl px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white">
                Requirements
              </button>
            </section>

            <section className="space-y-6">
              {semesters.map((semester) => (
                <SemesterSection key={semester.term} semester={semester} />
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default MyPlanPage
