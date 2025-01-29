'use client';
import data from '../data.json';
import { LiaBandcamp } from "react-icons/lia";
import { PiSpotifyLogoLight } from "react-icons/pi";
import { CiYoutube } from "react-icons/ci";
import { RiBlueskyLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import styles from "../(styles)/layout.module.css";

const SocialMediaLinks = () => {
    const { bandcamp, youtube, bluesky, instagram, spotify,  } = data.socialMediaLinks;
    const iconSize = 25;

    return(
        <div className={styles.socialMediaButtonContainer}>
            <span>{data.name}</span>
            <a href={youtube} target="_blank" aria-label="youtube link"><CiYoutube size={iconSize}/></a>
            <a href={bandcamp} target="_blank" aria-label="bandcamp link"><LiaBandcamp size={iconSize}/></a>
            <a href={bluesky} target="_blank" aria-label="bluesky link"><RiBlueskyLine size={iconSize}/></a>
            <a href={instagram} target="_blank" aria-label="instagram link"><FaInstagram size={iconSize}/></a>
            <a href={spotify} target="_blank" aria-label="spotify link"><PiSpotifyLogoLight size={iconSize}/></a> 
        </div>
    )
}

export default SocialMediaLinks;