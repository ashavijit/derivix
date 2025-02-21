"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { useState } from "react"

const plans = [
  {
    name: "Basic",
    price: 0,
    features: ["Live Data", "Basic Charts", "Single Device Access", "Community Support"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: 999,
    features: [
      "Everything in Basic",
      "Algo Trading",
      "Smart Alerts",
      "Advanced Charts",
      "Priority Support",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Elite",
    price: 2499,
    features: [
      "Everything in Pro",
      "AI Insights",
      "API Access",
      "Custom Indicators",
      "Dedicated Account Manager",
    ],
    cta: "Get Elite",
    popular: false,
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Choose the plan that best fits your trading needs
        </p>

        <div className="flex items-center justify-center gap-4">
          <span>Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle yearly billing"
          />
          <span>Yearly (Save 20%)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`p-6 ${
              plan.popular ? "border-primary" : ""
            } relative`}
          >
            {plan.popular && (
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl">
                Popular
              </span>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">
                ₹{isYearly ? Math.floor(plan.price * 0.8) : plan.price}
              </span>
              {plan.price > 0 && <span className="text-muted-foreground">/mo</span>}
            </div>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full" asChild>
              <Link href="/signup">{plan.cta}</Link>
            </Button>
          </Card>
        ))}
      </div>
    </main>
  )
}