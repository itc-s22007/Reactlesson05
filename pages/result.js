import Link from 'next/link'
import styles from '../styles/result.module.css';

export default function Person() {
  return (
    <div className={styles.container}>
      <h1 className={styles.box01}>会話したい人物名</h1>
	     <div className={styles.circleWrapper}>
	     <div className={styles.circle}>
	     <div className={styles.intimacyContainer}>
	     <p className={styles.intimacy}>親密度</p>
	     <h1 className={styles.intimacyValue}>75%</h1>
	     </div>
	     </div>
	     </div>
      <div className={styles.kaiwa}><a>会話の評価： A+</a></div>
      <div className={styles.centeredText}>	  
      <div className={styles.textWithBorder}>	  
      <a className={styles.wakai}>素晴らしい会話体験でした！ユーザーの質問に対して適切な回答を提供し、情報を分かりやすく伝えることができました。ユーザーの要望に応じて適切な提案を行い、円滑なコミュニケーションを実現しました。</a>
      </div>
      </div>	  
      <div className={styles.buttoncampeny}>
        <Link href="/">
          <button className={`${styles.button} ${styles.button01}`}>もう一度</button>
        </Link>
	<Link href="/person">  
        <button className={`${styles.button} ${styles.button02}`}>メニューに戻る</button>
	</Link>  
      </div>
    </div>
  );
}

