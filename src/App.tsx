import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { SearchTransactionButton } from "./components/Buttons/SearchTransaction";
import { TotalCardValues } from "./components/Card/Total";
import { TransactionCardValues } from "./components/Card/TransactionCardValues";
import { Inputs } from "./components/Inputs";
import { Header } from "./components/Layout/Header";
import { TransactionModal } from "./components/Modals/Transaction";
import { TransactionTable } from "./components/TransactionTable";

function App() {
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);

  useEffect(() => {
    const transactions = localStorage.getItem("transactions");
    if (transactions) {
      const transactionsParsed = JSON.parse(transactions);
      const deposit = transactionsParsed.reduce(
        (acc: number, transaction: any) => {
          if (transaction.type === "deposit") {
            return acc + transaction.value;
          }
          return acc;
        },
        0
      );
      const withdraw = transactionsParsed.reduce(
        (acc: number, transaction: any) => {
          if (transaction.type === "withdraw") {
            return acc + transaction.value;
          }
          return acc;
        },
        0
      );
      setDeposit(deposit);
      setWithdraw(withdraw);
    }
  }, [deposit, withdraw]);

  return (
    <div>
      <Header />
      <main className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["values-content"]}>
            <TransactionCardValues
              type="deposit"
              title="Entradas"
              value={deposit}
            />
            <TransactionCardValues
              type="withdraw"
              title="Saidas"
              value={withdraw}
            />
            <TotalCardValues />
          </div>
          <div className={styles["new-transaction-button"]}>
            <TransactionModal />
          </div>
          <div className={styles["search"]}>
            <Inputs label="Buscar uma transação" /> <SearchTransactionButton />
          </div>
          <TransactionTable />
        </div>
      </main>
    </div>
  );
}

export default App;
