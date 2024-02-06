import styles from "./ConfirmTransaction.module.scss";

export function ConfirmTransactionButton() {
  return (
    <button className={styles["confirm-transaction-button-container"]}>
      Cadastrar
    </button>
  );
}
