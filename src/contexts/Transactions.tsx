import { ReactNode, createContext, useEffect } from "react";
import React, { useState } from "react";

interface TransactionsData {
  id: number;
  title: string;
  value: number;
  category: string;
  type: string;
  date: Date;
}

interface TransactionsContext {
  data: Array<TransactionsData>;
  setDataTransaction: (data: TransactionsData) => void;
}

export const TransactionsContext = createContext({} as TransactionsContext);

interface TransactionsProviderProps {
  children: ReactNode;
}

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [data, setData] = useState<Array<TransactionsData>>([]);

  useEffect(() => {
    const transactions = localStorage.getItem("transactions");
    if (transactions) {
      if (Array.isArray(JSON.parse(transactions))) {
        setData(JSON.parse(transactions));
      } else {
        localStorage.setItem("transactions", JSON.stringify([transactions]));
        setData([JSON.parse(transactions)]);
      }
    }
  }, []);

  function setDataTransaction(dataTransaction: TransactionsData) {
    setData([...data, dataTransaction]);

    const transactions = localStorage.getItem("transactions")
      ? JSON.parse(String(localStorage.getItem("transactions")))
      : [];
    transactions.push(dataTransaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }

  return (
    <TransactionsContext.Provider value={{ data, setDataTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsProvider;
