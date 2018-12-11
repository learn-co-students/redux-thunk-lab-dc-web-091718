export default function catsReducer (state = {loading: false, pictures: []}, action) {

    switch (action.type) {
        case "LOADING_CATS":
            return true;
        case "FETCH_CATS":
            return {loading: false, pictures: action.payload};
        default:
            return state;
    }
}