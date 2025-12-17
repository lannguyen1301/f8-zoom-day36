import clsx from "clsx";
import { Outlet } from "react-router";
import Header from "@layouts/components/Header";
import AuthSidebar from "./components/AuthSidebar";
import Div from "@ui/Div";
import Section from "@ui/Section";

// Styles
import styles from "./AuthLayout.module.scss";

function AuthLayout() {
    return (
        <>
            <Header />
            <Section className={clsx("container", styles.wrapper)}>
                <Div className={styles.inner}>
                    <AuthSidebar className={styles.sidebar} />
                    <Div className={styles.content}>
                        <Outlet />
                    </Div>
                </Div>
            </Section>
        </>
    );
}
export default AuthLayout;
