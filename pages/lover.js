import React, { useState } from 'react';
import styles from '../styles/lovers.module.css';

export default function Lover({ selectedPerson }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <button
          className={`${styles.optionButton} ${
            selectedOption === 'option3' ? styles.active : ''
          }`}
          onClick={() => handleOptionChange('option3')}
        >
          選択肢3
        </button>
        <button
          className={`${styles.optionButton} ${
            selectedOption === 'option4' ? styles.active : ''
          }`}
          onClick={() => handleOptionChange('option4')}
        >
          選択肢4
        </button>
      </div>
    </div>
  );
}

