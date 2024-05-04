import Image from "next/image";
import styles from "@/styles/page.module.css";
import Header from "@/components/Header";

export default function Page() {
  return (
    <main className={styles.main}>
      <Header />
      <p>@Bruno</p>
    </main>
  );
}
