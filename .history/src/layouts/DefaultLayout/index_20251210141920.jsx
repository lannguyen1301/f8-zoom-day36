import { Outlet } from "react-router";
import Header from "@layouts/components/Header";
import Footer from "./components/Footer";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout() {
    return (
        <>
            <div className="wrapper">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}
export default DefaultLayout;
