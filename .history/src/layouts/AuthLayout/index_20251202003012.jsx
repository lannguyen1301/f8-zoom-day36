import { Outlet } from "react-router";
import Header from "../Header";
import AuthSidebart from "../AuthSidebar";
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
