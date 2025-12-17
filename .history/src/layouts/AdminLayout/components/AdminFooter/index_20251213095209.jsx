import styles from "./AdminFooter.module.scss";
import { Link } from "react-router";
import Section from "@ui/Section";
import "@styles/main.scss";

function AdminFooter() {
    return (
        <footer className={styles.footer}>
            <Section className="container">
                © {new Date().getFullYear()} Established & Trusted Pet Care
                Service
                <Link to="/" className={styles.footerDashboard}>
                    Home
                </Link>
                <Link to="/..." className={styles.footerDashboard}>
                    Help
                </Link>
            </Section>
        </footer>
    );
}

export default AdminFooter;
