import {
    BrowserRouter as Router,
    Routes,
    Route,
    HashRouter,
} from "react-router";

// Layout
import AdminLayout from "../../layouts/AdminLayout";
import AuthLayout from "../../layouts/AuthLayout";
import DefaultLayout from "../../layouts/DefaultLayout";

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

// Components
import ScrollToTop from "../../components/ScrollToTop";

function AppRoutes() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="Posts" element={<Posts />} />
                    <Route path="Posts/:id" element={<PostDetail />} />
                    <Route path="Privacy" element={<Privacy />} />
                    {/* Default Layout */}
                </Route>
                <Route element={<AdminLayout />}>
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Users" element={<User />} />
                    <Route path="Settings" element={<Setting />} />
                    {/* Admin Layout */}
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="Login" element={<Login />} />
                    <Route path="Register" element={<Register />} />
                    {/* Auth Layout */}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
