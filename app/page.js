'use client';
import styles from "./page.module.css";
import data from "./data.json";
import { useMediaQuery } from "@mui/material";


export default function Home() {
  const mobileView = useMediaQuery('(min-width:800px)');

  const showDesktopView = () => {
    return data.headerRoles.map((role, i) => <span key={i}>{role}</span>)

  }

  const showMobileView = () => {
    return data.headerRoles.map((role, i) => <p key={i}>| {role} |</p>)
  }

  return (
    <div className={styles.homeContainer}>
      <main className={styles.headerRoles}>
        {mobileView ? showDesktopView(): showMobileView()}
      </main>
      <section>
        <img src={data.headshot} width="200px" height="100%" style={{filter: "brightness(75%)"}}/>
        <p>{data.intro[0]}</p>
      </section>
    </div>
  );
}
