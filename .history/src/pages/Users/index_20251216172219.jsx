import clsx from "clsx";
import { Link } from "react-router";
import styles from "./Users.module.scss";
import Div from "@ui/Div";
import Span from "@ui/Span";
import Title from "@ui/Title";
import Img from "@ui/Img";
import Label from "@ui/Label";
import Article from "@ui/Article";
import Input from "@ui/Input";
import Para from "@ui/Para";
import SubsectionTitle from "@ui/SubsectionTitle";
function Users() {
    return (
        <>
            <Div className={styles.contentMain}>
                <Title className={styles.settingsTitle}>Users</Title>
                <Div className={styles.cardGrid}>
                    <Article className={styles.card}>
                        <Div className={styles.cardHeader}>
                            <Div className={styles.cardHeaderInner}>
                                <Span>
                                    <Img
                                        className={styles.cardHeaderImg}
                                        src="https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg"
                                    />
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
                                    <Img
                                        className={styles.cardHeaderImg}
                                        src="https://cdn.pixabay.com/photo/2020/08/26/11/57/dog-5519360_1280.jpg"
                                    />
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
                                    <Img
                                        className={styles.cardHeaderImg}
                                        src="https://cdn.pixabay.com/photo/2025/06/20/10/47/dog-9670619_1280.jpg"
                                    />
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
                                    <Img
                                        className={styles.cardHeaderImg}
                                        src="https://cdn.pixabay.com/photo/2022/01/23/16/06/dog-6961236_1280.jpg"
                                    />
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
                                    <Img
                                        className={styles.cardHeaderImg}
                                        src="https://cdn.pixabay.com/photo/2022/05/05/20/01/australian-shepherd-7176981_1280.jpg"
                                    />
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
                                    <Img
                                        className={styles.cardHeaderImg}
                                        src="https://cdn.pixabay.com/photo/2025/04/22/05/54/dog-9548923_1280.jpg"
                                    />
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
                                    <Img
                                        className={styles.cardHeaderImg}
                                        src="https://cdn.pixabay.com/photo/2021/01/09/14/04/australian-shepherd-5902421_1280.jpg"
                                    />
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
                                    <Img
                                        className={styles.cardHeaderImg}
                                        src="https://cdn.pixabay.com/photo/2021/08/18/22/42/australian-shepherd-6556697_1280.jpg"
                                    />
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
                                    <Img
                                        className={styles.cardHeaderImg}
                                        src="https://cdn.pixabay.com/photo/2023/10/01/12/27/border-collie-8287329_960_720.jpg"
                                    />
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
                                    <Img
                                        className={styles.cardHeaderImg}
                                        src="https://cdn.pixabay.com/photo/2024/01/15/21/13/puppy-8510899_1280.jpg"
                                    />
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
                                    <Img
                                        className={styles.cardHeaderImg}
                                        src="https://cdn.pixabay.com/photo/2020/12/21/08/36/dog-5849152_1280.jpg"
                                    />
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
                                    <Img
                                        className={styles.cardHeaderImg}
                                        src="https://cdn.pixabay.com/photo/2022/01/29/11/58/dog-6977210_1280.jpg"
                                    />
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
export default Users;
