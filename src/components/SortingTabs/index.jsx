import React from 'react';
import PropTypes from 'prop-types';
import { PHOTOS_SORTING_TYPES, PHOTOS_SORTING_INPUTS } from '../../constants/sorting';
import styles from './styles.module.scss';

const SortingTabs = (props) => {
    const { onSortingChange, value } = props;

    return (
        <React.Fragment>
            {PHOTOS_SORTING_INPUTS.map((sorting) => {
                const isChecked = value === sorting.key;
                const sortingId = `${sorting.key}Sorting`;

                return (
                    <label key={sorting.key} htmlFor={sortingId} className={isChecked ? styles.sortingTabActive : styles.sortingTab}>
                        {sorting.label}
                        <input
                            type="radio"
                            id={sortingId}
                            checked={isChecked}
                            name="sortingType"
                            onChange={onSortingChange}
                            value={sorting.key}
                        />
                    </label>
                );
            })}
        </React.Fragment>
    );
};

SortingTabs.propTypes = {
    onSortingChange: PropTypes.func.isRequired,
    value: PropTypes.oneOf(PHOTOS_SORTING_TYPES)
};

export default SortingTabs;
