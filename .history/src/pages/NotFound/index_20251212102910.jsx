import clsx from "clsx";
import { Link } from "react-router";
import styles from "./NotFound.module.scss";

// componetn ui
import Div from "@ui/Div";
import Title from "@ui/Title";
import SubTitle from "@ui/SubTitle";
import Form from "@ui/Form";
import Input from "@ui/Input";
import Button from "@ui/Button";
import Span from "@ui/Span";
import Section from "@ui/Section";
import Para from "@ui/Para";
import Logo from "@ui/Logo";

import "@styles/main.scss";

function NotFound() {
    return (
        <Div class="container">
            <Div class="text">
                <Title>404</Title>
                <Para>Sorry we couldn't find this page.</Para>
                <Para>
                    But don't worry, you can find plenty of other things on our
                    homepage.
                </Para>
                <Link to="#" class="btn">
                    back to homepage
                </Link>
            </Div>

            <Div class="scene">
                <Div class="shelf"></Div>
                <Div class="vase">
                    <Div class="flower">
                        <span></span>
                        <span></span>
                        <span></span>
                    </Div>
                </Div>

                <Div class="dog">
                    <Div class="head">
                        <Div class="ear left"></Div>
                        <Div class="ear right"></Div>
                        <Div class="eye left"></Div>
                        <Div class="eye right"></Div>
                        <Div class="nose"></Div>
                        <Div class="tongue"></Div>
                    </Div>
                    <Div class="body"></Div>
                    <Div class="paw front left"></Div>
                    <Div class="paw front right"></Div>
                    <Div class="paw back left"></Div>
                    <Div class="paw back right"></Div>
                    <Div class="tail"></Div>
                </Div>
            </Div>
        </Div>
    );
}
export default NotFound;
