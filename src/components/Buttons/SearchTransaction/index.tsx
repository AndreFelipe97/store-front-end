import searchIcon from "../../../assets/Tipo=MagnifyingGlassGreen.svg";
import styles from "./SearchTransaction.module.scss";

interface SearchTransactionButtonProps {
  disabled?: boolean;
}

export function SearchTransactionButton({
  disabled = true,
}: SearchTransactionButtonProps) {
  return (
    <button
      className={styles["search-transaction-button-container"]}
      disabled={disabled}
    >
      <img className={styles["icon-search-button"]} src={searchIcon} alt="" />{" "}
      Buscar
    </button>
  );
}
