"use client";
import styles from "./allrecords.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Providers from "@/app/redux/provider";
import { fetchPatientsData } from "@/app/redux/slices/patientsSlice";

export default function Store() {
  const patients = useSelector((state) => state.patients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPatientsData());
    console.log(patients);
  }, []);

  return (
    <main className={styles.main}>
      {patients.loading && <div>loading...</div>}
      {!patients.loading && patients.error ? (
        <div>Error: {patients.error}</div>
      ) : null}
      {!patients.loading && patients.patientsList.length ? (
        <ul key={patients.patient_ID}>
          {patients.patientsList.map((patients) => (
            <li>{patients.first_name}</li>
          ))}
        </ul>
      ) : null}
    </main>
  );
}
