'use client';
import { useMediaQuery } from "@mui/material";
import data from "../../data.json";
import styles from "../../page.module.css";

export default function Works() {
    const mobileView = useMediaQuery('(max-width:800px)');

    const { gamemusic, gamesound } = data.works;

    const showTimeStamps = (audioData) => {
        const timeStamps = audioData.map((game, i) => {
            return (
                <div key={i} style={{marginBottom: 12}}>
                    <p>{game.timestamp} <a href={game.gamelink} target={game.gamelink !== "#" ? "_blank": "_parent"}><b>{game.title}</b></a></p>
                </div>
            )
        })
        return timeStamps;
    }
    
    return ( 
    <main>
        <h2>Works</h2>
        <section className={styles.worksSection}>
            <h3><u>Game Music</u></h3>
            {
                mobileView ?
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/bLd8mvlZ5Q8?si=dWdUvn-aOHAwgbKw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                :
                <iframe width="560" height="315"  src="https://www.youtube.com/embed/bLd8mvlZ5Q8?si=dWdUvn-aOHAwgbKw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            }
            {showTimeStamps(gamemusic)}
        </section>

        <section className={styles.worksSection}>
            <h3><u>Sound Design</u></h3>
            {
                mobileView ?
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/DY0kA6-T2BY?si=0JxrwFxEu9Pb8SWa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                :
                <iframe width="560" height="315" src="https://www.youtube.com/embed/DY0kA6-T2BY?si=0JxrwFxEu9Pb8SWa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            }
            {showTimeStamps(gamesound)}
        </section>

        <section className={styles.worksSection}>
        <h3><u>Original Works</u></h3>
        {
            mobileView ?
            <iframe style={{border: 0, width: "100%", height: "42px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2207066508/size=small/bgcol=333333/linkcol=4ec5ec/transparent=true/" seamless><a href="https://firahfabe.bandcamp.com/album/chill-times">Chill Times by FirahFabe</a></iframe>
            :
            <iframe style={{border: 0, width: "400px", height: "472px"}}  src="https://bandcamp.com/EmbeddedPlayer/album=2207066508/size=large/bgcol=333333/linkcol=4ec5ec/artwork=small/transparent=true/" seamless><a href="https://firahfabe.bandcamp.com/album/chill-times">Chill Times by FirahFabe</a></iframe>
        }
        </section>
        
        <section className={styles.worksSection}>
        <h3><u>Game Music Covers</u></h3>
        {
            mobileView ?
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/33xvX9Pwy60?si=p9erkYiAzqS__wdE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            :
            <iframe width="560" height="315" src="https://www.youtube.com/embed/33xvX9Pwy60?si=p9erkYiAzqS__wdE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        }
        </section>
    </main>
    )
}

