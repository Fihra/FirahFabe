'use client';

import data from "../../data.json";
import styles from "../../(styles)/layout.module.css";
import { Grid2, Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function About() {
    const mobileView = useMediaQuery('(max-width:800px)');

    const { about, musicStyle, laudImage, laudAndKulintang } =  data;
    return ( 
    <main className={styles.aboutSection}>
        <h2 style={{paddingBottom: 12}}>About</h2>
        <Box sx={{width: '100%'}}>
            <Grid2 container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid2 size={{sm: 2, md: 6}}>
                    <p>{about}</p>
                </Grid2>
                <Grid2 size={{sm: 2, md: 6}}>
                    <img className={styles.aboutImages} src={laudImage} height={300} width={400}/>
                </Grid2>
            </Grid2>
            <br/>
            <Grid2 container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid2 size={{sm: 2, md: 6}} style={{order: mobileView ? 2 : 1}}>
                    <img className={styles.aboutImages} src={laudAndKulintang} height={500} width={mobileView ? "100%" : 300}/>
                </Grid2>
                <Grid2 size={{sm: 2, md: 6}} style={{order: mobileView ? 1 : 2}}>
                    <p>{musicStyle}</p>
                </Grid2>
            </Grid2>
        </Box>
    </main>
    )
}