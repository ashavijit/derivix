import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, BarChart2, Lock, Zap, LineChart } from 'lucide-react'
import Link from 'next/link'
import { MarketTicker } from '@/components/market-ticker'
import { LiveChart } from '@/components/live-chart'
import { FloatingNav } from '@/components/floating-nav'

export default function Home() {
  return (
    <main>
      <nav className="absolute top-4 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LineChart className="h-8 w-8" />
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                Derivix
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col min-h-screen">
        <MarketTicker />

        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <LiveChart />
          <div className="hero-gradient" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Empowering Traders with Cutting-Edge Technology
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the next generation of trading with advanced
                analytics, real-time data, and powerful automation tools.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/dashboard">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/features">Explore Features</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">₹1.2T+</div>
                <div className="text-muted-foreground">
                  Daily Trading Volume
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50,000+</div>
                <div className="text-muted-foreground">Active Traders</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99.99%</div>
                <div className="text-muted-foreground">System Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Derivix?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <BarChart2 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Advanced Analytics
                </h3>
                <p className="text-muted-foreground">
                  Get deep insights into market trends with our powerful
                  analytical tools and real-time data visualization.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Execute trades instantly with our high-performance
                  infrastructure and low-latency connections.
                </p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Lock className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Bank-Grade Security
                </h3>
                <p className="text-muted-foreground">
                  Your assets are protected with military-grade encryption and
                  multi-layer security protocols.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of traders who trust Derivix for their trading
              needs.
            </p>
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Start Trading Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}
