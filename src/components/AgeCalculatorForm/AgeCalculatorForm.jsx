import React, { useState } from 'react';
import styles from './AgeCalculatorForm.module.css';

const AgeCalculatorForm = ({ onCalculate }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const dateOfBirth = new Date(`${month}/${day}/${year}`);
      onCalculate(dateOfBirth);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!day) {
      validationErrors.day = 'Please enter a day';
    } else if (day < 1 || day > 31) {
      validationErrors.day = 'Please enter a valid day (1-31)';
    }

    if (!month) {
      validationErrors.month = 'Please enter a month';
    } else if (month < 1 || month > 12) {
      validationErrors.month = 'Please enter a valid month (1-12)';
    }

    if (!year) {
      validationErrors.year = 'Please enter a year';
    } else if (year > new Date().getFullYear()) {
      validationErrors.year = 'Please enter a valid year (in the past)';
    }

    const dateOfBirth = new Date(`${month}/${day}/${year}`);
    if (isNaN(dateOfBirth.getTime())) {
      validationErrors.date = 'Please enter a valid date';
    }

    return validationErrors;
  };

  return (
    <form className={styles.ageCalculatorForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="day" className={styles.label}>
          Day
        </label>
        <input
          className={`${styles.formInput} ${errors.day ? styles.error : ''}`}
          id="day"
          type="number"
          placeholder="Enter day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        {errors.day && <p className={styles.errorMessage}>{errors.day}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="month" className={styles.label}>
          Month
        </label>
        <input
          className={`${styles.formInput} ${errors.month ? styles.error : ''}`}
          id="month"
          type="number"
          placeholder="Enter month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        {errors.month && <p className={styles.errorMessage}>{errors.month}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="year" className={styles.label}>
          Year
        </label>
        <input
          className={`${styles.formInput} ${errors.year ? styles.error : ''}`}
          id="year"
          type="number"
          placeholder="Enter year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        {errors.year && <p className={styles.errorMessage}>{errors.year}</p>}
      </div>
      {errors.date && <p className={styles.errorMessage}>{errors.date}</p>}
      <button className={styles.submitButton} type="submit">
        Calculate
      </button>
    </form>
  );
};

export default AgeCalculatorForm;
