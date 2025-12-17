import { Link } from "react-router";
import clsx from "clsx";
import styles from "./Home.module.scss";
import Section from "../../ui/Section";
import Div from "../../ui/Div";
import Img from "../../ui/Img";

function Home() {
    return (
        <Section className={styles.hero}>
            <Div className={styles.container}>
                <Div className={styles.heroInner}>
                    <Div className={styles.heroMedia}>
                        <Div className={styles.heroImgWrap}>
                            <Img
                                className={styles.heroImg}
                                src="./assets/img/pet-01.png"
                                alt=""
                            />
                            <Img
                                className={clsx(
                                    styles.heroDecor,
                                    styles.heroDecorLeft
                                )}
                                src="./assets/logo/decor-01.svg"
                            />
                            <Img
                                className={clsx(
                                    styles.heroDecor,
                                    styles.heroDecorRight
                                )}
                                src="./assets/logo/decor-02.svg"
                            />
                        </Div>
                        <Div
                            className={clsx(
                                styles.heroImgWrap,
                                styles.heroImgWrapSmall
                            )}
                        >
                            <Img
                                className={clsx(
                                    styles.heroImg,
                                    styles.heroImgSmall
                                )}
                                src="./assets/img/pet-02.png"
                            />
                        </Div>
                        <Div className={styles.heroList}>
                            <Section className={styles.heroListItem}>
                                <Img
                                    className={styles.heroListItemThumb}
                                    rc="./assets/img/pet-03.png"
                                    alt=""
                                />
                                <Div className={heroListItemInfo}>
                                    <Para className={styles.heroListItemTitle}>
                                        Pet Health
                                    </Para>
                                    <Div
                                        className={styles.heroListItemSkeleton}
                                    ></Div>
                                    <Div
                                        className={styles.heroListItemSkeleton}
                                        style={{ "--width": "39px" }}
                                    ></Div>
                                </Div>
                            </Section>
                            <Div className={heroListItemSeparate}></Div>

                            <Section className={styles.heroListItem}>
                                <Img
                                    src="./assets/img/pet-04.png"
                                    alt=""
                                    class="hero-list-item__thumb"
                                />
                                <Div className={heroListItemInfo}>
                                    <Para className={styles.heroListItemTitle}>
                                        Pet care
                                    </Para>
                                    <Div
                                        className={styles.heroListItemSkeleton}
                                    ></Div>
                                    <Div
                                        className={styles.heroListItemSkeleton}
                                        style={{ "--width": "39px" }}
                                    ></Div>
                                </Div>
                            </Section>
                        </Div>
                    </Div>
                    {/*  */}
                    <Section className={styles.heroContent}>
                        <h1 className={styles.heroHeading}>
                            Established & Trusted Pet Care Service
                        </h1>
                        <Para className={styles.heroDesc}>
                            Discover a wide variety of Pawsitive services to
                            choose from, including daycare, private walks,
                            office duty and spa.
                        </Para>
                        <Div className={styles.heroRow}>
                            <Link
                                to="/"
                                className={clsx(
                                    styles.btn,
                                    styles.btnPrimary,
                                    styles.heroCtaBtn
                                )}
                            >
                                Book a meet
                                <Span className={styles.bynIcon}>
                                    <svg
                                        width="9"
                                        height="8"
                                        viewBox="0 0 9 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.48584 1.5L5.98584 4L3.48584 6.5"
                                            stroke="#FD5056"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </Span>
                            </Link>
                            <Link to="/" className={styles.heroCtaLink}>
                                Schedule a Call
                            </Link>
                        </Div>
                    </Section>
                </Div>
            </Div>
        </Section>
    );
}
export default Home;
