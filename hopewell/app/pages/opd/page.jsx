import DashboardLayout from "../_myLayouts/DashboardLayout";
import styles from "./opd.module.css";
import Link from "next/link";

export default function opd() {
  return (
    <main className={styles.main}>
      <DashboardLayout
      backgoundImage="./public/assets/sethoscope.jpg"
      recent='Recent bookings'
      head="OPD"
      tableData={
        <tr>
          <th>Patient ID</th>
          <th>Patient Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Date</th>
        </tr>
      }
      />
    </main>
  );
}
