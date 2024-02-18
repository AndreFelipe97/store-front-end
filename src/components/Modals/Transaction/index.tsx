import { useState } from "react";
import Modal from "react-modal";
import { NewTransactionButton } from "../../Buttons/NewTransaction";
import { Inputs } from "../../Inputs";
import close from "../../../assets/Tipo=x-regular.svg";
import income from "../../../assets/Tipo=arrow-circle-up-regular.svg";
import outcome from "../../../assets/Tipo=arrow-circle-down-regular.svg";
import incomeWhite from "../../../assets/Tipo=arrow-circle-up-regular-white.svg";
import outcomeWhite from "../../../assets/Tipo=arrow-circle-down-regular-white.svg";

import styles from "./TransactionModal.module.scss";

Modal.setAppElement("#root");

export function TransactionModal() {
  const [modalNewTransactionIsOpen, setModalNewTransactionIsOpen] =
    useState(false);

  const [transactionType, setTransactionType] = useState("deposit");

  function handleOpenNewTransactionModal() {
    setModalNewTransactionIsOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setModalNewTransactionIsOpen(false);
  }

  return (
    <div>
      <NewTransactionButton onOpenModal={handleOpenNewTransactionModal} />
      <Modal
        isOpen={modalNewTransactionIsOpen}
        onRequestClose={handleCloseNewTransactionModal}
        overlayClassName={styles["react-modal-overlay"]}
        className={styles["react-modal-content"]}
      >
        <button
          type="button"
          onClick={handleCloseNewTransactionModal}
          className={styles["close-modal"]}
        >
          <img src={close} alt="" />
        </button>
        <form className={styles["form-container"]}>
          <h2>Nova transação</h2>
          <Inputs label="Título" />
          <Inputs label="Valor" />
          <Inputs label="Categoria" />

          <div className={styles["type-container"]}>
            <button
              type="button"
              className={`${styles["button-container"]} ${
                transactionType === "deposit" && styles["deposit-active"]
              }`}
              onClick={() => setTransactionType("deposit")}
            >
              <img
                className={styles["icon"]}
                src={transactionType === "deposit" ? incomeWhite : income}
                alt=""
              />{" "}
              Entrada
            </button>
            <button
              type="button"
              className={`${styles["button-container"]} ${
                transactionType === "withdraw" && styles["withdraw-active"]
              }`}
              onClick={() => setTransactionType("withdraw")}
            >
              <img
                className={styles["icon"]}
                src={transactionType === "withdraw" ? outcomeWhite : outcome}
                alt=""
              />{" "}
              Saída
            </button>
          </div>

          <button className={styles["register-button"]} type="submit">
            Cadastrar
          </button>
        </form>
      </Modal>
    </div>
  );
}
