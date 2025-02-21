"use client";

import { useEffect, useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
}

export function MarketTicker() {
  const [markets, setMarkets] = useState<MarketData[]>([
    { symbol: 'NIFTY', price: 22156, change: 1.2 },
    { symbol: 'BANKNIFTY', price: 47234, change: -0.8 },
    { symbol: 'FINNIFTY', price: 21345, change: 0.5 },
    { symbol: 'MIDCAPNIFTY', price: 12567, change: 2.1 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarkets(markets => markets.map(market => ({
        ...market,
        price: market.price + (Math.random() - 0.5) * 10,
        change: market.change + (Math.random() - 0.5) * 0.1,
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-muted/30 backdrop-blur-sm border-y">
      <div className="container mx-auto overflow-hidden py-2">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {markets.map((market) => (
            <div key={market.symbol} className="inline-flex items-center gap-2">
              <span className="font-semibold">{market.symbol}</span>
              <span>{market.price.toFixed(2)}</span>
              <span className={`flex items-center ${market.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {market.change >= 0 ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
                {Math.abs(market.change).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}