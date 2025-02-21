"use client";

import { useEffect, useState } from 'react';
import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts';

interface DataPoint {
  timestamp: number;
  value: number;
}

export function LiveChart() {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const initialData = Array.from({ length: 30 }, (_, i) => ({
      timestamp: Date.now() - (29 - i) * 1000,
      value: 100 + Math.random() * 20,
    }));
    setData(initialData);

    const interval = setInterval(() => {
      setData(currentData => {
        const newData = [...currentData.slice(1), {
          timestamp: Date.now(),
          value: currentData[currentData.length - 1].value + (Math.random() - 0.5) * 5,
        }];
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] absolute top-0 left-0 opacity-20">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis hide domain={['auto', 'auto']} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--primary))"
            fill="url(#chartGradient)"
            strokeWidth={2}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}