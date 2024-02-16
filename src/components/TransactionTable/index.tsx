import styles from "./TransactionTable.module.scss";

export function TransactionTable() {
  return (
    <div className={styles["transaction-table-container"]}>
      <table>
        <thead />
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>12/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.100</td>
            <td>Casa</td>
            <td>12/04/2021</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
