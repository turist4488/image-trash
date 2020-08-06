import React from 'react';
import PhotosGrid from 'components/PhotosGrid';
import styles from './styles.module.scss';
import { faSearch, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PhotosView = () => {
    return (
        <div className={styles.photosView}>
            <div className={styles.header}>
                <label htmlFor="search" className={styles.search}>
                    <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                    <input type="text" id="search" className={styles.searchInput} placeholder="Search" />
                </label>
                <div className={styles.headerRight}>
                    <span className={styles.accountButtonDesktop}>
                        <FontAwesomeIcon icon={faBell} className={styles.notificationButton} />
                        Roman Sachenok
                        <FontAwesomeIcon icon={faChevronDown} className={styles.accountButtonIcon} />
                    </span>
                </div>
            </div>
            <h1 className="page-title">Photos</h1>
            <PhotosGrid />
        </div>
    );
};

export default PhotosView;
