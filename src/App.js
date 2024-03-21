// import logo from './logo.svg';
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";
import WorkArea from "./components/WorkArea";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.workArea}>
          <WorkArea />
        </div>
      </div>
    </div>
  );
}

export default App;
