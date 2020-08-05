import React from 'react';
import styles from './styles.module';
import SideBar from '../Sidebar';


const MainLayout = ({children}) => (
    <main className={styles.main}>
        <div className={styles.sidebarWrapper}>
            <SideBar />
        </div>
        <div className={styles.routeWrapper}>
            {children}
        </div>
    </main>
);

export default MainLayout;