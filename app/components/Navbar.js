import Link from "next/link";
import data from "../data.json";
import styles from "../(styles)/layout.module.css";

const Navbar = () => {
    const showNav = () => {
        return data.navLinks.map((navLink, i) => {
            if(navLink.toLowerCase() === "home"){
                return <li key={i}><Link href="/">{navLink[0].toUpperCase() + navLink.slice(1)}</Link></li>
            } else {
                return <li key={i}><Link href={`/${navLink}`}>{navLink[0].toUpperCase() + navLink.slice(1)}</Link></li>
            }
        })
    }

    return(
        <nav className={styles.navlinkStyles}>
            
            <ul>
            <span>{data.name}</span>
                {showNav()}
            </ul>
        </nav>
    )
}

export default Navbar;