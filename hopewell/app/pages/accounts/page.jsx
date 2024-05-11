import DashboardLayout from '../_myLayouts/DashboardLayout';
import styles from './accounts.module.css'


export default function account() {
  return (
    <div className={styles.main}>
      <DashboardLayout
       head="Accounts" 
       recent="Pending Bills"

        />
    </div>
  );
}
