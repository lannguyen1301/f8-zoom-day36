import { Outlet } from "react-router";
import AdminSidebar from "@layouts/AdminLayout/components/AdminSidebar ";
import AdminFooter from "@";
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
