import DashboardLayout from "../DashboardLayout";
import styles from "./opd.module.css";
import Link from "next/link";

export default function opd() {
  return (
    <main>
      <DashboardLayout
      recent='Recent bookings'
      head="Dashboard - OPD"
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
