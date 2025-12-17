import { Outlet } from "react-router";
import clsx from "clsx";
import { Link } from "react-router";
import styles from "./AdminLayout.module.scss";
import Div from "@ui/Div";
import Span from "@ui/Span";
import Title from "@ui/Title";
import SubTitle from "@ui/SubTitle";
import Img from "@ui/Img";
import Button from "@ui/Button";
import Section from "@ui/Section";
import Nav from "@ui/Nav";
import Label from "@ui/Label";
import Article from "@ui/Article";
import Input from "@ui/Input";
import Para from "@ui/Para";
import Header from "@ui/Header";
import Footer from "@ui/Footer";
import SubsectionTitle from "@ui/SubsectionTitle";

// Components
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";
import AdminSidebar from "./components/AdminSidebar";

// Pages
import Dashboard from "@pages/Dashboard";

function AdminLayout() {
    return (
        <>
            <Section className={styles.adminWrapper}>
                <Div className={styles.app}>
                    {/* Header */}
                    <AdminHeader />

                    <Div className={styles.appBody}>
                        <Div className={styles.appBodyNavigation}>
                            <AdminSidebar />
                        </Div>
                        {/* <Outlet /> */}
                        <Outlet />
                    </Div>
                    <AdminFooter className={styles.adminLayoutFooter} />
                </Div>
            </Section>
        </>
    );
}
export default AdminLayout;
