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
import Img from "@ui/Img";

function AuthSidebar() {
    return (
        <nav class="menu">
            <ul>
                <li>
                    <i class="fas fa-th-large"></i>
                    <span>Dashboard</span>
                </li>
                <li>
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </li>
                <li>
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </li>
            </ul>
        </nav>
    );
}
export default AuthSidebar;
