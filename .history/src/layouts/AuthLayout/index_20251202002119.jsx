import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import AuthSidebart from "../AuthSidebar";
function AuthLayout() {
    return (
        <>
            <Header />
            <main>
                <AuthSidebart />
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
export default AuthLayout;
