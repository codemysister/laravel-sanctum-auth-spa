import Image from "next/image";
import styles from "./page.module.css";
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export default function Home() {
  return (
    <main className={styles.main}>
     
    </main>
  );
}
