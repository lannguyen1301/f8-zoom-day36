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
                {/* Admin */}
                <Section className={styles.serviceSection}>
                    <SubTitle>DashBoard</SubTitle>
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

                {/* Users */}
                <Section className={styles.serviceSection}>
                    <SubTitle>Users</SubTitle>
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

                {/* Settings */}
                {/* <Section className={styles.serviceSection}>
                    <SubTitle>Settings</SubTitle>
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
                </Section> */}

                <Div className={styles.cardGrid}>
                    <Article className={styles.card}>
                        <Div className={styles.cardHeader}>
                            <Div className={styles.cardHeaderInner}>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/zeplin.svg" />
                                </Span>
                                <SubsectionTitle
                                    className={styles.cardHeaderTitle}
                                >
                                    Zeplin
                                </SubsectionTitle>
                            </Div>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para className={styles.cardBodyDesc}>
                                Collaboration between designers and developers.
                            </Para>
                        </Div>
                        <Div className={styles.cardFooter}>
                            <Link href="#">View integration</Link>
                        </Div>
                    </Article>
                    <Article className={styles.card}>
                        <Div className={styles.cardHeader}>
                            <Div className={styles.cardHeaderInner}>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/github.svg" />
                                </Span>
                                <SubsectionTitle
                                    className={styles.cardHeaderTitle}
                                >
                                    GitHub
                                </SubsectionTitle>
                            </Div>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para className={styles.cardBodyDesc}>
                                Link pull requests and automate workflows.
                            </Para>
                        </Div>
                        <Div className={styles.cardFooter}>
                            <Link href="#">View integration</Link>
                        </Div>
                    </Article>
                    <Article className={styles.card}>
                        <Div className={styles.cardHeader}>
                            <Div className={styles.cardHeaderInner}>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/figma.svg" />
                                </Span>
                                <SubsectionTitle
                                    className={styles.cardHeaderTitle}
                                >
                                    Figma
                                </SubsectionTitle>
                            </Div>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para className={styles.cardBodyDesc}>
                                Embed file previews in projects.
                            </Para>
                        </Div>
                        <Div className={styles.cardFooter}>
                            <Link href="#">View integration</Link>
                        </Div>
                    </Article>
                    <Article className={styles.card}>
                        <Div className={styles.cardHeader}>
                            <Div className={styles.cardHeaderInner}>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/zapier.svg" />
                                </Span>
                                <SubsectionTitle
                                    className={styles.cardHeaderTitle}
                                >
                                    Zapier
                                </SubsectionTitle>
                            </Div>
                            <Label className={styles.toggle}>
                                <Input type="checkbox" />
                                <Span className={styles.cardHeaderSpan}></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para className={styles.cardBodyDesc}>
                                Build custom automations and integrations with
                                apps.
                            </Para>
                        </Div>
                        <Div className={styles.cardFooter}>
                            <Link href="#">View integration</Link>
                        </Div>
                    </Article>
                    <Article className={styles.card}>
                        <Div className={styles.cardHeader}>
                            <Div className={styles.cardHeaderInner}>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/notion.svg" />
                                </Span>
                                <SubsectionTitle
                                    className={styles.cardHeaderTitle}
                                >
                                    Notion
                                </SubsectionTitle>
                            </Div>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para className={styles.cardBodyDesc}>
                                Embed notion pages and notes in projects.
                            </Para>
                        </Div>
                        <Div className={styles.cardFooter}>
                            <Link href="#">View integration</Link>
                        </Div>
                    </Article>
                    <Article className={styles.card}>
                        <Div className={styles.cardHeader}>
                            <Div className={styles.cardHeaderInner}>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/slack.svg" />
                                </Span>
                                <SubsectionTitle
                                    className={styles.cardHeaderTitle}
                                >
                                    Slack
                                </SubsectionTitle>
                            </Div>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para className={styles.cardBodyDesc}>
                                Send notifications to channels and create
                                projects.
                            </Para>
                        </Div>
                        <Div className={styles.cardFooter}>
                            <Link href="#">View integration</Link>
                        </Div>
                    </Article>
                    <Article className={styles.card}>
                        <Div className={styles.cardHeader}>
                            <Div className={styles.cardHeaderInner}>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/zendesk.svg" />
                                </Span>
                                <SubsectionTitle
                                    className={styles.cardHeaderTitle}
                                >
                                    Zendesk
                                </SubsectionTitle>
                            </Div>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para className={styles.cardBodyDesc}>
                                Link and automate Zendesk tickets.
                            </Para>
                        </Div>
                        <Div className={styles.cardFooter}>
                            <Link href="#">View integration</Link>
                        </Div>
                    </Article>
                    <Article className={styles.card}>
                        <Div className={styles.cardHeader}>
                            <Div className={styles.cardHeaderInner}>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/jira.svg" />
                                </Span>
                                <SubsectionTitle
                                    className={styles.cardHeaderTitle}
                                >
                                    Atlassian JIRA
                                </SubsectionTitle>
                            </Div>
                            <Label className={styles.toggle}>
                                <Input type="checkbox" />
                                <Span className={styles.cardHeaderSpan}></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para className={styles.cardBodyDesc}>
                                Plan, track, and release great software.
                            </Para>
                        </Div>
                        <Div className={styles.cardFooter}>
                            <Link href="#">View integration</Link>
                        </Div>
                    </Article>
                    <Article className={styles.card}>
                        <Div className={styles.cardHeader}>
                            <Div className={styles.cardHeaderInner}>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/dropbox.svg" />
                                </Span>
                                <SubsectionTitle
                                    className={styles.cardHeaderTitle}
                                >
                                    Dropbox
                                </SubsectionTitle>
                            </Div>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para className={styles.cardBodyDesc}>
                                Everything you need for work, all in one place.
                            </Para>
                        </Div>
                        <Div className={styles.cardFooter}>
                            <Link href="#">View integration</Link>
                        </Div>
                    </Article>
                    <Article className={styles.card}>
                        <Div className={styles.cardHeader}>
                            <Div className={styles.cardHeaderInner}>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/google-chrome.svg" />
                                </Span>
                                <SubsectionTitle
                                    className={styles.cardHeaderTitle}
                                >
                                    Google Chrome
                                </SubsectionTitle>
                            </Div>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para className={styles.cardBodyDesc}>
                                Link your Google account to share bookmarks
                                across your entire team.
                            </Para>
                        </Div>
                        <Div className={styles.cardFooter}>
                            <Link href="#">View integration</Link>
                        </Div>
                    </Article>
                    <Article className={styles.card}>
                        <Div className={styles.cardHeader}>
                            <Div className={styles.cardHeaderInner}>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/discord.svg" />
                                </Span>
                                <SubsectionTitle
                                    className={styles.cardHeaderTitle}
                                >
                                    Discord
                                </SubsectionTitle>
                            </Div>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para className={styles.cardBodyDesc}>
                                Keep in touch with your customers without
                                leaving the app.
                            </Para>
                        </Div>
                        <Div className={styles.cardFooter}>
                            <Link href="#">View integration</Link>
                        </Div>
                    </Article>
                    <Article className={styles.card}>
                        <Div className={styles.cardHeader}>
                            <Div className={styles.cardHeaderInner}>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/google-drive.svg" />
                                </Span>
                                <SubsectionTitle
                                    className={styles.cardHeaderTitle}
                                >
                                    Google Drive
                                </SubsectionTitle>
                            </Div>
                            <Label className={styles.toggle}>
                                <Input type="checkbox" />
                                <Span className={styles.cardHeaderSpan}></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para className={styles.cardBodyDesc}>
                                Link your Google account to share files across
                                your entire team.
                            </Para>
                        </Div>
                        <Div className={styles.cardFooter}>
                            <Link href="#">View integration</Link>
                        </Div>
                    </Article>
                </Div>
            </Div>
        </>
    );
}
export default Dashboard;
