import React from 'react';
import styles from './AgeResult.module.css';

const AgeResult = ({ age }) => {
  const { years, months, days } = age;

  return (
    <div className={styles.ageResult}>
      <h2 className={styles.resultHeading}>Your Age</h2>
      <div className={styles.resultDetails}>
        <p className={styles.resultText}>
          Years: <span className={styles.resultNumber}>{years}</span>
        </p>
        <p className={styles.resultText}>
          Months: <span className={styles.resultNumber}>{months}</span>
        </p>
        <p className={styles.resultText}>
          Days: <span className={styles.resultNumber}>{days}</span>
        </p>
      </div>
    </div>
  );
};

export default AgeResult;
