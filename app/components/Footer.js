'use client';
import SocialMediaLinks from "./SocialMediaLinks";
import styles from '../(styles)/layout.module.css';

const Footer = () => {
    return(
        <footer className={styles.footerSection}>
            <SocialMediaLinks/>
        </footer>
    )
}

export default Footer;