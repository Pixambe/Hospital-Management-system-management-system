import Link from 'next/link'
import styles from './dashBoard.module.css'



export default function DashboardLayout ({ children, head, recent  }){
    return (
        <div className={styles.opdPage}>
        <div className={styles.bg_overlay}>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.logo}>
                <img src="/assets/clinic_logo2.png" />
              </div>
              <div className={styles.left_line}></div>
              <div className={styles.menu}>
                <ul className={styles.menuList}>
                  <li>
                    <Link href="./opd" legacyBehavior>
                      <a className={styles.dashboard}>
                        <img src="/icons/dashboard.svg" />
                        <h1>Dashboard</h1>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="./lab" legacyBehavior>
                      <a className={styles.dashboard}>
                        <img src="/icons/nurse2.png" />
                        <h1>Nurses</h1>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="" legacyBehavior >
                      <a className={styles.dashboard}>
                        <img src="/icons/doctor2.png" />
                        <h1>Doctors</h1>
                      </a>
                    </Link>
                  </li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                </ul>
              </div>
            </div>
            <div className={styles.center}>
              <div className={styles.titleBar}>
                <div className={styles.title}>
                  <h1>{head}</h1>
                </div>
                <div className={styles.titleBar_icons}>
                  <a>
                    <img src="/icons/GearFill.png" />
                  </a>
                  <a>
                    <img src="/icons/vector.png" />
                  </a>
                </div>
  
                <div className={styles.vertical_line}></div>
                <div className={styles.new_rcd_btn}>
                  <a>New Record</a>
                </div>
              </div>
              <div className={styles.profileBar}>
                <div className={styles.nameCard}>
                  <h1>Hello, Dr. Steve Hawkins</h1>
                  <p>Welcome to your Dashboard</p>
                </div>
                <div className={styles.imageCard}>
                  <img src="/assets/doctor.jpg" />
                </div>
              </div>
              <div className={styles.statBar}>
                <div className={styles.p_stat}></div>
                <div className={styles.a_stat}></div>
                <div className={styles.d_stat}></div>
                <div className={styles.n_stat}></div>
              </div>
              <div className={styles.bookingsBar}>
                <div className={styles.recentBookings}>
                  <h1>{recent}</h1>
                </div>
                <div className={styles.horizontalLine}></div>
                <div className={styles.bookingsListBox}>
                  <table>
                    <tr className={styles.tableHead}>
                      <th>Patient ID</th>
                      <th>Patient Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Date</th>
                    </tr>
                    <tr>
                      <td>Jill</td>
                      <td>Smith</td>
                      <td>50</td>
                      <td>male</td>
                      <td>12-12-2023</td>
                    </tr>
                    <tr>
                      <td>Eve</td>
                      <td>Jackson</td>
                      <td>94</td>
                      <td>male</td>
                      <td>12-12-2023</td>
                    </tr>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>80</td>
                      <td>male</td>
                      <td>12-12-2023</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.topBox}></div>
              <div className={styles.middleBox}></div>
              <div className={styles.bottomBox}></div>
            </div>
          </div>
        </div>
      </div>
    )
}