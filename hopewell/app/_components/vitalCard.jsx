import styles from "./component_styles/vitalCard.module.css";

export default function VitalCard() {
  return (
    <div className={styles.card}>
      <div className={styles.main}>
        <div className={styles.head}>
          <h1>Patient Vitals </h1>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            
          </form>
        </div>
      </div>
    </div>
  );
}
