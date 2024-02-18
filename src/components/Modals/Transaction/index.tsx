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
import { useForm } from "react-hook-form";

Modal.setAppElement("#root");

interface FormData {
  title: string;
  value: number;
  category: string;
}

interface TransactionData {
  id: number;
  title: string;
  value: number;
  category: string;
  type: string;
}

export function TransactionModal() {
  const [modalNewTransactionIsOpen, setModalNewTransactionIsOpen] =
    useState(false);

  const [transactionType, setTransactionType] = useState("deposit");

  const [datas, setData] = useState<TransactionData[]>([]);

  const { register, reset, handleSubmit, watch } = useForm<FormData>();

  function onSubmit(data: FormData) {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      title: data.title,
      value: data.value,
      category: data.category,
      type: transactionType,
    };
    if (datas.length > 0) {
      localStorage.setItem(
        "transactions",
        JSON.stringify([...datas, newTransaction])
      );
    } else {
      localStorage.setItem("transactions", JSON.stringify([newTransaction]));
    }
    reset({
      title: "",
      value: 0,
      category: "",
    });
    setModalNewTransactionIsOpen(false);
  }

  function handleOpenNewTransactionModal() {
    const storedData = localStorage.getItem("transactions");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
    reset({
      title: "",
      value: 0,
      category: "",
    });
    setModalNewTransactionIsOpen(true);
    setTransactionType("deposit");
  }

  function handleCloseNewTransactionModal() {
    reset({
      title: "",
      value: 0,
      category: "",
    });
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
        <form
          className={styles["form-container"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Nova transação</h2>
          <Inputs label="Título" register={{ ...register("title") }} />
          <Inputs
            label="Valor"
            {...register("value")}
            register={{ ...register("value") }}
          />
          <Inputs
            label="Categoria"
            {...register("category")}
            register={{ ...register("category") }}
          />

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

          <button
            className={styles["register-button"]}
            type="submit"
            disabled={
              !(watch("title") && watch("category") && watch("value"))
                ? true
                : false
            }
          >
            Cadastrar
          </button>
        </form>
      </Modal>
    </div>
  );
}
