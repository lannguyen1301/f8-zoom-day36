import styles from "./AdminFooter.module.scss";

function AdminFooter() {
    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()} Established & Trusted Pet Care Service
        </footer>
    );
}

export default AdminFooter;
