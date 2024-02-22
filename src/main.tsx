import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import TransactionsProvider from "./contexts/Transactions.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import ProductsProvider from "./contexts/Products.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TransactionsProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </TransactionsProvider>
  </React.StrictMode>
);
