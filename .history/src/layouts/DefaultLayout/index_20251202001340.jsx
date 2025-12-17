import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";

function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
export default DefaultLayout;
