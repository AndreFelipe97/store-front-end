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
  deposit: number;
  withdraw: number;
  total: number;
  setDataTransaction: (data: TransactionsData) => void;
}

export const TransactionsContext = createContext({} as TransactionsContext);

interface TransactionsProviderProps {
  children: ReactNode;
}

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [data, setData] = useState<Array<TransactionsData>>([]);
  const [deposit, setDeposit] = useState<number>(0);
  const [withdraw, setWithdraw] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

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

  useEffect(() => {
    let depositValue = 0;
    let withdrawValue = 0;

    data.forEach((transaction) => {
      if (transaction.type === "deposit") {
        depositValue += transaction.value;
      } else {
        withdrawValue += transaction.value;
      }
    });

    setDeposit(depositValue);
    setWithdraw(withdrawValue);
    setTotal(depositValue - withdrawValue);
  }, [data]);

  function setDataTransaction(dataTransaction: TransactionsData) {
    setData([...data, dataTransaction]);

    const transactions = localStorage.getItem("transactions")
      ? JSON.parse(String(localStorage.getItem("transactions")))
      : [];
    transactions.push(dataTransaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    return;
  }

  return (
    <TransactionsContext.Provider
      value={{ data, deposit, withdraw, total, setDataTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsProvider;
