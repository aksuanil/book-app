import React, { useState, useContext, useEffect } from 'react'
import { shortenDescription } from '../helpers/booksHelper';
import Typography from '@mui/material/Typography';
import BookmarkAddIcon from '../assets/icons/bookmark-add.svg';
import BookmarkAddedIcon from '../assets/icons/bookmark-added.svg';
import { addBookmarkToDb, deleteBookmarkFromDb } from '../services/serverApi.js'
import { BookmarkContext, BookmarkTriggerContext } from '../context/BookmarkProvider';

export default function BookCard(props) {

    const bookmarkList = useContext(BookmarkContext);
    const setContextTrigger = useContext(BookmarkTriggerContext);

    const [isBookmarked, setIsBookmarked] = useState(false);

    const { title, authors, publishedDate, imageLinks, description } = props.bookData;
    const { id } = props;

    useEffect(() => {
        //to check if book is bookmarked when indexing the results
        if (bookmarkList && bookmarkList.find(bookmark => bookmark.book_id === id)) {
            setIsBookmarked(true);
        } else {
            setIsBookmarked(false);
        }
    }, [bookmarkList, id]);

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
            addBookmarkToDb(id, imageLinks?.thumbnail, title, (authors ? authors[0] : 'No author info'), publishedDate).then(res => {
                setIsBookmarked(true);
                //to trigger the update of the bookmark list in the context
                setContextTrigger(Math.random());
            }).catch(err => {
                console.log(err);
            })
        }
    }
    return (
        <div className='flex bg-[#dad3c5] border-2 border-[#ccb379] shadow-xl h-64 w-auto rounded-lg relative '>
            {isBookmarked
                ?
                <button onClick={() => handleBookmarkClick()} >
                    <img src={BookmarkAddedIcon} alt='bookmark' className='hover:bg-blue-500 w-14 h-14 p-1 absolute -top-[26px] right-2 z-10 bg-gradient-to-t from-transparent via-transparent to-blue-600 rounded-full transition-all' />
                </button>
                :
                <button onClick={() => handleBookmarkClick()} >
                    <img src={BookmarkAddIcon} alt='bookmark' className='hover:bg-green-500 rounded-full w-14 h-14 p-1 absolute -top-[26px] right-2 z-10 bg-gradient-to-t from-transparent via-transparent to-green-600 transition-all' />
                </button>
            }
            <img className='max-w-[160px] rounded-l-md' src={imageLinks?.thumbnail} alt={title} />
            <div className='flex flex-col gap-2 p-4'>
                <Typography
                    variant="h6"
                    className="inline"
                    color="textPrimary"
                >
                    {title}
                </Typography>
                <Typography
                    variant="overline"
                    className="inline"
                    color="textPrimary"
                    sx={{
                        lineHeight: 1.5,
                    }}
                >
                    {authors ? authors[0] : 'No author info'}
                </Typography>
                <Typography
                    variant="caption"
                    className="inline"
                    color="textPrimary"
                    sx={{
                        marginTop: 'auto',
                        overflow: 'hidden',
                    }}
                >
                    {shortenDescription(description)}
                </Typography>
            </div>
        </div>
    );
}


