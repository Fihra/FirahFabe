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
                return <Link key={i} href="/">{navLink[0].toUpperCase() + navLink.slice(1)}</Link>
            } else {
                return <Link key={i} href={`/${navLink}`}>{navLink[0].toUpperCase() + navLink.slice(1)}</Link>
            }
        })
    }

    const showMobileNav = () => {
        return (
            <section className={styles.mobileNavMenu}>
                <Button
                    className={styles.menuButton}
                    id="main-button"
                    aria-controls={open ? 'main-menu' :  undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{color: "#CAFFB9", borderColor: "black"}}
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
                    sx={
                        {
                            ".MuiMenu-paper": { backgroundColor: data.colorStyles.charcoal, color: "white"}
                        }
                    }
                >
                    {
                        data.navLinks.map((navLink, i) => {
                            if(navLink.toLowerCase() === "home"){
                                return <MenuItem key={i} onClick={handleClose}><Link href="/">{navLink[0].toUpperCase() + navLink.slice(1)}</Link></MenuItem>
                            } else {
                                return <MenuItem key={i} onClick={handleClose}><Link href={`/${navLink}`}>{navLink[0].toUpperCase() + navLink.slice(1)}</Link></MenuItem>
                            }
                        })
                    }
                </Menu>
            </section>
        )
    }

    return(
        <nav className={styles.navlinkStyles}>
            {mobileView ? showDesktopNav() : showMobileNav()} 
        </nav>
    )
}

export default Navbar;