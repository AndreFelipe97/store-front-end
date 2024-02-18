import styles from "./Input.module.scss";

interface InputsProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

export function Inputs({ label, register }: InputsProps) {
  return (
    <input
      className={styles["input-container"]}
      type="text"
      placeholder={label}
      {...register}
    />
  );
}
