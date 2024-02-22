import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { SearchTransactionButton } from "./components/Buttons/SearchTransaction";
import { TotalCardValues } from "./components/Card/Total";
import { TransactionCardValues } from "./components/Card/TransactionCardValues";
import { Inputs } from "./components/Inputs";
import { TransactionModal } from "./components/Modals/Transaction";
import { TransactionTable } from "./components/Tables/TransactionTable";
import { useForm } from "react-hook-form";
import { Layout } from "./components/Layout";

interface FormData {
  search: string;
}

interface TransactionData {
  id: number;
  title: string;
  value: number;
  category: string;
  type: string;
  date: Date;
}

function App() {
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const { register, handleSubmit, watch } = useForm<FormData>();
  const [dataFiltered, setDataFiltered] = useState([]);

  useEffect(() => {
    const transactions = localStorage.getItem("transactions");
    if (transactions) {
      const transactionsParsed = JSON.parse(transactions);
      const deposit = transactionsParsed.reduce(
        (acc: number, transaction: TransactionData) => {
          if (transaction.type === "deposit") {
            return acc + Number(transaction.value);
          }
          return acc;
        },
        0
      );
      const withdraw = transactionsParsed.reduce(
        (acc: number, transaction: TransactionData) => {
          if (transaction.type === "withdraw") {
            return acc + Number(transaction.value);
          }
          return acc;
        },
        0
      );
      setDeposit(deposit);
      setWithdraw(withdraw);
    }
  }, [deposit, withdraw]);

  useEffect(() => {
    setDataFiltered([]);
  }, [watch("search")]);

  function onSubmit(data: FormData) {
    const transactions = localStorage.getItem("transactions")
      ? JSON.parse(String(localStorage.getItem("transactions")))
      : [];
    const filterTransactions = transactions.filter(
      (transaction: TransactionData) =>
        transaction.title.toLowerCase().includes(data.search.toLowerCase())
    );
    setDataFiltered(filterTransactions);
  }

  return (
    <Layout>
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
          <form className={styles["search"]} onSubmit={handleSubmit(onSubmit)}>
            <Inputs
              label="Buscar uma transação"
              register={{ ...register("search") }}
            />
            <SearchTransactionButton disabled={!watch("search")} />
          </form>
          <TransactionTable dataFiltered={dataFiltered} />
        </div>
      </main>
    </Layout>
  );
}

export default App;
