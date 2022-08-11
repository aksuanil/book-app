import React, { useState, useContext, useEffect } from 'react'
import { shortenDescription } from '../helpers/booksHelper';
import Typography from '@mui/material/Typography';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { addBookmarkToDb, deleteBookmarkFromDb } from '../services/serverApi.js'
import { BookmarkContext, BookmarkTriggerContext } from '../context/BookmarkProvider';

export default function BookCard(props) {

    const bookmarkList = useContext(BookmarkContext);
    const setContextTrigger = useContext(BookmarkTriggerContext);

    const [isBookmarked, setIsBookmarked] = useState(false);

    const { title, authors, publishedDate, imageLinks, description } = props.bookData;
    const { id } = props;

    useEffect(() => {
        if (bookmarkList && bookmarkList.find(bookmark => bookmark.book_id === id)) {
            setIsBookmarked(true);
        } else {
            setIsBookmarked(false);
        }
    }, [bookmarkList]);

    const handleBookmarkClick = () => {
        if (isBookmarked) {
            deleteBookmarkFromDb(id).then(res => {
                setIsBookmarked(false);
                //to trigger the update of the bookmark list in the context
                setContextTrigger(Math.random());
            }).catch(err => {
                console.log(err);
            })
        } else {
            addBookmarkToDb(id, imageLinks.thumbnail, title, authors[0], publishedDate).then(res => {
                setIsBookmarked(true);
                //to trigger the update of the bookmark list in the context
                setContextTrigger(Math.random());
            }).catch(err => {
                console.log(err);
            })
        }
    }
    return (
        <>
            <div className='flex bg-[#dad3c5] border-2 border-[#ccb379] shadow-xl h-64 w-auto rounded-lg relative'>
                {isBookmarked
                    ?
                    <button onClick={() => handleBookmarkClick()} >
                        <BookmarkAddedIcon color="#0c1933" sx={{
                            filter: 'drop-shadow(0px 0px 8px )',
                            position: 'absolute',
                            top: '-20px',
                            right: '3px',
                            zIndex: 10,
                            fontSize: 50,
                            color: "#162e5e",
                            '&:hover': {
                                color: '#284c94',
                            },
                        }} />
                    </button>
                    :
                    <button onClick={() => handleBookmarkClick()} >
                        <BookmarkAddIcon sx={{
                            filter: 'drop-shadow(0px 0px 8px )',
                            position: 'absolute',
                            top: '-20px',
                            right: '3px',
                            Index: 10,
                            fontSize: 50,
                            color: '#1e5c17',
                            '&:hover': {
                                color: '#11330d',
                            },
                        }} />
                    </button>
                }
                <img className='max-w-[170px] rounded-l-md' src={imageLinks?.thumbnail} alt={title} />
                <div className='flex flex-col gap-2 p-4'>
                    <Typography
                        variant="subtitle2"
                        className="inline"
                        color="textPrimary"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="overline"
                        className="inline"
                        color="textPrimary"
                    >
                        {authors ? authors[0] : 'No author info'}
                    </Typography>
                    <Typography
                        variant="caption"
                        className="inline"
                        color="textPrimary"
                        sx={{
                            marginTop: 'auto'
                        }}
                    >
                        {shortenDescription(description)}
                    </Typography>
                </div>
            </div>
        </>
    );
}
