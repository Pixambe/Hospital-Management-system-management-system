import styles from "./layout_styles/subPagesLayout.module.css";

export default function subPagesLayout({ menu, title, content }) {
  return (
    <div className={styles.main}>
      <div className={styles.leftMenuBar}>
        <div className={styles.logo}>
          <img src="/assets/clinic_logo2.png" />
        </div>
        <div className={styles.left_line}></div>
        <div className={styles.menu}>{menu}</div>
      </div>

      <div className={styles.titleBox}>
        <div className={styles.titleBar}>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
        </div>
      </div>

      <div className={styles.display}>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
}
