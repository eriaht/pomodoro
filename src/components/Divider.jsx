import styles from "./Divider.module.css";
function Divider({ width = 100 }) {
  return (
    <div className={styles.divider}>
      {/* <div className={styles.line} style={{ width: `${width}%` }}></div> */}
    </div>
  );
}

export default Divider;
