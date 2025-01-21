'use client';

import data from "../../data.json";
import { Box, TextField, Grid2} from "@mui/material";
import styles from "../../(styles)/layout.module.css";


export default function Contact() {

    return ( 
    <main>
        <h2>Contact</h2>

        
        <Box className={styles.contactContainer}>
            <Grid2 container spacing={5}>
            <TextField
                className={styles.contactTextField}
                sx={{width: "30%", margin: "0 auto"}}
                required
                id="filled-require"
                label="Name"
                variant="standard"
            />

            <TextField
                className={styles.contactTextField}
                sx={{width: "20%", margin: "0 auto"}}
                required
                id="filled-req"
                label="Email"
                variant="standard"
            />

            <TextField
                className={styles.contactTextField}
                sx={{width: "80%", margin: "0 auto"}}
                required
                id="outlined-multiline"
                label="Message"
                multiline
                maxRows={4}

            />

            </Grid2>
        </Box>

    </main>
    )
}