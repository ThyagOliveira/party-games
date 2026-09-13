import styles from "./Selector.module.scss";

interface SelectorProps {className?: string;children?: ReactNode;}

export function Selector({ className, children }: SelectorProps) {
  return (
    <select className={`${styles.selector} ${className ?? ""}`}>
      {children}
    </select>
  );
}