import { Outlet } from "react-router";
import Header from "@layouts/components/Header";
import AuthSidebar from "./components/AuthSidebar";
import Div from "@ui/Div";

// Styles
import styles from "./AuthLayout.module.scss";

function AuthLayout() {
    return (
        <>
            <Header />
            <Div>
                <AuthSidebar />

                <Div className={styles.wrapper}>
                    <Outlet />
                </Div>
            </Div>
        </>
    );
}
export default AuthLayout;
