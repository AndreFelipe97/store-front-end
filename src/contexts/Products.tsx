import { ReactNode, createContext, useEffect } from "react";
import { useState } from "react";

interface ProductsData {
  id: number;
  title: string;
  amount: number;
  price: number;
}

interface ProductsContext {
  data: Array<ProductsData>;
  setDataProduct: (data: ProductsData) => void;
}

export const ProductsContext = createContext({} as ProductsContext);

interface ProductsProviderProps {
  children: ReactNode;
}

function ProductsProvider({ children }: ProductsProviderProps) {
  const [data, setData] = useState<Array<ProductsData>>([]);

  useEffect(() => {
    const products = localStorage.getItem("products");
    if (products) {
      if (Array.isArray(JSON.parse(products))) {
        setData(JSON.parse(products));
      } else {
        localStorage.setItem("products", JSON.stringify([products]));
        setData([JSON.parse(products)]);
      }
    }
  }, []);

  function setDataProduct(dataProduct: ProductsData) {
    setData([...data, dataProduct]);

    const products = localStorage.getItem("products")
      ? JSON.parse(String(localStorage.getItem("products")))
      : [];
    products.push(dataProduct);
    localStorage.setItem("products", JSON.stringify(products));
    return;
  }

  return (
    <ProductsContext.Provider value={{ data, setDataProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
