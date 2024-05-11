import DashboardLayout from "../_myLayouts/DashboardLayout";
import styles from './lab.module.css'

export default function Lab() {
  return (
    <div className={styles.main}>
      <DashboardLayout
        head="LABORATORY"
        recent="Lab requests"
        tableData={
          <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date</th>
          </tr>
        }
      ></DashboardLayout>
    </div>
  );
}
