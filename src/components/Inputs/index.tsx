import styles from "./Input.module.scss";

interface InputsProps {
  label: string;
}

export function Inputs({ label }: InputsProps) {
  return (
    <input
      className={styles["input-container"]}
      type="text"
      placeholder={label}
    />
  );
}
