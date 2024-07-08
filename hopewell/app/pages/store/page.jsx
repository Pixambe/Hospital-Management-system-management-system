import DashboardLayout from "../_myLayouts/DashboardLayout";
import styles from './store.module.css'

export default function Store() {
    return(
        <main className={styles.main}>
            <DashboardLayout
            head='Store room'
            link="./"
            />
        </main>
    )
}