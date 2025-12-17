import { Link, Outlet } from "react-router";
import AdminSidebar from "@layouts/AdminLayout/components/AdminSidebar";
import AdminFooter from "@layouts/AdminLayout/components/AdminFooter";
import styles from "./AdminLayout.module.scss";
import Div from "@ui/Div";
import Span from "@ui/Span";
import Title from "@ui/Title";
import SubTitle from "@ui/Title";
import Img from "@ui/Img";
import Button from "@ui/Button";
import Section from "@ui/Section";
import Nav from "@ui/Nav";
import Label from "@ui/Label";
import Article from "@ui/Article";
import Input from "@ui/Input";
import SubsectionTitle from "@ui/SubsectionTitle";

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
                <AdminFooter />
            </Div> */}

            <Section>
                <Div className={styles.app}>
                    <header className={styles.appHeader}>
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
                        <Div className={styles.appHeader-navigation}>
                            <Div className={styles.tabs}>
                                <Link href="#">Overview</Link>
                                <Link href="#" className={styles.active}>
                                    Payments
                                </Link>
                                <Link href="#">Cards</Link>
                                <Link href="#">Account</Link>
                                <Link href="#">System</Link>
                                <Link href="#">Business</Link>
                            </Div>
                        </Div>
                        <Div className={styles.appHeaderActions}>
                            <Button className={styles.userProfile}>
                                <Span>Matheo Peterson</Span>
                                <Span>
                                    <Img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" />
                                </Span>
                            </Button>
                                <Button className={clsx(styles.iconButton, styles.large)}>
                                    <i className="styles.ph-magnifying-glass"></i>
                                </Button>
                                <Button className={clsx(styles.iconButton, styles.large)}>
                                    <i className={styles.ph-bell}></i>
                                </Button>
                            </Div>
                        </Div>
                        <Div className={styles.appHeaderMobile}>
                            <Button className={styles.iconButton large}>
                                <i className={styles.ph-list}></i>
                            </Button>
                        </Div>
                    </header>

                    {/* <div className={styles.app-body">
		<div className={styles.app-body-navigation">
			<nav className={styles.navigation">
				<a href="#">
					<i className={styles.ph-browsers"></i>
					<span>Dashboard</span>
				</a>
				<a href="#">
					<i className={styles.ph-check-square"></i>
					<span>Scheduled</span>
				</a>
				<a href="#">
					<i className={styles.ph-swap"></i>
					<span>Transfers</span>
				</a>
				<a href="#">
					<i className={styles.ph-file-text"></i>
					<span>Templates</span>
				</a>
				<a href="#">
					<i className={styles.ph-globe"></i>
					<span>SWIFT</span>
				</a>
				<a href="#">
					<i className={styles.ph-clipboard-text"></i>
					<span>Exchange</span>
				</a>
			</nav>
			<footer className={styles.footer">
				<h1>Almeria<small>©</small></h1>
				<div>
					Almeria ©<br />
					All Rights Reserved 2021
				</div>
			</footer>
		</div>
		<div className={styles.app-body-main-content">
			<section className={styles.service-section">
				<h2>Service</h2>
				<div className={styles.service-section-header">
					<div className={styles.search-field">
						<i className={styles.ph-magnifying-glass"></i>
						<input type="text" placeholder="Account number">
					</div>
					<div className={styles.dropdown-field">
						<select>
							<option>Home</option>
							<option>Work</option>
						</select>
						<i className={styles.ph-caret-down"></i>
					</div>
					<button className={styles.flat-button">
						Search
					</button>
				</div>
				<div className={styles.mobile-only">
					<button className={styles.flat-button">
						Toggle search
					</button>
				</div>
				<div className={styles.tiles">
					<article className={styles.tile">
						<div className={styles.tile-header">
							<i className={styles.ph-lightning-light"></i>
							<h3>
								<span>Electricity</span>
								<span>UrkEnergo LTD.</span>
							</h3>
						</div>
						<a href="#">
							<span>Go to service</span>
							<span className={styles.iconButton">
								<i className={styles.ph-caret-right-bold"></i>
							</span>
						</a>
					</article>
					<article className={styles.tile">
						<div className={styles.tile-header">
							<i className={styles.ph-fire-simple-light"></i>
							<h3>
								<span>Heating Gas</span>
								<span>Gazprom UA</span>
							</h3>
						</div>
						<a href="#">
							<span>Go to service</span>
							<span className={styles.iconButton">
								<i className={styles.ph-caret-right-bold"></i>
							</span>
						</a>
					</article>
					<article className={styles.tile">
						<div className={styles.tile-header">
							<i className={styles.ph-file-light"></i>
							<h3>
								<span>Tax online</span>
								<span>Kharkov 62 str.</span>
							</h3>
						</div>
						<a href="#">
							<span>Go to service</span>
							<span className={styles.iconButton">
								<i className={styles.ph-caret-right-bold"></i>
							</span>
						</a>
					</article>
				</div>
				<div className={styles.service-section-footer">
					<p>Services are paid according to the current state of the currency and tariff.</p>
				</div>
			</section>
			<section className={styles.transfer-section">
				<div className={styles.transfer-section-header">
					<h2>Latest transfers</h2>
					<div className={styles.filter-options">
						<p>Filter selected: more than 100 $</p>
						<button className={styles.iconButton">
							<i className={styles.ph-funnel"></i>
						</button>
						<button className={styles.iconButton">
							<i className={styles.ph-plus"></i>
						</button>
					</div>
				</div>
				<div className={styles.transfers">
					<div className={styles.transfer">
						<div className={styles.transfer-logo">
							<img src="https://assets.codepen.io/285131/apple.svg" />
						</div>
						<dl className={styles.transfer-details">
							<div>
								<dt>Apple Inc.</dt>
								<dd>Apple ID Payment</dd>
							</div>
							<div>
								<dt>4012</dt>
								<dd>Last four digits</dd>
							</div>
							<div>
								<dt>28 Oct. 21</dt>
								<dd>Date payment</dd>
							</div>
						</dl>
						<div className={styles.transfer-number">
							- $ 550
						</div>
					</div>
					<div className={styles.transfer">
						<div className={styles.transfer-logo">
							<img src="https://assets.codepen.io/285131/pinterest.svg" />
						</div>
						<dl className={styles.transfer-details">
							<div>
								<dt>Pinterest</dt>
								<dd>2 year subscription</dd>
							</div>
							<div>
								<dt>5214</dt>
								<dd>Last four digits</dd>
							</div>
							<div>
								<dt>26 Oct. 21</dt>
								<dd>Date payment</dd>
							</div>
						</dl>
						<div className={styles.transfer-number">
							- $ 120
						</div>
					</div>
					<div className={styles.transfer">
						<div className={styles.transfer-logo">
							<img src="https://assets.codepen.io/285131/warner-bros.svg" />
						</div>
						<dl className={styles.transfer-details">
							<div>
								<dt>Warner Bros.</dt>
								<dd>Cinema</dd>
							</div>
							<div>
								<dt>2228</dt>
								<dd>Last four digits</dd>
							</div>
							<div>
								<dt>22 Oct. 21</dt>
								<dd>Date payment</dd>
							</div>
						</dl>
						<div className={styles.transfer-number">
							- $ 70
						</div>
					</div>
				</div>
			</section>
		</div>
		<div className={styles.app-body-sidebar">
			<section className={styles.payment-section">
				<h2>New Payment</h2>
				<div className={styles.payment-section-header">
					<p>Choose a card to transfer money</p>
					<div>
						<button className={styles.card-button mastercard">
							<svg width="2001" height="1237" viewBox="0 0 2001 1237" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g id="a624784f2834e21c94a1c0c9a58bbbaa">
									<path id="7869b07bea546aa59a5ee138adbcfd5a" d="M1270.57 1104.15H729.71V132.15H1270.58L1270.57 1104.15Z" fill="currentColor"></path>
									<path id="b54e3ab4d7044a9f288082bc6b864ae6" d="M764 618.17C764 421 856.32 245.36 1000.08 132.17C891.261 46.3647 756.669 -0.204758 618.09 9.6031e-07C276.72 9.6031e-07 0 276.76 0 618.17C0 959.58 276.72 1236.34 618.09 1236.34C756.672 1236.55 891.268 1189.98 1000.09 1104.17C856.34 991 764 815.35 764 618.17Z" fill="currentColor"></path>
									<path id="67f94b4d1b83252a6619ed6e0cc0a3a1" d="M2000.25 618.17C2000.25 959.58 1723.53 1236.34 1382.16 1236.34C1243.56 1236.54 1108.95 1189.97 1000.11 1104.17C1143.91 990.98 1236.23 815.35 1236.23 618.17C1236.23 420.99 1143.91 245.36 1000.11 132.17C1108.95 46.3673 1243.56 -0.201169 1382.15 -2.24915e-05C1723.52 -2.24915e-05 2000.24 276.76 2000.24 618.17" fill="currentColor"></path>
								</g>
							</svg>
						</button>
						<button className={styles.card-button visa active">
							<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 141.732 141.732">
								<g fill="currentColor">
									<path d="M62.935 89.571h-9.733l6.083-37.384h9.734zM45.014 52.187L35.735 77.9l-1.098-5.537.001.002-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s4.691.976 10.181 4.273l8.456 32.479h10.141l15.485-37.385H45.014zM121.569 89.571h8.937l-7.792-37.385h-7.824c-3.613 0-4.493 2.786-4.493 2.786L95.881 89.571h10.146l2.029-5.553h12.373l1.14 5.553zm-10.71-13.224l5.114-13.99 2.877 13.99h-7.991zM96.642 61.177l1.389-8.028s-4.286-1.63-8.754-1.63c-4.83 0-16.3 2.111-16.3 12.376 0 9.658 13.462 9.778 13.462 14.851s-12.075 4.164-16.06.965l-1.447 8.394s4.346 2.111 10.986 2.111c6.642 0 16.662-3.439 16.662-12.799 0-9.72-13.583-10.625-13.583-14.851.001-4.227 9.48-3.684 13.645-1.389z" />
								</g>
								<path d="M34.638 72.364l-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s7.373 1.528 14.445 7.253c6.762 5.472 8.967 12.292 8.967 12.292z" fill="currentColor" />
								<path fill="none" d="M0 0h141.732v141.732H0z" />
							</svg>
						</button>
					</div>
				</div>
				<div className={styles.payments">
					<div className={styles.payment">
						<div className={styles.card green">
							<span>01/22</span>
							<span>
								•••• 4012
							</span>
						</div>
						<div className={styles.payment-details">
							<h3>Internet</h3>
							<div>
								<span>$ 2,110</span>
								<button className={styles.iconButton">
									<i className={styles.ph-caret-right-bold"></i>
								</button>
							</div>
						</div>
					</div>
					<div className={styles.payment">
						<div className={styles.card olive">
							<span>12/23</span>
							<span>
								•••• 2228
							</span>
						</div>
						<div className={styles.payment-details">
							<h3>Universal</h3>
							<div>
								<span>$ 5,621</span>
								<button className={styles.iconButton">
									<i className={styles.ph-caret-right-bold"></i>
								</button>
							</div>
						</div>
					</div>
					<div className={styles.payment">
						<div className={styles.card gray">
							<span>03/22</span>
							<span>
								•••• 5214
							</span>
						</div>
						<div className={styles.payment-details">
							<h3>Gold</h3>
							<div>
								<span>$ 3,473</span>
								<button className={styles.iconButton">
									<i className={styles.ph-caret-right-bold"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.faq">
					<p>Most frequently asked questions</p>
					<div>
						<label>Question</label>
						<input type="text" placeholder="Type here">
					</div>
				</div>
				<div className={styles.payment-section-footer">
					<button className={styles.save-button">
						Save
					</button>
					<button className={styles.settings-button">
						<i className={styles.ph-gear"></i>
						<span>More settings</span>
					</button>
				</div>
			</section>
		</div>
	</div> */}
                </Div>
            </Section>
        </>
    );
}
export default AdminLayout;
