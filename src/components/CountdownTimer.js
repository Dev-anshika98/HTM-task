import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-bold">Countdown to Hack The Mountains</h1>
      <div className="flex justify-center space-x-4 mt-4">
        <div className="text-2xl">
          {timeLeft.days || '0'}<span className="block text-sm">Days</span>
        </div>
        <div className="text-2xl">
          {timeLeft.hours || '0'}<span className="block text-sm">Hours</span>
        </div>
        <div className="text-2xl">
          {timeLeft.minutes || '0'}<span className="block text-sm">Minutes</span>
        </div>
        <div className="text-2xl">
          {timeLeft.seconds || '0'}<span className="block text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
