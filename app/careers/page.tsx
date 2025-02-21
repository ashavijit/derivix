import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ApplyModal } from '@/components/apply-modal'

const benefits = [
  {
    title: 'Build Real-time Trading Tech',
    description:
      'Work on cutting-edge trading technology that impacts thousands of traders',
    icon: '💻',
  },
  {
    title: 'Modern Tech Stack',
    description:
      'Use the latest tools including Node.js, Kafka, Redis, and Next.js',
    icon: '🛠',
  },
  {
    title: 'Remote & Flexible',
    description: 'Work from anywhere with flexible hours and work-life balance',
    icon: '🌍',
  },
]

const positions = [
  {
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    skills: ['React', 'Next.js', 'TypeScript'],
  },
  {
    title: 'Backend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    skills: ['Node.js', 'Kafka', 'Redis'],
  },
  {
    title: 'Quantitative Analyst',
    department: 'Research',
    location: 'Remote',
    type: 'Full-time',
    skills: ['Python', 'Algo Trading', 'Statistics'],
  },
]

export default function CareersPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Join the Derivix Team</h1>
        <p className="text-xl text-muted-foreground">
          Help us build the future of trading technology
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="p-6">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
        <div className="space-y-6">
          {positions.map((position) => (
            <Card key={position.title} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{position.title}</h3>
                  <p className="text-muted-foreground">
                    {position.department} · {position.location} ·{' '}
                    {position.type}
                  </p>
                </div>
                <ApplyModal position={position} />
              </div>
              <div className="flex gap-2">
                {position.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
