import dolarIcon from "../../../assets/Tipo=currency-dollar-regular.svg";
import styles from "./Total.module.scss";
import { useEffect, useState } from "react";

export function TotalCardValues() {
  const [valueFormated, setValueFormated] = useState("");

  useEffect(() => {
    const newValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(500);
    setValueFormated(newValue);
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
