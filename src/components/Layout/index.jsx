import React, { useState } from 'react';
import styles from './styles.module';
import SideBar from '../Sidebar';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainLayout = ({ children }) => {
    const [sidebarOpened, setSidebarOpened] = useState(false);

    const handleMenuToggle = (e) => {
        if (e.target.checked) {
            setSidebarOpened(true);
        } else {
            setSidebarOpened(false);
        }
    };

    return (
        <main className={styles.main}>
            <div className={sidebarOpened ? styles.sidebarWrapperOpened : styles.sidebarWrapper}>
                <SideBar />
            </div>
            <div className={styles.routeWrapper}>{children}</div>
            <React.Fragment>
                <input type="checkbox" id="menu-toggle" checked={sidebarOpened} className={styles.menuToggle} onChange={handleMenuToggle} />
                <label htmlFor="menu-toggle" className={styles.menuToggleButton}>
                    <FontAwesomeIcon icon={faBars} />
                </label>
            </React.Fragment>
        </main>
    );
};

export default MainLayout;
