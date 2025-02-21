'use client'

import { Card } from '@/components/ui/card'
import { Navigation } from '@/components/navigation'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const teamMembers = [
  {
    name: 'Alex Thompson',
    role: 'Founder & CEO',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80',
    bio: 'Former quant trader with 10+ years of experience in algorithmic trading systems.',
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
      email: 'alex@derivix.com',
    },
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80',
    bio: 'Machine learning expert specializing in predictive analytics for financial markets.',
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
      email: 'sarah@derivix.com',
    },
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Product',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80',
    bio: 'Product visionary with extensive experience in fintech and trading platforms.',
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
      email: 'michael@derivix.com',
    },
  },
  {
    name: 'Emily Patel',
    role: 'Lead Developer',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80',
    bio: 'Full-stack developer passionate about creating high-performance trading systems.',
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
      email: 'emily@derivix.com',
    },
  },
]

export default function About() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Team Behind Derivix
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of traders, developers, and financial experts
              passionate about making trading accessible and efficient for
              everyone.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden group">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex space-x-4">
                      <Link
                        href={member.social.twitter}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link
                        href={member.social.github}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                      <Link
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link
                        href={`mailto:${member.social.email}`}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Mail className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Values Section */}
          <div className="mt-32 text-center">
            <h2 className="text-3xl font-bold mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We're constantly pushing the boundaries of what's possible in
                  trading technology.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in open communication and clear, honest business
                  practices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from code to
                  customer service.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our
              passion for innovation in trading technology.
            </p>
            <Button size="lg" asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
