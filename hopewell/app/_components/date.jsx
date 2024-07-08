'use client'

import React, { useState, useEffect } from 'react';
import styles from './component_styles/clock.module.css';
import { format } from 'date-fns';

const DateTimeCard = () => {
  // State to store the current date and time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the date and time every second
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format the date as "23 Dec 2024"
  const formattedDate = format(currentDateTime, 'dd MMM yyyy');

  return (
    <div className={styles.card}>
      <div className={styles.time}>
        <p>{currentDateTime.toLocaleTimeString()}</p>
      </div>
      <div className={styles.date}>
        <p>{formattedDate}</p> {/* Updated line */}
      </div>
    </div>
  );
};

export default DateTimeCard;
