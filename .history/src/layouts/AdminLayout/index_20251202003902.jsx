import { Outlet } from "react-router";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";
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
