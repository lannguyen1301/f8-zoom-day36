import styles from "./AdminFooter.module.scss";
import { Link } from "react-router";
import Section from "@ui/Section";
import Header from "@ui/Header";
import Div from "@ui/Div";
import "@styles/main.scss";
import clsx from "clsx";

function AdminHeader() {
    return (
        <>
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
                    <Div className={styles.appHeaderActionsButtons}>
                        <Button
                            className={clsx(styles.iconButton, styles.large)}
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                        <Button
                            className={clsx(styles.iconButton, styles.large)}
                        >
                            <i className="fa-regular fa-bell"></i>
                        </Button>
                    </Div>
                </Div>
                <Div className={styles.appHeaderMobile}>
                    <Button className={clsx(styles.iconButton, styles.large)}>
                        <i className="ph-list"></i>
                    </Button>
                </Div>
            </Header>
            ;
        </>
    );
}

export default AdminHeader;
