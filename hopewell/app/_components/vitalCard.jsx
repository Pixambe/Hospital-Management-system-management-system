"use client";
import styles from "./component_styles/vitalCard.module.css";
import DateTimeCard from "./date";

export default function VitalCard() {
  return (
    <div className={styles.card}>
      <div className={styles.main}>
        <div className={styles.head}>
          <h1>Patient Vitals </h1>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.date}>{<DateTimeCard />}</div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.vitalInput}>
              <div className={styles.inputRow1}>
                <label htmlFor="temperature">Body Temperature: </label>
                <input id="temperature" type="number" />
                <label htmlFor="bp">Blood Pressure</label>
                <input id="bp" type="text" />
              </div>
              <div className={styles.inputRow2}>
                <label htmlFor="weight">Body Weight: </label>
                <input id="weight" type="number" />
                <label htmlFor="sugar">Glucose Level: </label>
                <input id="sugar" type="text" />
              </div>
              <div className={styles.inputRow3}>
                <label htmlFor="heart">Heart Rate: </label>
                <input id="heart" type="number" />
              </div>
              <div className={styles.submit}>
              <input type="submit"/>
            </div>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
}
