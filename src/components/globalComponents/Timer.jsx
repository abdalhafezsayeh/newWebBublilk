import { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(5 * 60 * 1000);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime(prevTime => prevTime - 1000);
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    if (time <= 0) {
      clearInterval(interval.current);
    }
  }, [time]);

  const minutes = Math.floor((time / 1000 / 60) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  return (
    <div>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
