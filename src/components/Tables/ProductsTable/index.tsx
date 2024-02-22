import { useContext, useEffect, useState } from "react";
import styles from "./ProductsTable.module.scss";
import { ProductsContext } from "../../../contexts/Products";

interface ProductsData {
  id: number;
  title: string;
  amount: number;
  price: string;
}

export function ProductsTable() {
  const { data } = useContext(ProductsContext);
  const [products, setProducts] = useState<ProductsData[]>([]);

  useEffect(() => {
    const newProducts = data.map((product) => {
      return {
        ...product,
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(product.price),
      };
    });
    setProducts(newProducts);
  }, [data]);

  return (
    <>
      {products.length > 0 ? (
        <div className={styles["products-table-container"]}>
          <table>
            <thead />
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={styles["without-data"]}>Sem dados</div>
      )}
    </>
  );
}
