import styles from '../styles/style.module.css';
import '../styles/index.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/person">
        <button className={styles.button}>
          <h1>
            会話
          </h1>
          <h1>
            スタート
          </h1>
        </button>
      </Link>
    </div>
  );
}

