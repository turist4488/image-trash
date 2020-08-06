import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const SideBarLink = ({ href, title, icon }) => {
    return (
        <NavLink activeClassName={styles.navLinkActive} to={href} className={styles.navLink}>
            <i className={styles.navLinkIcon}>{icon}</i>
            <span>{title}</span>
        </NavLink>
    );
};

SideBarLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.element
};

export default SideBarLink;
