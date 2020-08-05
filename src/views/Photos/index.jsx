import React from 'react';
import PhotosGrid from 'components/PhotosGrid';
import styles from './styles.module.scss';


const PhotosView = () => {


    return (
        <div className={styles.photosView}>
            <h1 className="page-title">Photos</h1>
            <PhotosGrid />
        </div>
    )
};

export default PhotosView;

