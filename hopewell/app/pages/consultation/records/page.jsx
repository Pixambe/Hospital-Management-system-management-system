import styles from './record.module.css'
import SubPagesLayout from '../../_myLayouts/subPagesLayout'






export default function recordpage() {
    return (
        <main className={styles.main}>
            <div className={styles.overlay}>
                <SubPagesLayout/>

            </div>

        </main>
    )
}