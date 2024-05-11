import DashboardLayout from "../_myLayouts/DashboardLayout";
import styles from "./consultation.module.css";

export default function Consultation() {
  return (
    <div className={styles.main}>
      <DashboardLayout head="Consultation" recent="Lab requests" />
    </div>
  );
}
