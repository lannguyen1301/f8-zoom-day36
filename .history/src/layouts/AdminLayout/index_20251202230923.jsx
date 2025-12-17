import { Outlet } from "react-router";
import AdminSidebar from "@layouts/AdminLayout/components/AdminSidebar";
import AdminFooter from "@layouts/AdminLayout/components/AdminFooter";
import styles from "./AdminLayout.module.scss";
import Div from "@ui/Div";
function AdminLayout() {
    return (
        <>
            <div className={styles.adminLayout}>
                <main>
                    <AdminSidebar />
                    <Div>
                        <Outlet />
                    </Div>
                </main>
                <AdminFooter />
            </div>
        </>
    );
}
export default AdminLayout;
