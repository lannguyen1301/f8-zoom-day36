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
        <section className={styles.wrapper}>
            <Div className={styles.container}>
                <Div className={styles.text}>
                    <Title>404</Title>
                    <Para>Sorry we couldn't find this page.</Para>
                    <Para>
                        But don't worry, you can find plenty of other things on
                        our homepage.
                    </Para>
                    <Link to="#" className={styles.btn}>
                        back to homepage
                    </Link>
                </Div>

                <Div className={styles.scene}>
                    <Div className={styles.shelf}></Div>
                    <Div className={styles.vase}>
                        <Div className={styles.flower}>
                            <Span></Span>
                            <Span></Span>
                            <Span></Span>
                        </Div>
                    </Div>

                    <Div className={styles.dog}>
                        <Div className={styles.head}>
                            <Div
                                className={clsx(styles.ear, styles.left)}
                            ></Div>
                            <Div
                                className={clsx(styles.ear, styles.right)}
                            ></Div>
                            <Div
                                className={clsx(styles.eye, styles.left)}
                            ></Div>
                            <Div
                                className={clsx(styles.eye, styles.right)}
                            ></Div>
                            <Div className={styles.nose}></Div>
                            <Div className={styles.tongue}></Div>
                        </Div>
                        <Div className={styles.body}></Div>
                        <Div
                            className={clsx(
                                styles.paw,
                                styles.front,
                                styles.left
                            )}
                        ></Div>
                        <Div
                            className={clsx(
                                styles.paw,
                                styles.front,
                                styles.right
                            )}
                        ></Div>
                        <Div
                            className={clsx(
                                styles.paw,
                                styles.back,
                                styles.left
                            )}
                        ></Div>
                        <Div
                            className={clsx(
                                styles.paw,
                                styles.back,
                                styles.right
                            )}
                        ></Div>
                        <Div className={styles.tail}></Div>
                    </Div>
                </Div>
            </Div>
        </section>
    );
}
export default NotFound;
