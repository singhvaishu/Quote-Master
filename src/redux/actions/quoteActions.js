
import axios from 'axios';

export const setQuote = (quote) => ({
    type: 'SET_QUOTE',
    payload: quote,
});

export const addBookmark = (quote) => ({
    type: 'ADD_BOOKMARK',
    payload: quote,
});

export const removeBookmark = (quoteId) => ({
    type: 'REMOVE_BOOKMARK',
    payload: quoteId,
});

export const saveBookmarksToLocalStorage = (bookmarks) => ({
    type: 'SAVE_BOOKMARKS_TO_LOCAL_STORAGE',
    payload: bookmarks,
});

export const fetchRandomQuote = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        dispatch(setQuote(response.data));
    } catch (error) {
        // Handle errors 
    }
};

export const fetchTags = () => async (dispatch) => {
    try {
        const response = await fetch('/tags');
        const data = await response.json();

        dispatch({ type: 'FETCH_TAGS_SUCCESS', payload: data }); // Update Redux state with fetched tags
    } catch (error) {
        dispatch({ type: 'FETCH_TAGS_FAILURE', payload: error.message });
    }
};

export const fetchQuoteByTag = (tag) => async (dispatch) => {
    try {
        const response = await fetch(`/random?tag=${tag}`); //  this endpoint supports tagging
        const data = await response.json();

        dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: data }); // Update Redux state with fetched quote
    } catch (error) {
        dispatch({ type: 'FETCH_QUOTE_FAILURE', payload: error.message });
    }
};
