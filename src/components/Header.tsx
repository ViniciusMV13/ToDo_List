import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
}
