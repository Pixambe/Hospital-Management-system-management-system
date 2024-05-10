import Link from "next/link";
import styles from "./dashBoard.module.css";

export default function DashboardLayout({
  menuList,
  head,
  recent,
  buttonName,
  tableData,
  statBox1,
  statBox2,
  statBox3,
  statBox4,
  rightMenuBox,
}) {
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
              <ul className={styles.menuList}>{menuList}</ul>
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
                <a>New {buttonName}</a>
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
              <div className={styles.p_stat}>{statBox1}</div>
              <div className={styles.a_stat}>{statBox2}</div>
              <div className={styles.d_stat}>{statBox3}</div>
              <div className={styles.n_stat}>{statBox4}</div>
            </div>
            <div className={styles.bookingsBar}>
              <div className={styles.recentBookings}>
                <h1>{recent}</h1>
              </div>
              <div className={styles.horizontalLine}></div>
              <div className={styles.bookingsListBox}>
                <table>{tableData}</table>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            {rightMenuBox}
          </div>
        </div>
      </div>
    </div>
  );
}
