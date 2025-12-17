import styles from "./AdminFooter.module.scss";
import { Link } from "react-router";
import Section from "@ui/Section";
import "@styles/main.scss";
import clsx from "clsx";

function AdminFooter() {
    return (
        <footer className={styles.footer}>
            <Section className={clsx("container", styles.adminFooter)}>
                <div className={styles.footerInner}></div>
            </Section>
        </footer>
    );
}

export default AdminFooter;
