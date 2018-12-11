export const fetchCats = () => {
    return (dispatch) => {
        dispatch(loadingCats());
        return fetch('http://localhost:4000/db')
        .then(response => response.json())
        .then(cats => dispatch(fetchedCats(cats.images)))
    }
};

function loadingCats() {
    return {type: "LOADING_CATS"}
}

function fetchedCats(pictures) {
    console.log(pictures);
    
    return {type: "FETCH_CATS", payload: pictures}
}