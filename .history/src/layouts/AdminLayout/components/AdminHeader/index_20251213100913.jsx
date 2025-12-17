import styles from "./AdminFooter.module.scss";
import { Link } from "react-router";
import Section from "@ui/Section";
import Div from "@ui/Div";
import "@styles/main.scss";
import clsx from "clsx";

function AdminFooter() {
    return (
        <footer className={styles.footer}>
            <Section className={clsx("container", styles.adminFooter)}>
                <Div className={styles.footerInner}>
                    <Div className={styles.footerLeft}>
                        © {new Date().getFullYear()} Established & Trusted Pet
                        Care Service
                    </Div>
                    <Div className={styles.footerRight}>
                        <Link to="/" className={styles.adminFooterLink}>
                            Home
                        </Link>
                        <Link to="/..." className={styles.adminFooterLink}>
                            Help
                        </Link>
                    </Div>
                </Div>
            </Section>
        </footer>
    );
}

export default AdminFooter;
