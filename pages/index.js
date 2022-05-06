// https://nextjs.org/docs/advanced-features/customizing-babel-config
import Header from '/components/Header';
import styles from '../styles/Home.module.css';
import Main from '../components/Main/Main';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

export default function Home() {
  return (
    <Provider store={store}>
    <div className={styles.app}>
      <div className={styles.appWrapper}>
        <Header />
        <div style={{ padding: "10px 20px" }}>
          <p>Please show a list of jobs as per design</p>
        </div>
        <Main />
      </div>
    </div>
    </Provider>
  );
}
