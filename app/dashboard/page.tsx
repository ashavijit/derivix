import { Card } from '@/components/ui/card'
import {
  LineChart,
  BarChart2,
  Activity,
  Wallet,
  Settings,
  Bell,
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Wallet className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Portfolio Value</p>
              <h3 className="text-2xl font-bold">₹2,45,678</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Activity className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Today's P&L</p>
              <h3 className="text-2xl font-bold text-green-500">+₹12,345</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <BarChart2 className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Open Positions</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Bell className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Active Alerts</p>
              <h3 className="text-2xl font-bold">5</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <Card className="lg:col-span-2 p-6">
          <h2 className="text-xl font-semibold mb-4">Portfolio Performance</h2>
          <div className="h-[400px] flex items-center justify-center border rounded-lg">
            <p className="text-muted-foreground">Chart Component Here</p>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Order Executed</p>
                  <p className="text-sm text-muted-foreground">
                    NIFTY 19500 CE @ ₹145
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}