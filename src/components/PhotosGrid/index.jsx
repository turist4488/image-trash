import React from 'react'
import database from '../../database.json';
import styles from './styles.module.scss';
import { formatBytes } from '../../utils/formatBytes';
import {faFileImport, faFolderPlus, faFileUpload, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PhotosGrid = () => {


    return (
        <div className={styles.grid}>
            <div className={styles.actions}>
                <div className={styles.actionsLeft}>
                    <label
                        htmlFor="uploadPhoto"
                        className={styles.uploadButton}
                        title="Upload"
                    >
                        <FontAwesomeIcon icon={faFileImport} />
                        <input type="file" id="uploadPhoto" />
                    </label>
                    <button
                        type="button"
                        title="Add Folder"
                        className={styles.actionButton}
                    >
                        <FontAwesomeIcon icon={faFolderPlus} />
                    </button>
                    <button
                        type="button"
                        title="Import file"
                        className={styles.actionButton}
                    >
                        <FontAwesomeIcon icon={faFileUpload} />
                    </button>
                    <button
                        type="button"
                        title="Remove"
                        className={styles.actionButton}
                    >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
                <div className={styles.actionsRight}></div>
            </div>
            <div className={styles.photosWrapper}>
                {database.images.map((image, index) => (
                    <div key={`image-${index + 1}`} className={styles.photo}>
                        <div className={styles.photoPreview}>
                            <div className={styles.photoPreviewImage}>
                                <img src={image.url} alt={image.fileName} />
                            </div>
                        </div>
                        <div className={styles.photoMetadata}>
                            <span className={styles.photoMetadataName}>
                                {image.fileName}
                            </span>
                            <span>{formatBytes(image.size)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default PhotosGrid;
