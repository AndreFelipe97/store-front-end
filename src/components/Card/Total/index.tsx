import { useEffect, useState } from "react";
import dolarIcon from "../../../assets/Tipo=currency-dollar-regular.svg";
import styles from "./Total.module.scss";

interface TotalCardValuesProps {
  value: number;
}

export function TotalCardValues({ value }: TotalCardValuesProps) {
  const [valueFormated, setValueFormated] = useState<string>("");

  useEffect(() => {
    setValueFormated(
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value)
    );
  }, [value]);

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
