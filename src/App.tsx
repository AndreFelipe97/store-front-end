import styles from "./App.module.scss";
import { NewTransactionButton } from "./components/Buttons/NewTransaction";
import { SearchTransactionButton } from "./components/Buttons/SearchTransaction";
import { TotalCardValues } from "./components/Card/Total";
import { TransactionCardValues } from "./components/Card/TransactionCardValues";
import { Inputs } from "./components/Inputs";
import { Header } from "./components/Layout/Header";
import { TransactionTable } from "./components/TransactionTable";

function App() {
  return (
    <div>
      <Header />
      <main className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["values-content"]}>
            <TransactionCardValues
              type="deposit"
              title="Entradas"
              value={500}
            />
            <TransactionCardValues type="withdraw" title="Saidas" value={500} />
            <TotalCardValues />
          </div>
          <div className={styles["new-transaction-button"]}>
            <NewTransactionButton />
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
