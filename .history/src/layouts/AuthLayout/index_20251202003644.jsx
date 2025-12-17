import { Outlet } from "react-router";
import Header from "../components/Header";
import AuthSidebar from "./components/AuthSidebar";
import Div from "./components/Div";

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
