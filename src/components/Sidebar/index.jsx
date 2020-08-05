import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faFileAlt, faImage, faShareAlt, faNetworkWired, faClock } from '@fortawesome/free-solid-svg-icons';
import { faDropbox } from '@fortawesome/free-brands-svg-icons';


const SideBarLink = ({href, title, icon}) => {

    return (
        <NavLink activeClassName={styles.navLinkActive} to={href} className={styles.navLink}>
            <i className={styles.navLinkIcon}>{icon}</i>
            <span>{title}</span>
        </NavLink>
    );
};

SideBarLink.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.element
};


const SideBar = () => {


    return (
        <div className={styles.sidebar}>
            <a href="/" className={styles.logo}>
                <FontAwesomeIcon icon={faDropbox} className={styles.logoIcon} />
            </a>

            <nav className={styles.nav}>
                <SideBarLink
                    href="/files"
                    title="Files"
                    icon={<FontAwesomeIcon icon={faFileAlt} />}
                />
                <SideBarLink
                    href="/photos"
                    title="Photos"
                    icon={<FontAwesomeIcon icon={faImage} />}
                />
                <SideBarLink
                    href="/sharing"
                    title="Sharing"
                    icon={<FontAwesomeIcon icon={faShareAlt} />}
                />
                <SideBarLink
                    href="/links"
                    title="Links"
                    icon={<FontAwesomeIcon icon={faNetworkWired} />}
                />
                <SideBarLink
                    href="/events"
                    title="Events"
                    icon={<FontAwesomeIcon icon={faClock} />}
                />
            </nav>
            <div className={styles.bottom}>
                <div>Status</div>
                <div className={styles.actions}>
                    <Link to="/upgrade-account" className={styles.upgradeLink}>
                        <FontAwesomeIcon
                            icon={faArrowUp}
                            className={styles.upgradeLinkIcon}
                        />
                        Upgrade account
                    </Link>
                </div>
            </div>
        </div>
    )
};


export default SideBar;