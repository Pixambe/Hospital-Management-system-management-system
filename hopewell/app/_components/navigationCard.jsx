import Link from "next/link";
import styles from "./component_styles/navigationcard.module.css";
import { url } from "inspector";

export default function NavigationCard(props) {
  
    const background = {
    backgroundImage: `url(${props.backgroundImage})`
  };


  return (
    <div className={styles.main}>
      <div className={styles.picture}>
        <img src={props.imgSrc} />
      </div>
      <div className={styles.link}>
        <Link href={`${props.href}`} legacyBehavior>
          <a>
            <div className={styles.title}>
              <h1>{props.department}</h1>
            </div>
            <div className={styles.bgImage} style={background}></div>
          </a>
        </Link>
      </div>
    </div>
  );
}
