'use client';
import React, { useState } from 'react';
import Link from "next/link";
import data from "../data.json";
import styles from "../(styles)/layout.module.css";
import { Button, Menu, MenuItem, useMediaQuery } from "@mui/material";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const mobileView = useMediaQuery('(min-width:800px)');
    
    const showDesktopNav = () => {
        return data.navLinks.map((navLink, i) => {
            if(navLink.toLowerCase() === "home"){
                return <li key={i}><Link href="/">{navLink[0].toUpperCase() + navLink.slice(1)}</Link></li>
            } else {
                return <li key={i}><Link href={`/${navLink}`}>{navLink[0].toUpperCase() + navLink.slice(1)}</Link></li>
            }
        })
    }

    const showMobileNav = () => {
        return (
            <section className={styles.mobileNavMenu}>
                <Button
                    id="main-button"
                    aria-controls={open ? 'main-menu' :  undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Menu
                </Button>
                <Menu
                    id="main-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'main-button'
                    }}
                >
                    {
                        data.navLinks.map((navLink, i) => {
                            if(navLink.toLowerCase() === "home"){
                                return <li key={i}><MenuItem  onClick={handleClose}><Link href="/">{navLink[0].toUpperCase() + navLink.slice(1)}</Link></MenuItem></li>
                            } else {
                                return <li key={i}><MenuItem  onClick={handleClose}><Link href={`/${navLink}`}>{navLink[0].toUpperCase() + navLink.slice(1)}</Link></MenuItem></li>
                            }
                        })
                    }
                </Menu>
            </section>
        )
    }

    return(
        <nav className={styles.navlinkStyles}>
            <ul>
                {mobileView ? showDesktopNav() : showMobileNav()} 
            </ul>
        </nav>
    )
}

export default Navbar;