import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <nav className={styles.nav}>
      <h1 className={`${styles.navTitle} cherry-bomb-one-regular`}>
        🍅タイマー
      </h1>
    </nav>
  );
}

export default NavBar;
