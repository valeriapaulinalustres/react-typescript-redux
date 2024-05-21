import styles from "./Button.module.css";

type Props = {
  buttonType: "button" | "submit" | "reset";
  buttonClass?: string;
  title: string;
};

export const Button = ({
  buttonType,
  buttonClass,
  title,
}: Props): JSX.Element => {
  return (
    <button
      type={buttonType}
      className={`${styles.button} ${buttonClass ? buttonClass : ""}`}
    >
      {title}
    </button>
  );
};
export default Button;
