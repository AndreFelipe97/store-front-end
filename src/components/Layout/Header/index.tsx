import icon from "../../../assets/Ignite-simbol.svg";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles["header-container"]}>
      <div className={styles["header-content"]}>
        <div className={styles["logo-container"]}>
          <img src={icon} alt="Logo" />
          <h1>Store</h1>
        </div>
        <ul className={styles["navbar"]}>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
