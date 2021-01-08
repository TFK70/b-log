import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  let [butContainerClasses, setButContainerClasses] = useState<string>(
    `${styles.starter__bigBut}`
  );

  const goClicked = () => {
    setButContainerClasses((prev: string) => (prev += ` ${styles.vanishBut}`));
    setTimeout(() => router.push('/logSelector'), 1000);
  };

  return (
    <div className={styles.starter}>
      <Head>
        <title>B-LOG</title>
      </Head>
      <div className={butContainerClasses}>
        <button onClick={goClicked}>GO</button>
      </div>
    </div>
  );
}
