import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import './datetime-counter.css';

function DatetimeCounter() {
  const [time, setTime] = useState({
    D: dayjs('2024-03-23').diff(dayjs(), 'days'),
    H: dayjs().format('HH'),
    M: dayjs().format('mm'),
    S: dayjs().format('ss'),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        D: dayjs('2024-03-23').diff(dayjs(), 'days') * -1,
        H: dayjs().format('HH'),
        M: dayjs().format('mm'),
        S: dayjs().format('ss'),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='datetime-counter'>
      {Object.entries(time).map(([key, value]) => (
        <div key={key} className='datetime-counter__item'>
          <span className='datetime-counter__value'>{value}</span>
          <span className='datetime-counter__label'>{key}</span>
        </div>
      ))}
    </div>
  );
}

export default DatetimeCounter;
