import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { shortenDescription } from '../helpers/booksHelper';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

export default function BookCard(props) {
    const { title, authors, publishedDate, imageLinks, language, description } = props.bookData;
    const { isBookmarked } = props.isBookmarked;
    return (
        <>
            <div className='flex bg-white border-2 shadow-xl h-64 w-auto rounded-lg relative'>
                <button>
                    {BookmarkAddIcon === true
                        ? < BookmarkAddIcon color="gray" sx={{
                            position: 'absolute', top: '-15px', right: '5px', zIndex: 10, fontSize: 50,
                            '&:hover': {
                                color: 'gray',
                            },
                        }} />
                        : <BookmarkAddedIcon color="gray" sx={{
                            position: 'absolute', top: '-15px', right: '5px', zIndex: 10, fontSize: 50,
                            '&:hover': {
                                color: 'gray',
                            },
                        }} />
                    }
                </button>
                <img src={imageLinks.thumbnail} alt={title} />
                <div className='flex flex-col gap-6 p-4 '>
                    <div className='flex justify-center text-center font-bold'>
                        {title}
                    </div>
                    <div className=''>
                        {shortenDescription(description)}
                    </div>
                </div>
            </div>


            {/* <Card sx={{ width: 345, height: 300 }}>
                <CardActionArea sx={{ height: '100%' }}>

                    <Box sx={{ display: 'flex', alignItems: 'start', pl: 1, pb: 1 }}>
                        <CardMedia
                            component="img"
                            image={imageLinks?.thumbnail}
                            alt={title}
                            sx={
                                { maxWidth: '100px' }
                            }
                        />
                        <CardContent sx={{ alignItems: 'start', pl: 1, pb: 1, flexDirection: 'column', display: 'flex', justifyContent: 'start' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>

                    </Box>
                </CardActionArea>
            </Card > */}
        </>
    );
}
