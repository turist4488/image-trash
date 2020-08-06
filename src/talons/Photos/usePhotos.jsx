import { useEffect, useState } from 'react';

/**
 * Returns photos necessary to render a PhotosGrid component.
 *
 * @param {object} props.url - url to fetch photos
 * @return {{ photos: array, error: object, loading: boolean }}
 */

export const usePhotos = (props) => {
    const { url } = props;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchPhotosAsync = (url) => {
        setLoading(true);

        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((myJson) => {
                    if (typeof myJson === 'object' && myJson.images) {
                        setData(myJson.images);
                        setLoading(false);
                    } else {
                        throw new Error('Photos not found');
                    }
                })
                .catch((error) => {
                    setLoading(false);
                    setError(error.message);
                });
        }, 2000);
    };

    useEffect(() => {
        fetchPhotosAsync(url);
    }, [url]);

    return {
        photos: (data && data) || [],
        error,
        loading
    };
};
