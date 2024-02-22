import { useContext, useEffect, useState } from "react";
import styles from "./App.module.scss";
import { SearchTransactionButton } from "./components/Buttons/SearchTransaction";
import { TotalCardValues } from "./components/Card/Total";
import { TransactionCardValues } from "./components/Card/TransactionCardValues";
import { Inputs } from "./components/Inputs";
import { TransactionModal } from "./components/Modals/Transaction";
import { TransactionTable } from "./components/Tables/TransactionTable";
import { useForm } from "react-hook-form";
import { Layout } from "./components/Layout";
import { TransactionsContext } from "./contexts/Transactions";

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
  const { deposit, withdraw, total } = useContext(TransactionsContext);
  const { register, handleSubmit, watch } = useForm<FormData>();
  const [dataFiltered, setDataFiltered] = useState([]);

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
            <TotalCardValues value={total} />
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
