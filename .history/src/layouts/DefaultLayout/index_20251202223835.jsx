import { Outlet } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
export default DefaultLayout;
