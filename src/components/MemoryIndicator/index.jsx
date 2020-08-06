import React, { useMemo } from 'react';
import styles from './styles.module.scss';
import { usePhotos } from '../../talons/Photos/usePhotos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const MemoryIndicator = () => {
    const { photos, loading, error } = usePhotos({ url: 'database.json' });

    const calculating = useMemo(() => {
        if (loading || photos.length === 0) {
            return {};
        }

        const memoryAvailable = 104857600;

        const totalBytes = photos.reduce((res, curr) => {
            if (curr && 'size' in curr) {
                return res + curr.size;
            } else {
                return res;
            }
        }, 0);

        return {
            percent: Math.round((totalBytes / memoryAvailable) * 100),
            totalUsage: (totalBytes / 1024 / 1000).toFixed(2)
        };
    }, [photos, loading]);

    return (
        <div className={styles.indicator}>
            <div className={styles.indicatorTop}>
                <span className={styles.indicatorNumbers}>{calculating.totalUsage || 0} MB / 100 MB</span>
                <FontAwesomeIcon icon={faPlusSquare} className={styles.indicatorAddMemoryIcon} />
            </div>
            <div className={styles.indicatorContainer}>
                <div className={styles.indicatorFill} style={{ left: `${calculating?.percent - 100}%` }} />
            </div>
        </div>
    );
};

export default MemoryIndicator;
