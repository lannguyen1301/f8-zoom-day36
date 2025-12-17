// import { Link } from "react-router";
// import clsx from "clsx";
// import Div from "@ui/Div";
// import styles from "./Actions.module.scss";

// function Actions() {
//     return (
//         <>
//             <Div className={styles.headerAction}>
//                 <Link className={clsx(styles.headerActionLink)} to="/register">
//                     Sign up
//                 </Link>

//                 <Link
//                     className={clsx("btn", styles.headerActionBtn)}
//                     to="/login"
//                 >
//                     Log in
//                 </Link>
//             </Div>
//         </>
//     );
// }

// export default Actions;

import { NavLink } from "react-router";
import clsx from "clsx";
import Ul from "@ui/Ul";
import Li from "@ui/Li";

const navItems = [
    {
        to: "/register",
        title: "Sign Up",
    },
    {
        to: "/login",
        title: "Log In",
    },
];
function Actions() {
    const renderNavItems = () => {
        return navItems.map((item, index) => (
            <Li key={index} className={styles.navbarItem}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.navbarLink
                    }
                >
                    {item.title}
                </NavLink>
            </Li>
        ));
    };
}

export default Actions;
