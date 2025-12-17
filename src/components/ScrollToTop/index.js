// import { useLocation } from "react-router";
// import { useEffect } from "react";

// function ScrollToTop() {
//     const location = useLocation();
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location.pathname]);
// }

// export default ScrollToTop;

import { useLocation } from "react-router";
import { useEffect } from "react";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
