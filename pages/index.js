import Header from '/components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.app}>
      <div className={styles.appWrapper}>
        <Header />
        <div style={{ padding: "10px 20px" }}>
          <p>Please show a list of jobs as per design</p>
        </div>
      </div>
    </div>
  );
}
