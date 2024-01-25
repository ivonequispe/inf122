"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Dog from "./componentes/dogs";

export default function Home() {
  return (
    <main className={styles.main}>
    <Dog />
    </main>
  );
}