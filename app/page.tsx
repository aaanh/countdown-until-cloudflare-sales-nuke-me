'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const CREATED_ON = new Date('2019-09-13T02:46:34.631496Z');

export default function Home() {
  const [elapsedTime, setElapsedTime] = useState<string>('');

  useEffect(() => {
    const calculateElapsedTime = () => {
      const now = new Date();
      const diff = now.getTime() - CREATED_ON.getTime();

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setElapsedTime(
        `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
      );
    };

    calculateElapsedTime();
    const interval = setInterval(calculateElapsedTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl text-center">
        My Cloudflare account has survived for<br></br>
        <span className="font-bold text-orange-400 font-mono">
          {elapsedTime}
        </span>
      </h1>
      <h2>
        Since {CREATED_ON.toLocaleDateString()} at{' '}
        {CREATED_ON.toLocaleTimeString()}
      </h2>
      <div className="italic text-center text-primary/80">
        <p>
          I have in total{' '}
          <span className="font-bold text-orange-400">9 websites</span> (or
          zones) with numerous projects in subdomain.
        </p>
      </div>
      <div className="mt-8">
        <p className="text-center font-bold">Resources</p>
        <ul className="list-disc text-left">
          <li>
            <a href="https://robindev.substack.com/p/cloudflare-took-down-our-website">
              Cloudflare took down our website after trying to force us to pay
              120k$ within 24h
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@brittanypeachhh/video/7323004085043612959?lang=en">
              Brittany in Sales recorded herself being laid off
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
