import Link from 'next/link';
import styles from '../styles/person.module.css'
export default function Person() {
  return(
    <div className={styles.container}>
       <h1>会話したい人物名</h1>
	  <button className={styles.button1}>上司</button>
	  <button className={styles.button2}>恋人</button>
	  <button className={styles.button3}>お客様</button>
	  <div className={styles.content}>
	    <Link href="/">
	      <button className={styles.button4}>戻る</button>
	    </Link>
	    <button className={styles.button5}>決定</button>
	  </div>
    </div>
  )
}
