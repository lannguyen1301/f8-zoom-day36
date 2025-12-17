import { Link, Outlet } from "react-router";
import AdminSidebar from "@layouts/AdminLayout/components/AdminSidebar";
import AdminFooter from "@layouts/AdminLayout/components/AdminFooter";
import styles from "./AdminLayout.module.scss";
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
// import  from "@ui/";
import SubsectionTitle from "@ui/SubsectionTitle";
import clsx from "clsx";

function AdminLayout() {
    return (
        <>
            {/* <Div className={styles.adminLayout}>
                <main>
                    <AdminSidebar />
                    <Div>
                        <Outlet />
                    </Div>
                </main>
                <Admin />
            </Div> */}

            <Section className={styles.adminWrapper}>
                <Div className={styles.app}>
                    <Header className={styles.appHeader}>
                        <Div className={styles.appHeaderLogo}>
                            <Div className={styles.logo}>
                                <Span className={styles.logoIcon}>
                                    <Img src="https://assets.codepen.io/285131/almeria-logo.svg" />
                                </Span>
                                <Title className={styles.logoTitle}>
                                    <Span>Almeria</Span>
                                    <Span>NeoBank</Span>
                                </Title>
                            </Div>
                        </Div>
                        <Div className={styles.appHeaderNavigation}>
                            <Div className={styles.tabs}>
                                <Link to="/">Overview</Link>
                                <Link to="/" className={styles.active}>
                                    Payments
                                </Link>
                                <Link to="/">Cards</Link>
                                <Link to="/">Account</Link>
                                <Link to="/">System</Link>
                                <Link to="/">Business</Link>
                            </Div>
                        </Div>
                        <Div className={styles.appHeaderActions}>
                            <Button className={styles.userProfile}>
                                <Span>Matheo Peterson</Span>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" />
                                </Span>
                            </Button>
                            <Button
                                className={clsx(
                                    styles.iconButton,
                                    styles.large
                                )}
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Button>
                            <Button
                                className={clsx(
                                    styles.iconButton,
                                    styles.large
                                )}
                            >
                                <i className="fa-regular fa-bell"></i>
                            </Button>
                        </Div>
                        <Div className={styles.appHeaderMobile}>
                            <Button
                                className={clsx(
                                    styles.iconButton,
                                    styles.large
                                )}
                            >
                                <i className="ph-list"></i>
                            </Button>
                        </Div>
                    </Header>

                    <Div className={styles.appBody}>
                        <Div className={styles.appBodyNavigation}>
                            <Nav className={styles.navigation}>
                                <Link to="/">
                                    <i className="ph-browsers"></i>
                                    <Span>Dashboard</Span>
                                </Link>
                                <Link to="/">
                                    <i className="ph-check-square"></i>
                                    <Span>Scheduled</Span>
                                </Link>
                                <Link to="/">
                                    <i className="ph-swap"></i>
                                    <Span>Transfers</Span>
                                </Link>
                                <Link to="/">
                                    <i className="ph-file-text"></i>
                                    <Span>Templates</Span>
                                </Link>
                                <Link to="/">
                                    <i className="ph-globe"></i>
                                    <Span>SWIFT</Span>
                                </Link>
                                <Link to="/">
                                    <i className="ph-clipboard-text"></i>
                                    <Span>Exchange</Span>
                                </Link>
                            </Nav>
                            <Footer className={styles.footer}>
                                <Title>
                                    Almeria<small>©</small>
                                </Title>
                                <Div>
                                    Almeria ©<br />
                                    All Rights Reserved 2021
                                </Div>
                            </Footer>
                        </Div>
                        <Div className={styles.appBodyMainContent}>
                            <Section className={styles.serviceSection}>
                                <SubTitle>Service</SubTitle>
                                <Div className={styles.serviceSectionHeader}>
                                    <Div className={styles.searchField}>
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        <Input
                                            type="text"
                                            placeholder="Account number"
                                        />
                                    </Div>
                                    <Div className={styles.dropdownField}>
                                        <select>
                                            <option>Home</option>
                                            <option>Work</option>
                                        </select>
                                        <i class="fa-solid fa-arrow-down"></i>
                                    </Div>
                                    <Button className={styles.flatButton}>
                                        Search
                                    </Button>
                                </Div>
                                <Div className={styles.mobileOnly}>
                                    <Button className={styles.flatButton}>
                                        Toggle search
                                    </Button>
                                </Div>
                                <Div className={styles.tiles}>
                                    <Article className={styles.tile}>
                                        <Div className={styles.tileHeader}>
                                            <i class="fa-solid fa-bolt"></i>
                                            <SubsectionTitle>
                                                <Span>Electricity</Span>
                                                <Span>UrkEnergo LTD.</Span>
                                            </SubsectionTitle>
                                        </Div>
                                        <Link to="/">
                                            <Span>Go to service</Span>
                                            <Span className={styles.iconButton}>
                                                <i class="fa-solid fa-angle-right"></i>
                                            </Span>
                                        </Link>
                                    </Article>
                                    <Article className={styles.tile}>
                                        <Div className={styles.tileHeader}>
                                            <i className="ph-fire-simple-light"></i>
                                            <SubsectionTitle>
                                                <Span>Heating Gas</Span>
                                                <Span>Gazprom UA</Span>
                                            </SubsectionTitle>
                                        </Div>
                                        <Link to="/">
                                            <Span>Go to service</Span>
                                            <Span className={styles.iconButton}>
                                                <i class="fa-solid fa-angle-right"></i>
                                            </Span>
                                        </Link>
                                    </Article>
                                    <Article className={styles.tile}>
                                        <Div className={styles.tileHeader}>
                                            <i className="ph-file-light"></i>
                                            <SubsectionTitle>
                                                <Span>Tax online</Span>
                                                <Span>Kharkov 62 str.</Span>
                                            </SubsectionTitle>
                                        </Div>
                                        <Link to="/">
                                            <Span>Go to service</Span>
                                            <Span className={styles.iconButton}>
                                                <i class="fa-solid fa-angle-right"></i>
                                            </Span>
                                        </Link>
                                    </Article>
                                </Div>
                                <Div className={styles.serviceSectionFooter}>
                                    <Para>
                                        Services are paid according to the
                                        current state of the currency and
                                        tariff.
                                    </Para>
                                </Div>
                            </Section>
                            <Section className={styles.transferSection}>
                                <Div className={styles.transferSectionHeader}>
                                    <SubTitle>Latest transfers</SubTitle>
                                    <Div className={styles.filterOptions}>
                                        <Para>
                                            Filter selected: more than 100 $
                                        </Para>
                                        <Button className={styles.iconButton}>
                                            <i class="fa-solid fa-filter"></i>
                                        </Button>
                                        <Button className={styles.iconButton}>
                                            <i class="fa-solid fa-plus"></i>
                                        </Button>
                                    </Div>
                                </Div>
                                <Div className={styles.transfers}>
                                    <Div className={styles.transfer}>
                                        <Div className={styles.transferLogo}>
                                            <Img src="https://assets.codepen.io/285131/apple.svg" />
                                        </Div>
                                        <dl className={styles.transferDetails}>
                                            <dt>Apple Inc.</dt>
                                            <dd>Apple ID Payment</dd>
                                            <dt>4012</dt>
                                            <dd>Last four digits</dd>
                                            <dt>28 Oct. 21</dt>
                                            <dd>Date payment</dd>
                                        </dl>
                                        <Div className={styles.transferNumber}>
                                            - $ 550
                                        </Div>
                                    </Div>
                                    <Div className={styles.transfer}>
                                        <Div className={styles.transferLogo}>
                                            <Img src="https://assets.codepen.io/285131/pinterest.svg" />
                                        </Div>
                                        <dl className={styles.transferDetails}>
                                            <Div>
                                                <dt>Pinterest</dt>
                                                <dd>2 year subscription</dd>
                                            </Div>
                                            <Div>
                                                <dt>5214</dt>
                                                <dd>Last four digits</dd>
                                            </Div>
                                            <Div>
                                                <dt>26 Oct. 21</dt>
                                                <dd>Date payment</dd>
                                            </Div>
                                        </dl>
                                        <Div className={styles.transferNumber}>
                                            - $ 120
                                        </Div>
                                    </Div>
                                    <Div className={styles.transfer}>
                                        <Div className={styles.transferLogo}>
                                            <Img src="https://assets.codepen.io/285131/warner-bros.svg" />
                                        </Div>
                                        <dl className={styles.transferDetails}>
                                            <dt>Warner Bros.</dt>
                                            <dd>Cinema</dd>

                                            <dt>2228</dt>
                                            <dd>Last four digits</dd>

                                            <dt>22 Oct. 21</dt>
                                            <dd>Date payment</dd>
                                        </dl>
                                        <Div className={styles.transferNumber}>
                                            - $ 70
                                        </Div>
                                    </Div>
                                </Div>
                            </Section>
                        </Div>
                        <Div className={styles.appBodySidebar}>
                            <Section className={styles.paymentSection}>
                                <SubTitle>New Payment</SubTitle>
                                <Div className={styles.paymentSectionHeader}>
                                    <Para>Choose a card to transfer money</Para>
                                    <Div>
                                        <Button
                                            className={clsx(
                                                styles.cardButton,
                                                styles.mastercard
                                            )}
                                        >
                                            <svg
                                                width="2001"
                                                height="1237"
                                                viewBox="0 0 2001 1237"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="a624784f2834e21c94a1c0c9a58bbbaa">
                                                    <path
                                                        id="7869b07bea546aa59a5ee138adbcfd5a"
                                                        d="M1270.57 1104.15H729.71V132.15H1270.58L1270.57 1104.15Z"
                                                        fill="currentColor"
                                                    ></path>
                                                    <path
                                                        id="b54e3ab4d7044a9f288082bc6b864ae6"
                                                        d="M764 618.17C764 421 856.32 245.36 1000.08 132.17C891.261 46.3647 756.669 -0.204758 618.09 9.6031e-07C276.72 9.6031e-07 0 276.76 0 618.17C0 959.58 276.72 1236.34 618.09 1236.34C756.672 1236.55 891.268 1189.98 1000.09 1104.17C856.34 991 764 815.35 764 618.17Z"
                                                        fill="currentColor"
                                                    ></path>
                                                    <path
                                                        id="67f94b4d1b83252a6619ed6e0cc0a3a1"
                                                        d="M2000.25 618.17C2000.25 959.58 1723.53 1236.34 1382.16 1236.34C1243.56 1236.54 1108.95 1189.97 1000.11 1104.17C1143.91 990.98 1236.23 815.35 1236.23 618.17C1236.23 420.99 1143.91 245.36 1000.11 132.17C1108.95 46.3673 1243.56 -0.201169 1382.15 -2.24915e-05C1723.52 -2.24915e-05 2000.24 276.76 2000.24 618.17"
                                                        fill="currentColor"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </Button>
                                        <Button
                                            className={clsx(
                                                styles.cardButton,
                                                styles.visa,
                                                styles.active
                                            )}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="2500"
                                                height="2500"
                                                viewBox="0 0 141.732 141.732"
                                            >
                                                <g fill="currentColor">
                                                    <path d="M62.935 89.571h-9.733l6.083-37.384h9.734zM45.014 52.187L35.735 77.9l-1.098-5.537.001.002-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s4.691.976 10.181 4.273l8.456 32.479h10.141l15.485-37.385H45.014zM121.569 89.571h8.937l-7.792-37.385h-7.824c-3.613 0-4.493 2.786-4.493 2.786L95.881 89.571h10.146l2.029-5.553h12.373l1.14 5.553zm-10.71-13.224l5.114-13.99 2.877 13.99h-7.991zM96.642 61.177l1.389-8.028s-4.286-1.63-8.754-1.63c-4.83 0-16.3 2.111-16.3 12.376 0 9.658 13.462 9.778 13.462 14.851s-12.075 4.164-16.06.965l-1.447 8.394s4.346 2.111 10.986 2.111c6.642 0 16.662-3.439 16.662-12.799 0-9.72-13.583-10.625-13.583-14.851.001-4.227 9.48-3.684 13.645-1.389z" />
                                                </g>
                                                <path
                                                    d="M34.638 72.364l-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s7.373 1.528 14.445 7.253c6.762 5.472 8.967 12.292 8.967 12.292z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    fill="none"
                                                    d="M0 0h141.732v141.732H0z"
                                                />
                                            </svg>
                                        </Button>
                                    </Div>
                                </Div>
                                <Div className={styles.payments}>
                                    <Div className={styles.payment}>
                                        <Div
                                            className={clsx(
                                                styles.card,
                                                styles.green
                                            )}
                                        >
                                            <Span>01/22</Span>
                                            <Span>•••• 4012</Span>
                                        </Div>
                                        <Div className={styles.paymentDetails}>
                                            <SubsectionTitle>
                                                Internet
                                            </SubsectionTitle>
                                            <Div>
                                                <Span>$ 2,110</Span>
                                                <Button
                                                    className={
                                                        styles.iconButton
                                                    }
                                                >
                                                    <i class="fa-solid fa-angle-right"></i>
                                                </Button>
                                            </Div>
                                        </Div>
                                    </Div>
                                    <Div className={styles.payment}>
                                        <Div
                                            className={clsx(
                                                styles.card,
                                                styles.olive
                                            )}
                                        >
                                            <Span>12/23</Span>
                                            <Span>•••• 2228</Span>
                                        </Div>
                                        <Div className={styles.paymentDetails}>
                                            <SubsectionTitle>
                                                Universal
                                            </SubsectionTitle>
                                            <Div>
                                                <Span>$ 5,621</Span>
                                                <Button
                                                    className={
                                                        styles.iconButton
                                                    }
                                                >
                                                    <i class="fa-solid fa-angle-right"></i>
                                                </Button>
                                            </Div>
                                        </Div>
                                    </Div>
                                    <Div className={styles.payment}>
                                        <Div
                                            className={clsx(
                                                styles.card,
                                                styles.gray
                                            )}
                                        >
                                            <Span>03/22</Span>
                                            <Span>•••• 5214</Span>
                                        </Div>
                                        <Div className={styles.paymentDetails}>
                                            <SubsectionTitle>
                                                Gold
                                            </SubsectionTitle>
                                            <Div>
                                                <Span>$ 3,473</Span>
                                                <Button
                                                    className={
                                                        styles.iconButton
                                                    }
                                                >
                                                    <i class="fa-solid fa-angle-right"></i>
                                                </Button>
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div className={styles.faq}>
                                    <Para>Most frequently asked questions</Para>
                                    <Div>
                                        <Label>Question</Label>
                                        <Input
                                            type="text"
                                            placeholder="Type here"
                                        />
                                    </Div>
                                </Div>
                                <Div className={styles.paymentSection}>
                                    <Button className={styles.saveButton}>
                                        Save
                                    </Button>
                                    <Button className={styles.settingsButton}>
                                        <i class="fa-solid fa-gear"></i>
                                        <Span>More settings</Span>
                                    </Button>
                                </Div>
                            </Section>
                        </Div>
                    </Div>
                </Div>
            </Section>
        </>
    );
}
export default AdminLayout;
