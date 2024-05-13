import styles from "./navigation.module.css";
import NavigationCard from "../../_components/navigationCard";

export default function navigationPage() {
  return (
    <main className={styles.main}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.box1}>
            <NavigationCard
              imgSrc={"/assets/sethoscope1.png"}
              department="OPD"
              href='../pages/opd'
              backgroundImage='/assets/thermometer1.png'
            />
          </div>
          <div className={styles.box2}>
            <NavigationCard
              imgSrc={"/assets/labBackground1.png"}
              department="LABORATORY "
              href='../pages/lab'
              backgroundImage='/assets/labtestRight.png'
              
            />
          </div>
          <div className={styles.box3}>
          <NavigationCard
              imgSrc={"/assets/consultationLeft.png"}
              department="CONSULTATION"
              href='../pages/consultation'
              backgroundImage='/assets/consultationRight.png'
              
            />

          </div>
          <div className={styles.box4}>
          <NavigationCard
              imgSrc={"/assets/capsulesLeft.png"}
              department="PHARMACY "
              href='../pages/pharmacy'
              backgroundImage='/assets/drugs1.png'
              
            />
          </div>
          <div className={styles.box5}>
          <NavigationCard
              imgSrc={"/assets/calculatorLeft.png"}
              department="ACCOUNTS "
              href='../pages/accounts'
              backgroundImage='/assets/moneyRight.png'
              
            />
          </div>
          <div className={styles.box6}>
          <NavigationCard
              imgSrc={"/assets/warehouseLeft.png"}
              department="STORE"
              href='../pages/store'
              backgroundImage='/assets/warehouseRight.png'
              
            />
          </div>
        </div>
      </div>
    </main>
  );
}
