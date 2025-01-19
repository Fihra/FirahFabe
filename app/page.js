import styles from "./page.module.css";
import data from "./data.json";

export default function Home() {

  return (
    <div>
      <main>
      {data.headerRoles.map((role, i) => <p key={i}>{role}</p>)}
      </main>
      <section>
        <img src={data.headshot} width="200px" height="100%" style={{filter: "brightness(75%)"}}/>
        <p>{data.intro[0]}</p>
      </section>
    </div>
  );
}
