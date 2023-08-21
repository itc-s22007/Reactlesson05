// Person.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/person.module.css';
import Tolk from 'pages/tolk1';

export default function Person() {
  const [selectedPerson, setSelectedPerson] = useState('');

  const handlePersonChange = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className={styles.container}>
      <h1>会話したい人物名</h1>
      <Link href="/tolk1">
        <button
          className={styles.button1}
          onClick={() => handlePersonChange('上司')}
        >
          上司
        </button>
      </Link>
      <Link href="/lover">
        <button
          className={styles.button2}
          onClick={() => handlePersonChange('恋人')}
        >
          恋人
        </button>
      </Link>
      <Link href="/customer">
        <button
          className={styles.button3}
          onClick={() => handlePersonChange('お客様')}
        >
          お客様
        </button>
      </Link>

      {selectedPerson && <Tolk selectedPerson={selectedPerson} />}
    </div>
  );
}


/*import Link from 'next/link';
import styles from '../styles/person.module.css'
import React, { useState } from 'react'

export default function Person() {
  const [selectedPerson, setSelectedPerson] = useState('');

  const handlePersonChange = (person) => {
    setSelectedPerson(person);
  };
  return(
    <div className={styles.container}>
       <h1>会話したい人物名</h1>
       <Link href="/tolk1">
	 <button
	   className={styles.button1} 
	   onClick={() => handlePersonChange('上司')}
	 >
	   上司
	 </button>
       </Link>
       <Link href="/lover">
	 <button
	   className={styles.button2}
	   onClick={() => handlePersonChange('恋人')}
	 >
	   恋人
	 </button>
       </Link>
       <Link href="/customer">
	 <button
	   className={styles.button3}
	   onClick={() => handlePersonChange('お客様')}
	 >
	   お客様
	 </button>
       </Link>
    </div>
  );
}*/
