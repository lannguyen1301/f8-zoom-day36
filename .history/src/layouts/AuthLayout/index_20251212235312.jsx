import { Outlet } from "react-router";
import Header from "@layouts/components/Header";
import AuthSidebar from "./components/AuthSidebar";
import Div from "@ui/Div";
import clsx from "clsx";

// Styles
import styles from "./AuthLayout.module.scss";

function AuthLayout() {
    return (
        <>
            <Header />
            <Div className={clsx("container", styles.wrapper)}>
                <Div className={styles.inner}>
                    <AuthSidebar />
                    <Div className={styles.content}>
                        <Outlet />
                    </Div>
                </Div>
            </Div>
        </>
    );
}
export default AuthLayout;
