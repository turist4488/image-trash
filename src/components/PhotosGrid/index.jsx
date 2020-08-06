import React, { useState } from 'react';
import styles from './styles.module.scss';
import { formatBytes } from '../../utils/formatBytes';
import { faFileImport, faFolderPlus, faFileUpload, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SortingTabs from '../SortingTabs';
import LoadingIndicator from 'components/LoadingIndicator';
import { usePhotos } from '../../talons/Photos/usePhotos';
import { INITIAL_PHOTOS_SORTING, NAME_SORTING_KEY, SIZE_SORTING_KEY, LAST_MODIFIED_SORTING_KEY } from 'constants/sorting';

const PhotosGrid = () => {
    const [sortingType, setSortingType] = useState(INITIAL_PHOTOS_SORTING);

    //custom hook, that simulate e.g. apollo useQuery
    const { photos, loading, error } = usePhotos({ url: 'database.json' });

    const handleSortChange = (e) => {
        if (e.target.checked) {
            setSortingType(e.target.value);
        }
    };

    const definePhotosSortStrategy = () => {
        switch (sortingType) {
            case NAME_SORTING_KEY:
                return (a, b) => {
                    const nameA = typeof a === 'object' && (a.fileName || '');
                    const nameB = typeof b === 'object' && (b.fileName || '');

                    return nameA.localeCompare(nameB);
                };
            case SIZE_SORTING_KEY:
                return (a, b) => {
                    const sizeA = typeof a === 'object' && (a.size || 0);
                    const sizeB = typeof b === 'object' && (b.size || 0);

                    return sizeA - sizeB;
                };
            case LAST_MODIFIED_SORTING_KEY:
                return (a, b) => {
                    const dateA = typeof a === 'object' && (a.lastModified || 0);
                    const dateB = typeof b === 'object' && (b.lastModified || 0);
                    return new Date(dateB) - new Date(dateA);
                };
            default:
                break;
        }
    };

    if (loading) {
        return <LoadingIndicator />;
    }

    if (error) {
        return (
            <div className={styles.errorMessage}>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className={styles.grid}>
            <div className={styles.actions}>
                <div className={styles.actionsLeft}>
                    <label htmlFor="uploadPhoto" className={styles.uploadButton} title="Upload">
                        <FontAwesomeIcon icon={faFileImport} />
                        <input type="file" id="uploadPhoto" />
                    </label>
                    <button type="button" title="Add Folder" className={styles.actionButton}>
                        <FontAwesomeIcon icon={faFolderPlus} />
                    </button>
                    <button type="button" title="Import file" className={styles.actionButton}>
                        <FontAwesomeIcon icon={faFileUpload} />
                    </button>
                    <button type="button" title="Remove" className={styles.actionButton}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
                <div className={styles.actionsRight}>
                    <SortingTabs onSortingChange={handleSortChange} value={sortingType} />
                </div>
            </div>
            <div className={styles.photosWrapper}>
                {photos.sort(definePhotosSortStrategy()).map((image, index) => (
                    <div key={`image-${index + 1}`} className={styles.photo}>
                        <div className={styles.photoPreview}>
                            <div className={styles.photoPreviewImage}>
                                <img src={image.url} alt={image.fileName} lazy="true" />
                            </div>
                        </div>
                        <div className={styles.photoMetadata}>
                            <span className={styles.photoMetadataName}>{image.fileName}</span>
                            <span>{formatBytes(image.size)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotosGrid;
