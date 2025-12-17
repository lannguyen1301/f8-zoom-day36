import clsx from "clsx";
import { Link } from "react-router";
import styles from "./Settings.module.scss";
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
function Settings() {
    return (
        <>
            <Div className={styles.contentMain}>
                <Title className={styles.settingsTitle}>Settings</Title>
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
                            <Label className={styles.toggle}>
                                <Input type="checkbox" checked="" />
                                <Span></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para>
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
                            <Label className={styles.toggle}>
                                <Input type="checkbox" checked="" />
                                <Span></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para>
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
                            <Label className={styles.toggle}>
                                <Input type="checkbox" checked="" />
                                <Span></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para>Embed file previews in projects.</Para>
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
                                <Span></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para>
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
                            <Label className={styles.toggle}>
                                <Input type="checkbox" checked="" />
                                <Span></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para>
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
                            <Label className={styles.toggle}>
                                <Input type="checkbox" checked="" />
                                <Span></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para>
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
                            <Label className={styles.toggle}>
                                <Input type="checkbox" checked="" />
                                <Span></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para>Link and automate Zendesk tickets.</Para>
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
                                <Span></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para>
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
                            <Label className={styles.toggle}>
                                <Input type="checkbox" checked="" />
                                <Span></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para>
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
                            <Label className={styles.toggle}>
                                <Input type="checkbox" checked="" />
                                <Span></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para>
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
                            <Label className={styles.toggle}>
                                <Input type="checkbox" checked="" />
                                <Span></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para>
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
                                <Span></Span>
                            </Label>
                        </Div>
                        <Div className={styles.cardBody}>
                            <Para>
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
export default Settings;
