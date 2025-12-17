import {
    BrowserRouter as Router,
    Routes,
    Route,
    HashRouter,
} from "react-router";

// Pages
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import PostDetail from "../../pages/PostDetail";
import Posts from "../../pages/Posts";
import Privacy from "../../pages/Privacy";
import Register from "../../pages/Register";
import Setting from "../../pages/Settings";
import User from "../../pages/Users";

// Layout
import AdminLayout from "../../layouts/AdminLayout";
import AuthLayout from "../../layouts/AuthLayout";
import DefaultLayout from "../../layouts/DefaultLayout";

// Components
import ScrollToTop from "../../components/ScrollToTop";

function AppRoutes() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route element={<DefaultLayout}>{/* Default Layout */}</Route>
                <Route>{/* Admin Layout */}</Route>
                <Route>{/* Auth Layout */}</Route>
                <Route>{/* No Layout */}</Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
