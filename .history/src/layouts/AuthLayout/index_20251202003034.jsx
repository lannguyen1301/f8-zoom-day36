import { Outlet } from "react-router";
import Header from "../Header";
import AuthSidebar from "../AuthSidebar";
function AuthLayout() {
    return (
        <>
            <Header />
            <main>
                <AuthSidebar />
                <Outlet />
            </main>
        </>
    );
}
export default AuthLayout;
