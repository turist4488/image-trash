/**
 * Implemented just for basic project structure
 * */

const imagesInitialState = {
    loading: null
};

export default function (state = imagesInitialState, action) {
    switch (action.type) {
        case 'GET_IMAGES_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'GET_IMAGES_SUCCESS':
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
