"use client";

import DashboardLayout from "../_myLayouts/DashboardLayout";
import styles from "./opd.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Providers from "@/app/redux/provider";
import { fetchPatientsData } from "@/app/redux/slices/patientsSlice";
import Table from "../../_components/table";
import SearchComponent from "../../_components/searchBar";

export default function opd() {
  const patients = useSelector((state) => state.patients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPatientsData());
    console.log("patients", patients);
  }, []);

  return (
    <main className={styles.main}>
      <DashboardLayout
        backgoundImage="./public/assets/sethoscope.jpg"
        recent="Recent bookings"
        head="OPD"
        link="./registerpatient"
        tableData={<Table />}
        menuList={
          <>
            <li className={styles.searchBox}>
              <SearchComponent placeholder="Search..." />
            </li>
          </>
        }
      />
    </main>
  );
}
