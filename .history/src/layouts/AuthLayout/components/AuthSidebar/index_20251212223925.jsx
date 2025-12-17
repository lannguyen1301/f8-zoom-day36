import { Link } from "react-router";
import "@styles/main.scss";
import styles from "./About.module.scss";
// Components
import Section from "@ui/Section";
import Div from "@ui/Div";
import Title from "@ui/Title";
import SubTitle from "@ui/SubTitle";
import Para from "@ui/Para";
import SubsectionTitle from "@ui/SubsectionTitle";
import Aside from "@ui/Aside";
import Img from "@ui/Img";

function AuthSidebar() {
    return (
        <aside class="sidebar" aria-label="Primary">
            <nav class="menu">
                <ul>
                    <li>
                        <a href="#" class="active" aria-current="page">
                            <i class="fas fa-th-large" aria-hidden="true"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-cog" aria-hidden="true"></i>
                            <span>Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i
                                class="fas fa-sign-out-alt"
                                aria-hidden="true"
                            ></i>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
export default AuthSidebar;
