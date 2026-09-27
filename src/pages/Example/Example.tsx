import styles from "./Example.module.scss";
import { Button } from "@/components/Button/Button";
import { useEffect, useState } from "react";

export default function Example() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    alert(`Contador mudou: ${count}`);
  }, [count]);

  return (
    <div className={styles.container}>
      <p>Contador: {count} </p>
      <Button text="Incrementar" onClick={() => setCount(count + 1)} />
    </div>
  );
}
