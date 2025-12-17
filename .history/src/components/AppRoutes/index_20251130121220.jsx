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
                <Route
                    path="/"
                    element={
                        <DefaultLayout>
                            <Home />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <DefaultLayout>
                            <About />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <DefaultLayout>
                            <Contact />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/posts"
                    element={
                        <DefaultLayout>
                            <Posts />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/posts/:id"
                    element={
                        <DefaultLayout>
                            <PostDetail />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/privacy"
                    element={
                        <DefaultLayout>
                            <Privacy />
                        </DefaultLayout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
