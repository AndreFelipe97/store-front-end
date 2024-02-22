import { useContext, useState } from "react";
import Modal from "react-modal";
import { Inputs } from "../../Inputs";
import close from "../../../assets/Tipo=x-regular.svg";

import styles from "./ProductModal.module.scss";
import { useForm } from "react-hook-form";
import { ProductsContext } from "../../../contexts/Products";
import { NewProductButton } from "../../Buttons/NewProduct";

Modal.setAppElement("#root");

interface FormData {
  title: string;
  price: number;
  amount: number;
}

export function ProductModal() {
  const [modalNewProductIsOpen, setModalNewProductIsOpen] = useState(false);

  const { register, reset, handleSubmit, watch } = useForm<FormData>();

  const { setDataProduct } = useContext(ProductsContext);

  function onSubmit(data: FormData) {
    const newProduct = {
      id: Math.floor(Math.random() * 1000),
      title: data.title,
      price: data.price,
      amount: data.amount,
    };

    setDataProduct(newProduct);

    reset({
      title: "",
      price: 0,
      amount: 0,
    });
    setModalNewProductIsOpen(false);
  }

  function handleOpenNewProductModal() {
    reset({
      title: "",
      price: 0,
      amount: 0,
    });
    setModalNewProductIsOpen(true);
  }

  function handleCloseNewProductModal() {
    reset({
      title: "",
      price: 0,
      amount: 0,
    });
    setModalNewProductIsOpen(false);
  }

  return (
    <div>
      <NewProductButton onOpenModal={handleOpenNewProductModal} />
      <Modal
        isOpen={modalNewProductIsOpen}
        onRequestClose={handleCloseNewProductModal}
        overlayClassName={styles["react-modal-overlay"]}
        className={styles["react-modal-content"]}
      >
        <button
          type="button"
          onClick={handleCloseNewProductModal}
          className={styles["close-modal"]}
        >
          <img src={close} alt="" />
        </button>
        <form
          className={styles["form-container"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Novo Produto</h2>
          <Inputs label="Título" register={{ ...register("title") }} />
          <Inputs
            label="Preço"
            {...register("price")}
            register={{ ...register("price") }}
          />
          <Inputs
            label="Quantidade"
            {...register("amount")}
            register={{ ...register("amount") }}
          />
          <button
            className={styles["register-button"]}
            type="submit"
            disabled={
              !(watch("title") && watch("price") && watch("amount"))
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
