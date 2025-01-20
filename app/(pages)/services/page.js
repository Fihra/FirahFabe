import data from "../../data.json";
import styles from "../../(styles)/layout.module.css";
import { Button } from "@mui/material";

export default function Services() {
    const { serviceInfo, services } = data;
    const { email } = data.socialMediaLinks;

    const showServices = () => {
        return services.map((service, i) => {
            return (
                <section key={i}>
                    <h3>{service.serviceType}</h3>
                    <p>{service.description}</p>
                </section>
            )
        })
    }

    return ( 
    <main className={styles.servicesContainer}>
        <h2>Services</h2>

        <div className={styles.servicesSection}>{serviceInfo}</div>
        <Button variant="outlined" href={"#"}>Email</Button>

        {showServices()}
    </main>
    )
}