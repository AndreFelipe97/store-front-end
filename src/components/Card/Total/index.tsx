import dolarIcon from "../../../assets/Tipo=currency-dollar-regular.svg";
import styles from "./Total.module.scss";
import { useEffect, useState } from "react";

interface TransactionsData {
  id: number;
  title: string;
  value: number;
  category: string;
  type: string;
  date: Date;
}

export function TotalCardValues() {
  const [valueFormated, setValueFormated] = useState("");

  useEffect(() => {
    const transactions = localStorage.getItem("transactions");
    if (transactions) {
      const transactionsParsed = JSON.parse(transactions);
      const deposit = transactionsParsed.reduce(
        (acc: number, transaction: TransactionsData) => {
          if (transaction.type === "deposit") {
            return acc + transaction.value;
          }
          return acc;
        },
        0
      );
      const withdraw = transactionsParsed.reduce(
        (acc: number, transaction: TransactionsData) => {
          if (transaction.type === "withdraw") {
            return acc + transaction.value;
          }
          return acc;
        },
        0
      );
      const newValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(deposit - withdraw);
      setValueFormated(newValue);
    }
  }, []);

  return (
    <div className={styles["total-card-values-container"]}>
      <div className={styles["header-card"]}>
        <h1>Total</h1>
        <img src={dolarIcon} alt="Dolar icon white" />
      </div>
      <span className={styles["value"]}>{valueFormated}</span>
    </div>
  );
}
