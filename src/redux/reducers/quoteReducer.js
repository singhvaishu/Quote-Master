

const initialState = {
    quote: null,
    bookmarks: [],
};

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUOTE':
            return {
                ...state,
                quote: action.payload,
            };
        case 'ADD_BOOKMARK':
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload],
            };
        case 'REMOVE_BOOKMARK':
            return {
                ...state,
                bookmarks: state.bookmarks.filter(quote => quote.id !== action.payload),
            };

        case 'SAVE_BOOKMARKS_TO_LOCAL_STORAGE':
            localStorage.setItem('bookmarks', JSON.stringify(action.payload));
            return {
                ...state,
                bookmarks: action.payload,
            };

        case 'FETCH_TAGS_SUCCESS':
            return { ...state, tags: action.payload };
        case 'FETCH_QUOTE_SUCCESS':
            return { ...state, quote: action.payload };
        default:
            return state;
    }
};

export default quoteReducer;
