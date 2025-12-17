import styles from "./AdminFooter.module.scss";
import { Link } from "react-router";

function AdminFooter() {
    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()} Established & Trusted Pet Care Service
        </footer>
    );
}

export default AdminFooter;
