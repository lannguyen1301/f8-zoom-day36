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
        <Aside class="sidebar" aria-label="Primary">
            <Nav class="menu">
                <Ul>
                    <Li>
                        <Link href="#" class="active" aria-current="page">
                            <i class="fas fa-th-large" aria-hidden="true"></i>
                            <Span>Dashboard</Span>
                        </Link>
                    </Li>
                    <Li>
                        <Link href="#">
                            <i class="fas fa-cog" aria-hidden="true"></i>
                            <Span>Settings</Span>
                        </Link>
                    </Li>
                    <Li>
                        <Link href="#">
                            <i
                                class="fas fa-sign-out-alt"
                                aria-hidden="true"
                            ></i>
                            <Span>Logout</Span>
                        </Link>
                    </Li>
                </Ul>
            </Nav>
        </Aside>
    );
}
export default AuthSidebar;
