
// import { Link } from 'react-router-dom';
import './Home.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomQuote, addBookmark, saveBookmarksToLocalStorage } from '../redux/actions/quoteActions';
import { BiBookmarkPlus } from "react-icons/bi";
import { fetchTags, fetchQuoteByTag } from '../redux/actions/quoteActions';

function Home() {
    const dispatch = useDispatch();
    const quote = useSelector((state) => state.quote.quote);
    const bookmarks = useSelector((state) => state.quote.bookmarks);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        dispatch(fetchRandomQuote());
        dispatch(fetchTags()); // Fetch tags when component mounts
    }, [dispatch]);

    const handleDropdownChange = (event) => {
        const selectedTag = event.target.value;
        setSelectedOption(selectedTag);
        if (selectedTag) {
            dispatch(fetchQuoteByTag(selectedTag)); // Fetch quote by selected tag
        } else {
            dispatch(fetchRandomQuote()); // If no tag selected, fetch random quote
        }
    };
    const handleNextQuote = () => {
        dispatch(fetchRandomQuote());
    };

    const handleBookmarkClick = () => {
        console.log('Bookmark clicked');

        if (quote) {
            const bookmarkDetails = {
                container: quote,
                quoteDetails: { content: quote.content, author: quote.author }
            };
            dispatch(addBookmark(bookmarkDetails));
            const updatedBookmarks = [...bookmarks, bookmarkDetails];
            dispatch(saveBookmarksToLocalStorage(updatedBookmarks));
        }

    };

    return (
        <div className="home-container">
            <header className="header">

                {/* <div className="home-button">
                    Home
                </div> */}
                {/* 
                <div className="bookmarks-button" onClick={handleBookmarksLinkClick}> */}
                {/* <Link to="/bookmarks" className="bookmarks-button" >
                    Bookmarks
                </Link> */}
                {/* <a href="/bookmarks" > Bookmarks </a> */}

            </header>

            <div className="rectangle1">
                <div className="inside">
                    {quote && (
                        <>
                            <div className="content">{quote.content}</div>
                            <div className="author">-{quote.author}</div>
                        </>
                    )}

                    <div className="icons">
                        <div className="bookmarks-icons" onClick={handleBookmarkClick}>
                            <BiBookmarkPlus />

                        </div>
                    </div>
                </div>
            </div>

            <div className="rectangle3">
                <div className="rightside">
                    {quote && quote.tags && (
                        <select className="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                            <option value=""></option>
                            {quote.tags.map((tag) => (
                                <option key={tag} value={tag}>
                                    {tag}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            </div>
            <div className="rectangle2" onClick={handleNextQuote}>Next Quote</div>


        </div>
    );
}

export default Home;
