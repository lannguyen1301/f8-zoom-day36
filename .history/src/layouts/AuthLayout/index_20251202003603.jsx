import { Outlet } from "react-router";
import Header from "../components/Header";
import AuthSidebar from "./components/AuthSidebar";

function AuthLayout() {
    return (
        <>
            <Header />
            <main>
                <AuthSidebar />

                <div>
                    <Outlet />
                </div>
            </main>
        </>
    );
}
export default AuthLayout;
