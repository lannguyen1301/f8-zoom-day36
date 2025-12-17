import styles from "./AdminFooter.module.scss";
import { Link } from "react-router";

function AdminFooter() {
    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()} Established & Trusted Pet Care Service
            <Link to="/" className={styles.footerDashboard}>
                Home
            </Link>
        </footer>
    );
}

export default AdminFooter;
