import { Outlet } from "react-router";
import AdminHeader from "@Layouts/AdminLayout/components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";
import Div from "./components/Div";
function AdminLayout() {
    return (
        <>
            <AdminHeader />
            <main>
                <AdminSidebar />
                <Div>
                    <Outlet />
                </Div>
            </main>
            <AdminFooter />
        </>
    );
}
export default AdminLayout;
