import Image from "next/image";
import { Inter } from "@next/font/google";

import View from "@/components/Rocket/View";

import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <View />
    </main>
  );
}
