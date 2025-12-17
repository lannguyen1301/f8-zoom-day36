import { Link } from "react-router";
import "@styles/main.scss";
import styles from "./About.module.scss";
// Components
import Section from "@ui/Section";
import Div from "@ui/Div";
import Title from "@ui/Title";
import Para from "@ui/Para";
import SubsectionTitle from "@ui/SubsectionTitle";
import Ul from "@ui/Ul";
import Li from "@ui/Li";
import Img from "@ui/Img";

function About() {
    return (
        <>
            {/* <!-- Hero / About --> */}
            <Section className="container">
                <Div class="hero">
                    <Div class="hero-text">
                        <Title>About our firm</Title>
                        <Para>
                            At our firm, we pride ourselves on delivering
                            tailored solutions that empower businesses to
                            thrive. With years of experience across various
                            industries, our dedicated team is committed to
                            driving growth and operational excellence.
                        </Para>
                        <Div class="hero-buttons">
                            <Link href="#" class="btn-primary">
                                Get Started →
                            </Link>
                            <Link href="#" class="btn-outline">
                                Free trial
                            </Link>
                        </Div>

                        <Div class="stats">
                            <Div class="stat">
                                <SubsectionTitle>95%</SubsectionTitle>
                                <Para>Complete customer satisfaction</Para>
                            </Div>
                            <Div class="stat">
                                <SubsectionTitle>10+</SubsectionTitle>
                                <Para>Innovation and valuable insight</Para>
                            </Div>
                            <Div class="stat">
                                <SubsectionTitle>$10m</SubsectionTitle>
                                <Para>
                                    Highly efficient financial strategies
                                </Para>
                            </Div>
                        </Div>
                    </Div>
                    <Div class="hero-image">
                        <Img
                            src="https://images.unsplash.com/photo-1580489942398-784ebe1d0bb1?w=600"
                            alt="Professional woman"
                        />
                    </Div>
                </Div>
            </Section>

            {/* <!-- Benefits --> */}
            <Div class="benefits">
                <Div class="container">
                    <Div class="benefits-image">
                        <Img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
                            alt="Business woman"
                        />
                    </Div>

                    <Div>
                        <h2>
                            Unlock our expertise to drive success across
                            industries.
                        </h2>
                        <p style="margin-top:1rem; color:var(--gray);">
                            Leverage our deep industry knowledge and innovative
                            strategies to accelerate your business growth. Our
                            tailored solutions ensure success across diverse
                            sectors by addressing your unique challenges and
                            opportunities.
                        </p>

                        <Div class="benefits-list">
                            <Div class="benefit-item">
                                <i class="fas fa-check-circle"></i> Measurable
                                proven results
                            </Div>
                            <Div class="benefit-item">
                                <i class="fas fa-check-circle"></i> Innovative
                                real solutions
                            </Div>
                            <Div class="benefit-item">
                                <i class="fas fa-check-circle"></i> Customized
                                business strategies
                            </Div>
                            <Div class="benefit-item">
                                <i class="fas fa-check-circle"></i> Reliable
                                expert guidance
                            </Div>
                            <Div class="benefit-item">
                                <i class="fas fa-check-circle"></i>{" "}
                                Multi-industry expertise
                            </Div>
                            <Div class="benefit-item">
                                <i class="fas fa-check-circle"></i> Support for
                                long-term
                            </Div>
                        </div>
                    </div>
                </div>
            </Div>

            {/* <!-- Milestones --> */}
            <section class="milestones">
                <h2>Our journey: key milestones and achievements</h2>
                <p>
                    Discover the significant milestones that have shaped our
                    firm. Each achievement reflects our commitment to excellence
                    and growth.
                </p>

                <Div class="cards">
                    <Div class="card">
                        <Div class="card-icon">
                            <i class="fas fa-laptop-code"></i>
                        </Div>
                        <h3>Technology Solutions (2008)</h3>
                        <p>
                            Founded with a vision to transform businesses, we
                            started our journey with the client project set the
                            stage for future successes.
                        </p>
                    </div>

                    <Div class="card">
                        <Div class="card-icon">
                            <i class="fas fa-chart-line"></i>
                        </Div>
                        <h3>Financial Consulting</h3>
                        <p>
                            Expert guidance to optimize your financial
                            performance.
                        </p>
                    </div>

                    <Div class="card">
                        <Div class="card-icon">
                            <i class="fas fa-coins"></i>
                        </Div>
                        <h3>Financial Consulting</h3>
                        <p>
                            Expert guidance to optimize your financial
                            performance.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
export default About;
