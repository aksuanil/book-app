import React, { useEffect, useState } from 'react'
import { getBooksBySearch } from '../services/googleApi'
import Grid from '@mui/material/Grid';
import BookCard from '../components/BookCard';
import Spinner from '../components/Spinner';
import { useSearchParams } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Search() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("book")
    const numberOfShownResults = 9;
    const [gridItems, setGridItems] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            if (search) {
                setGridItems(null);
                const result = await getBooksBySearch(search, page * 10);
                setGridItems(result);
            }
        }
        fetchData()
            .catch(console.error);
    }, [searchParams, page, search])

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            {gridItems ?
                <>
                    <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ paddingX: 8, justifyContent: 'center', paddingTop: 6 }}>
                        {Array.from(Array(numberOfShownResults)).map((_, index) => (
                            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                                <BookCard id={gridItems.items[index]?.id} bookData={gridItems.items[index]?.volumeInfo} />
                            </Grid>
                        ))}
                    </Grid>
                    <Stack spacing={2} padding={4} sx={{ alignItems: 'end' }}>
                        <Pagination count={Math.ceil(gridItems?.totalItems / numberOfShownResults)} size='large' variant="outlined" shape="rounded" page={page} onChange={handlePageChange} />
                    </Stack>
                </>
                :
                <Spinner />
            }
        </>
    )
}
