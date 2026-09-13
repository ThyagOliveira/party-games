import styles from "./Button.module.scss";

interface ButtonProps { className?: string; text?: string; children?: React.ReactNode;}

export function Button({ className, text, children }: ButtonProps) {
  return (
    <div className={`${styles.button} ${className ?? ""}`}>
      {text} {children}
    </div>
  );
}