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
import Ul from "@ui/Ul";
import Li from "@ui/Li";
import Img from "@ui/Img";

function About() {
    return (
        <>
            <Section className="container">
                {/* <!-- Hero / About --> */}
                <Div className={styles.hero}>
                    <Div className={styles.heroText}>
                        <Title className={styles.heroTextTitle}>
                            About our firm
                        </Title>
                        <Para className={styles.heroTextDesc}>
                            At our firm, we pride ourselves on delivering
                            tailored solutions that empower businesses to
                            thrive. With years of experience across various
                            industries, our dedicated team is committed to
                            driving growth and operational excellence.
                        </Para>
                        <Div className={styles.heroButtons}>
                            <Link to="#" className={styles.btnPrimary}>
                                Get Started →
                            </Link>
                            <Link to="#" className={styles.btnOutline}>
                                Free trial
                            </Link>
                        </Div>

                        <Div className={styles.stats}>
                            <Div className={styles.stat}>
                                <SubsectionTitle>95%</SubsectionTitle>
                                <Para>Complete customer satisfaction</Para>
                            </Div>
                            <Div className={styles.stat}>
                                <SubsectionTitle>10+</SubsectionTitle>
                                <Para>Innovation and valuable insight</Para>
                            </Div>
                            <Div className={styles.stat}>
                                <SubsectionTitle>$10m</SubsectionTitle>
                                <Para>
                                    Highly efficient financial strategies
                                </Para>
                            </Div>
                        </Div>
                    </Div>
                    <Div className={styles.heroImage}>
                        <Img
                            src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Professional Meomew"
                        />
                    </Div>
                </Div>

                {/* <!-- Benefits --> */}
                <Div className={styles.benefits}>
                    <Div className={styles.container}>
                        <Div className={styles.benefitsImage}>
                            <Img
                                src="https://images.unsplash.com/photo-1422565096762-bdb997a56a84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Business Gogogo"
                            />
                        </Div>

                        <Div>
                            <SubTitle>
                                Unlock our expertise to drive success across
                                industries.
                            </SubTitle>
                            <Para>
                                Leverage our deep industry knowledge and
                                innovative strategies to accelerate your
                                business growth. Our tailored solutions ensure
                                success across diverse sectors by addressing
                                your unique challenges and opportunities.
                            </Para>

                            <Div className={styles.benefitsList}>
                                <Div className={styles.benefitItem}>
                                    <i className="fas fa-check-circle"></i>
                                    Measurable proven results
                                </Div>
                                <Div className={styles.benefitItem}>
                                    <i className="fas fa-check-circle"></i>
                                    Innovative real solutions
                                </Div>
                                <Div className={styles.benefitItem}>
                                    <i className="fas fa-check-circle"></i>
                                    Customized business strategies
                                </Div>
                                <Div className={styles.benefitItem}>
                                    <i className="fas fa-check-circle"></i>
                                    Reliable expert guidance
                                </Div>
                                <Div className={styles.benefitItem}>
                                    <i className="fas fa-check-circle"></i>
                                    Multi-industry expertise
                                </Div>
                                <Div className={styles.benefitItem}>
                                    <i className="fas fa-check-circle"></i>
                                    Support for long-term
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>

                {/* <!-- Milestones --> */}
                <Div className={styles.milestones}>
                    <SubTitle>
                        Our journey: key milestones and achievements
                    </SubTitle>
                    <Para>
                        Discover the significant milestones that have shaped our
                        firm. Each achievement reflects our commitment to
                        excellence and growth.
                    </Para>

                    <Div className={styles.cards}>
                        <Div className={styles.card}>
                            <Div className={styles.cardIcon}>
                                <i className="fas fa-laptop-code"></i>
                            </Div>
                            <SubsectionTitle>
                                Technology Solutions (2008)
                            </SubsectionTitle>
                            <Para>
                                Founded with a vision to transform businesses,
                                we started our journey with the client project
                                set the stage for future successes.
                            </Para>
                        </Div>

                        <Div className={styles.card}>
                            <Div className={styles.cardIcon}>
                                <i className="fas fa-chart-line"></i>
                            </Div>
                            <SubsectionTitle>
                                Financial Consulting
                            </SubsectionTitle>
                            <Para>
                                Expert guidance to optimize your financial
                                performance.
                            </Para>
                        </Div>

                        <Div className={styles.card}>
                            <Div className={styles.cardIcon}>
                                <i className="fas fa-coins"></i>
                            </Div>
                            <SubsectionTitle>
                                Financial Consulting
                            </SubsectionTitle>
                            <Para>
                                Expert guidance to optimize your financial
                                performance.
                            </Para>
                        </Div>
                    </Div>
                </Div>
            </Section>
        </>
    );
}
export default About;
