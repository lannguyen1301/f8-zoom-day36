import { Outlet } from "react-router";
import Header from "@layouts/components/Header";
import AuthSidebar from "./components/AuthSidebar";
import Div from "@ui/Div";

function AuthLayout() {
    return (
        <>
            <Header />
            <Div>
                <AuthSidebar />

                <Div>
                    <Outlet />
                </Div>
            </Div>
        </>
    );
}
export default AuthLayout;
