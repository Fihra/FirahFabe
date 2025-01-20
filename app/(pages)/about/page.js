import data from "../../data.json";
import styles from "../../(styles)/layout.module.css";

export default function About() {
    const { about, musicStyle, laudImage, laudAndKulintang } =  data;
    return ( 
    <main className={styles.aboutSection}>
        <h2>About</h2>
        <p>{about}</p>
        <img src={laudImage} height={300} width={400} style={{float: "right"}}/>
        <br/>
        <p>{musicStyle}</p>
        <img src={laudAndKulintang} height={500} width={300}/>
    </main>
    )
}