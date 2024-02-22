import { Layout } from "../../components/Layout";
import { ProductModal } from "../../components/Modals/Product";
import { ProductsTable } from "../../components/Tables/ProductsTable";

import styles from "./Products.module.scss";

export default function Products() {
  return (
    <Layout>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["new-product-button"]}>
            <ProductModal />
          </div>
          <ProductsTable />
        </div>
      </div>
    </Layout>
  );
}
