import React, { useEffect, useState } from 'react'
import { getBooksByTitle, getBooksBySubject, getBooksByAuthor } from '../services/googleApi'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BookCard from '../components/BookCard';
import Spinner from '../components/Spinner';
import { useSearchParams } from "react-router-dom";
import PaginationRounded from '../components/Pagination';

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const book = searchParams.get("book")
    const author = searchParams.get("author")

    const [gridItems, setGridItems] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (book) {
                const result = await getBooksByTitle(book);
                setGridItems(result);
            } else if (author) {
                const result = await getBooksByAuthor(author);
                setGridItems(result);
            }
        }
        fetchData()
            .catch(console.error);
    }, [searchParams])
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ccc',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            {gridItems ?
                <>
                    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ paddingX: 10}}>
                        {Array.from(Array(9)).map((_, index) => (
                            <Grid item xs={12} sm={4} md={4} key={index}>
                                <BookCard id={gridItems.items[index].id} bookData={gridItems.items[index].volumeInfo} isBookmarked={true} />
                            </Grid>
                        ))}
                    </Grid>
                    <PaginationRounded />
                </>
                :
                <Spinner />
            }
        </>
    )
}
