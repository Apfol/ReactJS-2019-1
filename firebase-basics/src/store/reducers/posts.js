import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    posts: [],
    loadingPosts: false,
    isFechPostError: false,
}

const savePost = (state, action) => {
    const updatedPosts = [...state.posts];

    updatedPosts.push(action.payload.post);

    return updateObject(state, { posts: updatedPosts });
}

const fetchPosts = (state, action) => {
    return updateObject(state, { posts: action.payload.posts })
}

const startLoading = (state, action) => {
    return updateObject(state, { loadingPosts: true });
}

const endLoading = (state, action) => {
    return updateObject(state, { loadingPosts: false });
}

const startFetchPostError = state => {
    return updateObject(state, { isFechPostError: true });
}

const endFetchPostError = state => {
    return updateObject(state, { isFechPostError: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_POST: return savePost(state, action);
        case actionTypes.FETCH_POSTS: return fetchPosts(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        case actionTypes.START_FETCHPOST_ERROR: return startFetchPostError(state, action);
        case actionTypes.END_FETCHPOST_ERROR: return endFetchPostError(state, action);
        default: return state;
    }
}

export default reducer;