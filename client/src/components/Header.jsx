import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { BookmarkContext } from '../context/BookmarkProvider';
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';

export default function Header() {

    const bookmarkList = useContext(BookmarkContext);

    return (
        <>
            <div className='flex bg-[#D4B588] relative z-10 w-full flex-col md:flex-row h-32 md:h-24 border-b-[3px] shadow-xl justify-evenly md:justify-between items-center border-yellow-600 '>
                <div className='flex w-full justify-around md:w-1/3 md:justify-start '>
                    <a href='/' className='flex items-center drop-shadow-lg shadow-black font-bold gap-2 md:pl-12 hover:underline hover:underline-offset-2'>
                        <HomeIcon sx={{ fontSize: 40 }} />
                        <div>Home</div>
                    </a>
                    <div className='flex items-center md:w-1/3 justify-end md:hidden '>
                        <a href='/bookmarks' className='flex items-center gap-2 hover:underline hover:underline-offset-2'>
                            <div>Bookmarks</div>
                            <Badge badgeContent={bookmarkList?.length || 0} color="primary">
                                <BookmarksIcon sx={{ fontSize: 40 }} />
                            </Badge>
                        </a>
                    </div>
                </div>
                {
                    window.location.pathname === '/'
                        ?
                        <div className='font-extrabold text-2xl'>Books & Books</div>
                        :
                        <form className='flex w-full md:w-1/2 justify-center px-4' action="/search" method="GET">
                            <TextField
                                id="standard-search"
                                label="Search a book or an author"
                                type="search"
                                variant="standard"
                                name='book'
                                fullWidth
                                autoComplete='off'
                            />
                            <button type='submit' className='border-b-4 p-2 rounded-md w-28 self-end transition-all bg-slate-300 border-slate-400 hover:shadow-lg hover:bg-slate-400 hover:border-slate-600'>
                                Search!
                            </button >
                        </form>
                }
                <div className='hidden md:flex items-center w-1/2 md:w-1/3 justify-end pr-12 '>
                    <a href='/bookmarks' className='flex items-center gap-2 drop-shadow-lg shadow-black font-bold hover:underline hover:underline-offset-2'>
                        <div>Bookmarks</div>
                        <Badge badgeContent={bookmarkList?.length || 0} color='secondary'>
                            <BookmarksIcon sx={{ fontSize: 40 }} />
                        </Badge>
                    </a>
                </div>
            </div>
        </>)
}
