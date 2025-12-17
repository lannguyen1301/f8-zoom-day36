import clsx from "clsx";
import styles from "./AdminHeader.module.scss";
import { Link, NavLink } from "react-router";
import Header from "@ui/Header";
import Logo from "@ui/Logo";
import Img from "@ui/Img";
import Title from "@ui/Title";
import Span from "@ui/Span";
import Div from "@ui/Div";
import Button from "@ui/Button";
import "@styles/main.scss";

const navItems = [
    {
        to: "/admin",
        title: "Dashboard",
        icon: "fa-solid fa-chart-pie",
    },
    {
        to: "/admin/users",
        title: "Users",
        icon: "fa-solid fa-users",
    },
    {
        to: "/admin/settings",
        title: "Settings",
        icon: "fa-solid fa-screwdriver-wrench",
    },
];

function AdminHeader() {
    const renderNavItems = () => {
        return navItems.map((item, index) => (
            <Li key={index} className={styles.navbarItem}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.navbarLink
                    }
                    to={item.to}
                >
                    {item.title}
                </NavLink>
            </Li>
        ));
    };

    return (
        <>
            <Header className={styles.appHeader}>
                <Div className={styles.appHeaderLogo}>
                    <Div className={styles.logo}>
                        <Span className={styles.logoIcon}>
                            <Img src="./logo/logo.svg" />
                        </Span>
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
            </Header>
        </>
    );
}

export default AdminHeader;
<Header class="app-header">
        <div class="app-header-logo">
          <div class="logo">
            <span class="logo-icon">
              <img src="https://assets.codepen.io/285131/almeria-logo.svg">
            </span>
            <h1 class="logo-title">
              <span>Almeria</span>
              <span>NeoBank</span>
            </h1>
          </div>
        </div>
        <div class="app-header-navigation">
          <div class="tabs">
            <a href="#"> Overview </a>
            <a href="#" class="active"> Payments </a>
            <a href="#"> Cards </a>
            <a href="#"> Account </a>
            <a href="#"> System </a>
            <a href="#"> Business </a>
          </div>
        </div>
        <div class="app-header-actions">
          <button class="user-profile">
            <span>Matheo Peterson</span>
            <span>
              <img src="https://assets.codepen.io/285131/almeria-avatar.jpeg">
            </span>
          </button>
          <div class="app-header-actions-buttons">
            <button class="icon-button large">
              <i class="ph-magnifying-glass"></i>
            </button>
            <button class="icon-button large">
              <i class="ph-bell"></i>
            </button>
          </div>
        </div>
        <div class="app-header-mobile">
          <button class="icon-button large">
            <i class="ph-list"></i>
          </button>
        </div>
      </Header>