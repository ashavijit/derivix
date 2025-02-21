import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const features = [
  {
    title: "Live Market Data",
    description: "Real-time streaming charts and market data at your fingertips",
    icon: "📊",
  },
  {
    title: "Algo Trading Support",
    description: "Automate your trading strategies with our powerful algo trading engine",
    icon: "🤖",
  },
  {
    title: "Smart Alerts",
    description: "Stay informed with customizable alerts for price movements and technical indicators",
    icon: "🔔",
  },
  {
    title: "Advanced Charting",
    description: "Professional-grade charting with custom indicators and drawing tools",
    icon: "📉",
  },
  {
    title: "Risk Management Dashboard",
    description: "Comprehensive risk management with stop-loss and margin calculators",
    icon: "⚠️",
  },
]

export default function FeaturesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Cutting-Edge Trading Tools</h1>
        <p className="text-xl text-muted-foreground">
          Discover the powerful features that make Derivix the choice of professional traders
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature) => (
          <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/signup">Try for Free</Link>
        </Button>
      </div>
    </main>
  )
}