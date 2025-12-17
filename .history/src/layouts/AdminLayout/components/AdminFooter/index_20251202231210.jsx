import styles from "./AdminFooter.module.scss";

function AdminFooter() {
    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()} Admin Dashboard — Office Saigon
        </footer>
    );
}

export default AdminFooter;
