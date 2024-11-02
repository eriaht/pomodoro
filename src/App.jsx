import StopWatch from "./components/StopWatch";
import Timers from "./components/Timers";
import NavBar from "./components/NavBar";

import styles from "./App.module.css";
import Divider from "./components/Divider";
function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <StopWatch />
      <Divider />
      <Timers />
    </div>
  );
}

export default App;
