import React, { useState } from 'react';
import styles from '../styles/tolk.module.css';

export default function Tolk({ selectedPerson }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const optionScores = {
    option1: 20,
    option2: 20,
    option3: 20,
    option4: 20,
    option5: 20,
    option6: 20,
    option7: 20,
    option8: 20,
    option9: 20,
    option10: 20,
    option11: 20,
    option12: 20,
    option13: 20,
    option14: 20,
    option15: 20,
    option16: 20,
    option17: 20,
    option18: 20,
    option19: 20,
    option20: 20,
    option21: 20,
    option22: 20,
    option23: 20,
    option24: 20,
    option25: 20,
    option26: 20,
    option27: 20,
    option28: 20,
    option29: 20,
    option30: 20,
    option31: 20,
    option32: 20,
    option33: 20,
    option34: 20,
    option35: 20,
    option36: 20,
    option37: 20,
    option38: 20,
    option39: 20,
    option40: 20,
  };
  setScore(score + optionScores[option]);
};

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        {selectedOption === '' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option1')}
            >
              選択肢1
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option2')}
            >
              選択肢２
            </button>
          </>
        )}

        {selectedOption === 'option1' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option3')}
            >
              選択肢3
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option4')}
            >
              選択肢4
            </button>
          </>
        )}
        {selectedOption === 'option3' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option7')}
            >
              選択肢7
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option8')}
            >
              選択肢8
            </button>

          </>
        )}
        {selectedOption === 'option7' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option15')}
            >
              選択肢15
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option16')}
            >
              選択肢16
            </button>
          </>
        )}
        {selectedOption === 'option8' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option17')}
            >
              選択肢17
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option18')}
            >
              選択肢18
            </button>
          </>
        )}

        {selectedOption === 'option15' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option19')}
            >
              選択肢19
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option20')}
            >
              選択肢20
            </button>
          </>
        )}
        {selectedOption === 'option9' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option21')}
            >
              選択肢21
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option22')}
            >
              選択肢22
            </button>
          </>
        )}
        {selectedOption === 'option21' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option23')}
            >
              選択肢23
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option24')}
            >
              選択肢24
            </button>
          </>
        )}
        {selectedOption === 'option17' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option25')}
            >
              選択肢25
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option26')}
            >
              選択肢26
            </button>
          </>
        )}
        {selectedOption === 'option25' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option27')}
            >
              選択肢27
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option28')}
            >
              選択肢28
            </button>
          </>
        )}
        {selectedOption === 'option16' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option29')}
            >
              選択肢29
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option30')}
            >
              選択肢30
            </button>
          </>
        )}
        {selectedOption === 'option18' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option31')}
            >
              選択肢31
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option32')}
            >
              選択肢32
            </button>
          </>
        )}
        {selectedOption === 'option22' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option33')}
            >
              選択肢33
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option34')}
            >
              選択肢35
            </button>
          </>
        )}
        {selectedOption === 'option10' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option35')}
            >
              選択肢35
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option36')}
            >
              選択肢36
            </button>
          </>
        )}
        {selectedOption === 'option35' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option37')}
            >
              選択肢37
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option38')}
            >
              選択肢38
            </button>
          </>
        )}
        {selectedOption === 'option36' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option39')}
            >
              選択肢39
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option40')}
            >
              選択肢40
            </button>
          </>
        )}


        {selectedOption === 'option2' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option5')}
            >
              選択肢5
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option6')}
            >
              選択肢6
            </button>
          </>
        )}
        {selectedOption === 'option4' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option9')}
            >
              選択肢9
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option10')}
            >
              選択肢10
            </button>

          </>
        )}

        {selectedOption === 'option5' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option11')}
            >
              選択肢11
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option12')}
            >
              選択肢12
            </button>
          </>
        )}

        {selectedOption === 'option6' && (
          <>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option13')}
            >
              選択肢13
            </button>
            <button
              className={`${styles.optionButton}`}
              onClick={() => handleOptionChange('option14')}
            >
              選択肢14
            </button>
          </>
        )}
      </div>
    </div>
  );
}
