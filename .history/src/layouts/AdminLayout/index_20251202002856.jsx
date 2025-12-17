import { Outlet } from "react-router";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
function AdminLayout() {
    return (
        <>
            <AdminHeader />
            <main>
                <AdminSidebar />
                <Outlet />
            </main>
            <AdminFooter />
        </>
    );
}
export default AdminLayout;
