import arrowUp from "../../../assets/Tipo=arrow-circle-up-regular.svg";
import arrowDown from "../../../assets/Tipo=arrow-circle-down-regular.svg";
import styles from "./TransactionCardValues.module.scss";
import { useEffect, useState } from "react";

interface TransactionCardValuesProps {
  type: "deposit" | "withdraw";
  title: string;
  value: number;
}

export function TransactionCardValues({
  type,
  title,
  value,
}: TransactionCardValuesProps) {
  const [valueFormated, setValueFormated] = useState("");

  useEffect(() => {
    const newValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
    setValueFormated(newValue);
  }, [value]);
  return (
    <div className={styles["transaction-card-values-container"]}>
      <div className={styles["header-card"]}>
        <h1>{title}</h1>
        {type === "deposit" ? (
          <img src={arrowUp} alt="arrow up green" />
        ) : (
          <img src={arrowDown} alt="arrow down red" />
        )}
      </div>
      <span className={styles["value"]}>{valueFormated}</span>
    </div>
  );
}
