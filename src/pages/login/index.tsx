import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { signInWithGooglePopup } from "../../services/firebase";

export default function Login() {
  const navigate = useNavigate();
  async function handleLogin() {
    const response = await signInWithGooglePopup();
    localStorage.setItem("auth", JSON.stringify(response.user));
    navigate('/')
  }

  return (
    <div className={styles["login-container"]}>
      <div>
        <h1>
          Desculpa 😔, Para poder ver ou realizar alguma publicação é necessário
          realizar login.
        </h1>
      </div>
      <button className={styles["login-button"]} onClick={handleLogin}>
        <FaGoogle /> Entrar com o google
      </button>
    </div>
  );
}
