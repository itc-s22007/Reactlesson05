import React, { useState } from 'react';
import styles from '../styles/tolk.module.css';

export default function Tolk() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };


  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <button
          className={`${styles.optionButton} ${
            selectedOption === 'option1' ? styles.active : ''
          }`}
          onClick={() => handleOptionChange('option1')}
        >
          選択肢1
        </button>
        <button
          className={`${styles.optionButton} ${
            selectedOption === 'option2' ? styles.active : ''
          }`}
          onClick={() => handleOptionChange('option2')}
        >
          選択肢2
        </button>
      </div>
    </div>
  );
}
/*  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <button
          className={selectedOption === 'option1' ? styles.active : ''}
          onClick={() => handleOptionChange('option1')}>
          選択肢1
        </button>
        <button
          className={selectedOption === 'option2' ? styles.active : ''}
          onClick={() => handleOptionChange('option2')}>
          選択肢2
        </button>
      </div>
    </div>
  );
}*/

