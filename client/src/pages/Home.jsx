import React, { useEffect, useState } from 'react'
import { getBooksByTitle, getBooksBySubject, getBooksByAuthor } from '../services/googleApi'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BookCard from '../components/BookCard';
import ReadingDoodle from '../assets/images/ReadingDoodle.png'
import SitReadingDoodle from '../assets/images/SitReadingDoodle.png'
import { InputAdornment, MenuItem, TextField } from '@mui/material'

export default function Home() {
    const [gridItems, setGridItems] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getBooksByTitle(searchValue);
            setGridItems(result);
        }
        fetchData()
            .catch(console.error);
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ccc',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between md:mt-16 gap-4 md:gap-0'>
                <img className='w-80 md:w-96 mx-auto' src={ReadingDoodle}></img>
                <form className='px-8 md:px-0 my-auto' action="/search" method="GET">
                    <TextField
                        fullWidth
                        onChange={handleChange}
                        value={searchValue}
                        id="standard-search"
                        label="Search a book"
                        type="search"
                        variant="standard"
                        name='book'
                    />
                    <TextField
                        fullWidth
                        id="standard-search"
                        label="Search an author"
                        type="search"
                        variant="standard"
                        name="author"
                    />
                    <div className='flex justify-center mt-8'>
                        <button type='submit' className='border-2 p-2'>
                            Search!
                        </button >
                    </div>
                </form>
                <img className='w-80 md:w-96 mx-auto' src={SitReadingDoodle}></img>
            </div>
        </div>

    )
}