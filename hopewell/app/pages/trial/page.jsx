import LeftMenuBar from "../../_components/leftMenuBar";
import { Content } from "next/font/google";
import styles from './trial.module.css'
import PatientForm from "../../_components/registrationForm";


export default function Trial() {
  return <div className={styles.main}>
    <PatientForm/>
  </div>;
}
