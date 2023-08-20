import React, { useState } from 'react';
import styles from '../styles/customer.module.css';

export default function Customer({ selectedPerson }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <button
          className={`${styles.optionButton} ${
            selectedOption === 'option5' ? styles.active : ''
          }`}
          onClick={() => handleOptionChange('option5')}
        >
          選択肢5
        </button>
        <button
          className={`${styles.optionButton} ${
            selectedOption === 'option6' ? styles.active : ''
          }`}
          onClick={() => handleOptionChange('option6')}
        >
          選択肢6
        </button>
      </div>
    </div>
  );
}

