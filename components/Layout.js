import styles from "../styles/Layout.module.css";
import Header from "./Header/Header";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={styles.app}>
        <main className={styles.appWrapper}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
