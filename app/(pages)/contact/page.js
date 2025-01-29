'use client';

import React, { useState, useEffect } from 'react';
import { Box, TextField, Grid2, Button, useMediaQuery} from "@mui/material";
import styles from "../../(styles)/layout.module.css";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    useEffect(() => {
        emailjs.init(process.env.PUBLIC_KEY);
    }, []);

    const mobileView = useMediaQuery('(max-width:800px)');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData,
            [name]: value
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);

        emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            formData,
            process.env.NEXT_PUBLIC_KEY
        )
        .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );

    }

    return ( 
    <main>
        <h2>Contact</h2>

        <form onSubmit={handleSubmit}>
        <Box className={styles.contactContainer}>
            <Grid2 container spacing={5} direction="column">
            
            <TextField
                className={styles.contactTextField}
                name="name"
                sx={{width: mobileView ? "100%" : "50%", margin: "0 auto", input: {color: "white"}}}
                required
                id="name-form"
                label="Name"
                variant="standard"
                onChange={handleChange}
            />

            <TextField
                className={styles.contactTextField}
                name="email"
                sx={{width: mobileView ? "100%" : "50%", margin: "0 auto", input: {color: "white"}}}
                required
                id="email-form"
                label="Email"
                variant="standard"
                type="email"
                onChange={handleChange}
            />

            <TextField
                className={styles.contactTextField}
                name="message"
                sx={{width: mobileView ? "100%" : "50%", margin: "0 auto"}}
                slotProps={{

                }}
                required
                id="message-form"
                label="Message"
                multiline
                maxRows={4}
                onChange={handleChange}

            />
            <Button
                className={styles.submitButton}
                variant="outlined"
                pill="true"
                sx={{margin: "0 auto", color: "#CAFFB9", borderColor: "black"}}
                type="submit"
            >
                Submit
            </Button>
            
            
            </Grid2>
        </Box>
        </form>

    </main>
    )
}