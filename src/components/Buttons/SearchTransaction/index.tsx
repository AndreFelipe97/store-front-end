import searchIcon from "../../../assets/Tipo=MagnifyingGlassGreen.svg";
import styles from "./SearchTransaction.module.scss";

export function SearchTransactionButton() {
  return (
    <button className={styles["search-transaction-button-container"]}>
      <img className={styles["icon-search-button"]} src={searchIcon} alt="" />{" "}
      Buscar
    </button>
  );
}
