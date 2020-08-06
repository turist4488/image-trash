export const NAME_SORTING_KEY = 'name';
export const SIZE_SORTING_KEY = 'size';
export const LAST_MODIFIED_SORTING_KEY = 'lastModified';

export const PHOTOS_SORTING_TYPES = [NAME_SORTING_KEY, SIZE_SORTING_KEY, LAST_MODIFIED_SORTING_KEY];

export const INITIAL_PHOTOS_SORTING = LAST_MODIFIED_SORTING_KEY;

export const PHOTOS_SORTING_INPUTS = [
    {
        key: NAME_SORTING_KEY,
        label: 'Name'
    },
    {
        key: SIZE_SORTING_KEY,
        label: 'Size'
    },
    {
        key: LAST_MODIFIED_SORTING_KEY,
        label: 'Last modified'
    }
];
