import styles from '../styles/result.module.css'
export default function Person() {
  return(
    <div className={styles.container}>
      <h1>会話したい人物名</h1>
      <div className={styles.circle}></div>
	<p>親密度</p>
	<h1>100%</h1>
    </div>
  );
}       

