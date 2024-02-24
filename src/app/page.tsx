// "use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log("Hola mundo desde pagina de inicio");
  return (
    <main className={styles.main}>
      <h1>Hola Mundo</h1>
    </main>
  );
}
