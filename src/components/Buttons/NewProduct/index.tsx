import styles from "./NewProduct.module.scss";

interface NewProductButtonProps {
  onOpenModal: () => void;
}

export function NewProductButton({ onOpenModal }: NewProductButtonProps) {
  return (
    <button
      className={styles["new-product-button-container"]}
      onClick={onOpenModal}
    >
      Novo produto
    </button>
  );
}
