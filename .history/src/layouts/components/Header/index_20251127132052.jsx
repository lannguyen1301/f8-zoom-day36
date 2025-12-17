import clsx from "clsx";
import styles from "./Header.module.scss";
function Header() {
    return (
        <>
            <div className={styles.menuWrapper}>
                <div className={styles.menuTitle}>Hover Them</div>

                <div className={styles.menuContainer}>
                    <div className={clsx(styles.menuItem, styles.group)}>
                        <div className={styles.menuIcon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19ZM7 15H17V17H7V15Z"></path>
                            </svg>
                        </div>
                        <span className={styles.tooltip}>Home</span>
                    </div>

                    <div className={clsx(styles.menuItem, styles.group)}>
                        <div className={styles.menuIcon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                height="24"
                                width="24"
                            >
                                <path
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                                ></path>
                            </svg>
                        </div>
                        <span className={styles.tooltip}>Messages</span>
                    </div>

                    <div className={clsx(styles.menuItem, styles.group)}>
                        <div className={styles.menuIcon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                height="24"
                                width="24"
                            >
                                <path
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                                ></path>
                            </svg>
                        </div>
                        <span className={styles.tooltip}>User</span>
                    </div>

                    <div className={clsx(styles.menuItem, styles.group)}>
                        <div className={styles.menuIcon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                height="24"
                                width="24"
                            ></svg>
                        </div>
                        <span className={styles.tooltip}>Settings</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
