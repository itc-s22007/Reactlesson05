import React, { useState } from 'react';
import styles from '../styles/tolk.module.css';

export default function Tolk({ selectedPerson }) {
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
          選択肢２
        </button>
      </div>
    </div>
  );
}

/*import React, { useState } from 'react';
import styles from '../styles/tolk.module.css';

export default function Tolk({ selectedPerson }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };


  return (
    <div className={styles.container}>
      <div className={styles.options}>
	{selectedPerson === '上司' && (
	  <>
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
              選択肢２
	    </button>
	  </>
	)}
	{selectedPerson === '恋人' && (
	  <>
	    <button
	      className={`${styles.optionButton} ${
	        selectedOption === 'option3' ? styles.active : ''
	      }`}
	      onClick={() => handleOptionChange('option3')}
	    >
	      選択肢３
	    </button>
	    <button
	      className={`${styles.optionButton} ${
		selectedOption === 'option4' ? styles.active : ''
	      }`}
 	      onClick={() => handleOptionChange('option4')}
	    >
	      選択肢４
	    </button>
	  </>
	)} 
	{selectedPerson === 'お客さん' && (
	  <>
	    <button
  	      className={`${styles.optionButton} ${
	        selectedOption === 'option5' ? styles.active : ''
	      }`}
	      onClick={() => handleOptionChange('option5')}
	     >
	      選択肢５
	    </button>
	    <button
	      className={`${styles.optionButton} ${
		 selectedOption === 'option6' ? styles.active : ''
	      }`}
	      onClick={() => handleOptionChange('option6')}
	     >
   	      選択肢６
	    </button>
	  </>
	)}
      </div>
    </div>
  );
}*/
