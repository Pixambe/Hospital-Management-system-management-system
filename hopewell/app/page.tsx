"use client"
import styles from "./home.module.css";
import Link from "next/link";
import Providers from '../app/redux/provider';
//import {wrapper} from './redux/store'
import store from './redux/store'

export default function Home() {
  return (
    <Providers>
      <main className={styles.main}>
      <div className={styles.overlay}>
        <div className={styles.logo}>
          <img src="./assets/clinic_logo.png" />
        </div>
        <div className={styles.login}>
          <Link href="./pages/signIn" legacyBehavior>
            <a>login</a>
          </Link>
        </div>
      </div>
    </main>
    </Providers>
    
  );
}
