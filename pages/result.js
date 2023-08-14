import styles from '../styles/result.module.css';

export default function Person() {
  return(
    <div className={styles.container}>
      <h1 className={styles.box01}>会話したい人物名</h1>
      <div className={styles.circle}>
	<div className={styles.intimacyContainer}>  
	<p className={styles.intimacy}>親密度</p>
	<h1 className={styles.intimacyValue}>100%</h1>
	</div>  
      </div>  
    </div>
  );
}       

