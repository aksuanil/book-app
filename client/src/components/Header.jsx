import React, { useRef, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { getBooksByTitle, getBooksBySubject, getBooksByAuthor } from '../services/googleApi'
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { BookmarkContext, BookmarkDispatchContext } from '../context/BookmarkProvider';
import Badge from '@mui/material/Badge';

export default function Header() {
    const [searchValue, setSearchValue] = useState('');

    const bookmarkList = React.useContext(BookmarkContext);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }
    console.log(window.location.pathname)
    return (
        <>
            <nav>
                <div className='flex flex-col md:flex-row h-32 md:h-24 border-b-2 shadow-xl mb-8 justify-evenly md:justify-between items-center overflow-hidden '>
                    <div className='flex w-full justify-around md:w-1/3 md:justify-start '>
                        <a href='/' className='flex items-center gap-4 md:pl-12 hover:underline hover:underline-offset-2'>
                            <div>Home</div>
                        </a>
                        <div className='flex items-center md:w-1/3 justify-end md:hidden '>
                            <a href='/bookmarks' className='flex items-center gap-4 hover:underline hover:underline-offset-2'>
                                <div>Bookmarks</div>
                                <Badge badgeContent={bookmarkList?.length || 0} color="primary">
                                    <BookmarksIcon sx={{ fontSize: 40 }} />
                                </Badge>
                            </a>
                        </div>
                    </div>
                    {window.location.pathname === '/' ?
                        <div className='font-extrabold text-2xl'>Books & Books</div>
                        :
                        <form className='flex w-full md:w-1/2 justify-center px-4' action="/search" method="GET">
                            <TextField
                                onChange={handleChange}
                                value={searchValue}
                                id="standard-search"
                                label="Search a book"
                                type="search"
                                variant="standard"
                                name='book'
                            />
                            <TextField
                                id="standard-search"
                                label="Search an author"
                                type="search"
                                variant="standard"
                                name="author"
                            />
                            <button type='submit' loading={false} loadingIndicator="Searching..." variant="outlined">
                                Search!
                            </button >
                        </form>
                    }
                    <div className='hidden md:flex items-center w-1/2 md:w-1/3 justify-end pr-12 '>
                        <a href='/bookmarks' className='flex items-center gap-4 hover:bg-sky-400 hover:underline hover:underline-offset-2'>
                            <div>Bookmarks</div>
                            <Badge badgeContent={bookmarkList?.length || 0} color="primary">
                                <BookmarksIcon sx={{ fontSize: 40 }} />
                            </Badge>
                        </a>
                    </div>
                </div>
            </nav>
        </>)
}
