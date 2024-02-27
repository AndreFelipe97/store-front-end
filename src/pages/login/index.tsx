import { FaGoogle } from "react-icons/fa";
import styles from "./Login.module.scss";

export default function Login() {
  return (
    <div className={styles["login-container"]}>
      <div>
        <h1>
          Desculpa 😔, Para poder ver ou realizar alguma publicação é necessário
          realizar login.
        </h1>
      </div>
      <button className={styles["login-button"]}>
        <FaGoogle /> Entrar com o google
      </button>
    </div>
  );
}
