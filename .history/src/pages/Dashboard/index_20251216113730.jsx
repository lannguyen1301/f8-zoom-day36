import clsx from "clsx";
import { Link } from "react-router";
import styles from "./Dashboard.module.scss";
import Div from "@ui/Div";
import Span from "@ui/Span";
import Title from "@ui/Title";
import SubTitle from "@ui/SubTitle";
import Img from "@ui/Img";
import Button from "@ui/Button";
import Section from "@ui/Section";
import Nav from "@ui/Nav";
import Label from "@ui/Label";
import Article from "@ui/Article";
import Input from "@ui/Input";
import Para from "@ui/Para";
import Header from "@ui/Header";
import Footer from "@ui/Footer";
import SubsectionTitle from "@ui/SubsectionTitle";
function Dashboard() {
    return (
        <>
            <Div className={styles.appBodyMainContent}>
                <Section className={styles.serviceSection}>
                    <SubTitle>Dash Boar</SubTitle>
                    <Div className={styles.tiles}>
                        <Article className={styles.tile}>
                            <Div className={styles.tileHeader}>
                                <i className="fa-solid fa-bolt"></i>
                                <SubsectionTitle>
                                    <Span>Electricity</Span>
                                    <Span>UrkEnergo LTD.</Span>
                                </SubsectionTitle>
                            </Div>
                            <Link to="/">
                                <Span>Go to service</Span>
                                <Span className={styles.iconButton}>
                                    <i className="fa-solid fa-angle-right"></i>
                                </Span>
                            </Link>
                        </Article>
                        <Article className={styles.tile}>
                            <Div className={styles.tileHeader}>
                                <i className="fa-solid fa-fire"></i>
                                <SubsectionTitle>
                                    <Span>Heating Gas</Span>
                                    <Span>Gazprom UA</Span>
                                </SubsectionTitle>
                            </Div>
                            <Link to="/">
                                <Span>Go to service</Span>
                                <Span className={styles.iconButton}>
                                    <i className="fa-solid fa-angle-right"></i>
                                </Span>
                            </Link>
                        </Article>
                        <Article className={styles.tile}>
                            <Div className={styles.tileHeader}>
                                <i className="fa-regular fa-file"></i>
                                <SubsectionTitle>
                                    <Span>Tax online</Span>
                                    <Span>Kharkov 62 str.</Span>
                                </SubsectionTitle>
                            </Div>
                            <Link to="/">
                                <Span>Go to service</Span>
                                <Span className={styles.iconButton}>
                                    <i className="fa-solid fa-angle-right"></i>
                                </Span>
                            </Link>
                        </Article>
                    </Div>
                    <Div className={styles.serviceSectionFooter}>
                        <Para>
                            Services are paid according to the current state of
                            the currency and tariff.
                        </Para>
                    </Div>
                </Section>
            </Div>
        </>
    );
}
export default Dashboard;
