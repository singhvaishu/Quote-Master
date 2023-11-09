
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookmark, saveBookmarksToLocalStorage } from '../redux/actions/quoteActions';

import './Bookmarks.css';

function BookmarksPage() {
    const dispatch = useDispatch();
    const bookmarks = useSelector((state) => state.quote.bookmarks);

    const handleRemoveBookmark = (quoteId) => {
        dispatch(removeBookmark(quoteId));
    };

    useEffect(() => {
        const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        if (savedBookmarks) {
            dispatch(saveBookmarksToLocalStorage(savedBookmarks));
        }
    }, [dispatch]);
    return (
        <div className="bookmarks-container">

            {bookmarks.map((bookmark) => (
                <div key={bookmark.id} className="bookmark-item">
                    <div className="bookmark-content">{bookmark.quoteDetails.content}</div>
                    <div className="bookmark-author">-{bookmark.quoteDetails.author}</div>
                    <button
                        className="remove-button"
                        onClick={() => handleRemoveBookmark(bookmark.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}

export default BookmarksPage;
