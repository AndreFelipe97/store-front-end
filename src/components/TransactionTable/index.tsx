import { useContext, useEffect, useState } from "react";
import styles from "./TransactionTable.module.scss";
import { TransactionsContext } from "../../contexts/Transactions";

interface TransactionsData {
  id: number;
  title: string;
  value: string;
  category: string;
  type: string;
  date: string;
}

interface TransactionTableProps {
  dataFiltered: TransactionsData[];
}

export function TransactionTable({ dataFiltered }: TransactionTableProps) {
  const { data } = useContext(TransactionsContext);
  const [transactions, setTransactions] = useState<TransactionsData[]>([]);

  useEffect(() => {
    const newTransactions = data.map((transaction) => {
      return {
        ...transaction,
        date: new Date().toLocaleDateString("pt-BR", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        value: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(transaction.value),
      };
    });
    setTransactions(newTransactions);
  }, [data]);

  if (dataFiltered?.length > 0) {
    return (
      <>
        <div className={styles["transaction-table-container"]}>
          <table>
            <thead />
            <tbody>
              {dataFiltered.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td
                    className={`
                    ${styles["value"]}
                    ${
                      transaction.type === "deposit"
                        ? `${styles["deposit"]}`
                        : `${styles["withdraw"]}`
                    }`}
                  >
                    {transaction.type === "withdraw" && "-"} {transaction.value}
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  return (
    <>
      {transactions ? (
        <div className={styles["transaction-table-container"]}>
          <table>
            <thead />
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td
                    className={`
                    ${styles["value"]}
                    ${
                      transaction.type === "deposit"
                        ? `${styles["deposit"]}`
                        : `${styles["withdraw"]}`
                    }`}
                  >
                    {transaction.type === "withdraw" && "-"} {transaction.value}
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Sem dados</div>
      )}
    </>
  );
}
