import styles from "./NewTransaction.module.scss";

export function NewTransactionButton() {
  return (
    <button className={styles["new-transaction-button-container"]}>
      Nova transação
    </button>
  );
}
