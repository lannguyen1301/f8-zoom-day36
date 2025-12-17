import { Outlet } from "react-router";
import clsx from "clsx";
// import Logo from "../../../ui/Logo";
// import Navigation from "../Navigation";
// import Action from "../Action";
// function Footer() {
//     return (
//         <>
//             <footer>
//                 <Logo src={Logo.png} alert={Logo} className="" />
//                 <Navigation />
//                 {/* <Action /> */}
//             </footer>
//         </>
//     );
// }

// export default Footer;

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
