import styles from "./NewTransaction.module.scss";

interface NewTransactionButtonProps {
  onOpenModal: () => void;
}

export function NewTransactionButton({
  onOpenModal,
}: NewTransactionButtonProps) {
  return (
    <button
      className={styles["new-transaction-button-container"]}
      onClick={onOpenModal}
    >
      Nova transação
    </button>
  );
}
