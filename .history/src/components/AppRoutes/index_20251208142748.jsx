import { BrowserRouter as Router, Routes, Route } from "react-router";

// Layout
import AdminLayout from "@layouts/AdminLayout";
import AuthLayout from "@layouts/AuthLayout";
import DefaultLayout from "@layouts/DefaultLayout";

// Pages
import Home from "@pages/Home";
import About from "@pages/About";
import Contact from "@pages/Contact";
import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login";
import NotFound from "@pages/NotFound";
import PostDetail from "@pages/PostDetail";
import Posts from "@pages/Posts";
import Privacy from "@pages/Privacy";
import Register from "@pages/Register";
import Setting from "@pages/Settings";
import User from "@pages/Users";

// Components
import ScrollToTop from "@components/ScrollToTop";

function AppRoutes() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="posts/:id" element={<PostDetail />} />
                    <Route path="privacy" element={<Privacy />} />
                    {/* Default Layout */}
                </Route>
                {/* <Route element={<AdminLayout />}> */}
                {/* <Route path="admin" element={<Dashboard />} />
                    <Route path="admin/user" element={<User />} />
                    <Route path="admin/setting" element={<Setting />} /> */}
                {/* Admin Layout */}
                {/* </Route> */}

                <Route element={<AdminLayout />}>
                    <Route path="admin" element={<Dashboard />} />
                    <Route path="admin/user" element={<User />} />
                    <Route path="admin/setting" element={<Setting />} />
                    {/* Admin Layout */}
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    {/* Auth Layout */}
                </Route>
                <Route path="*" element={<NotFound />} />
                {/* 404 */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;
