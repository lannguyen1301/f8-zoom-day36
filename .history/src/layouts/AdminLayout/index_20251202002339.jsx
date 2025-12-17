import { Outlet } from "react-router";
import AdminFooter from "../AdminFooter";
import AdminSidebar from "../AdminSidebar";
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
