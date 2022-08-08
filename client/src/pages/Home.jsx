import React, { useEffect, useState } from 'react'
import { getBooksByTitle, getBooksBySubject, getBooksByAuthor } from '../services/googleApi'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LoadingButton from '@mui/lab/LoadingButton';
import BookCard from '../components/BookCard';

export default function Home() {
    const [gridItems, setGridItems] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getBooksByTitle(searchValue);
            console.log(result.items[0]?.volumeInfo.title)
            setGridItems(result);
        }
        fetchData()
            .catch(console.error);
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }
    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const result = await getBooksByTitle(searchValue);
        setIsLoading(false);
        setGridItems(result);
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ccc',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='flex gap-6 justify-center'>
                    <TextField
                        onChange={handleChange}
                        value={searchValue}
                        id="standard-search"
                        label="Search a book"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        id="standard-search"
                        label="Search an author"
                        type="search"
                        variant="standard"
                    />
                </div>
                <div className='flex justify-center'>
                    <LoadingButton type='submit' loading={isLoading} loadingIndicator="Searching..." variant="outlined">
                        Search!
                    </LoadingButton>
                </div>
            </form>
            {gridItems &&
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={12} sm={4} md={4} key={index}>
                            <BookCard bookData= {gridItems.items[index].volumeInfo} isBookmarked={isBookmarked} />
                            {/* <Item>{gridItems.items[index].volumeInfo.title}</Item>
                            <Item>{gridItems.items[index].volumeInfo.authors}</Item>
                            <Item>{gridItems.items[index].volumeInfo.publishedDate}</Item>
                            <Item><img src={gridItems.items[index].volumeInfo.imageLinks.thumbnail} alt='thumbnail' /></Item>
                            <Item>{gridItems.items[index].volumeInfo.language}</Item> */}
                        </Grid>
                    ))}
                </Grid>
            }
        </>
    )
}