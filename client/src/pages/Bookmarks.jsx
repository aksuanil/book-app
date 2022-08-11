import React, { useState, useContext } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DeleteIcon from '../assets/icons/delete.svg';
import { deleteBookmarkFromDb } from '../services/serverApi.js'

import { BookmarkContext, BookmarkTriggerContext } from '../context/BookmarkProvider';


export default function Bookmarks() {

  const bookmarkList = useContext(BookmarkContext);
  const setContextTrigger = useContext(BookmarkTriggerContext);
  const [page, setPage] = useState(1);

  const handleDeleteClick = (id) => {
    deleteBookmarkFromDb(id).then(res => {
      setContextTrigger(Math.random());
    }).catch(err => {
      console.log(err);
    })
  }

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <List sx={{ marginX: { xs: 4, md: 20, lg: 40, xl: 50 }, paddingY: 6 }} >
        {bookmarkList === null || bookmarkList.length === 0
          ?
          <Typography variant='h5' sx={{ textAlign: 'center' }}>
            You have no bookmarks.
          </Typography>
          :
          bookmarkList.slice((page * 5) - 5, page * 5).map((bookmark, index) => (
            <div className='flex mb-8 '>
              <ListItem
                key={index}
                alignItems="flex-start"
                sx={{
                  padding: { xs: 1, sm: 1, md: 2 },
                  borderRadius: '20px 0px 0px 20px',
                  bgcolor: 'white',
                  boxShadow: '0px 4px 10px black;',
                  border: 1,
                  flex: 1,
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 1, sm: 2 }
                }}>
                <img className='rounded-md w-36 self-center' src={bookmark.thumbnail} alt='thumbnail' />
                <ListItemText
                  primary={bookmark.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className="inline"
                        color="textPrimary"
                      >
                        {bookmark.author}
                      </Typography>
                      {' — '}
                      <Typography
                        component="span"
                        variant="body2"
                        className="inline"
                        color="textPrimary"
                      >
                        {bookmark.publishedDate}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <button className='bg-red-400 hover:bg-red-600 border-red-600 hover:border-red-800 border-b-4 transition-all h-16 text-lg font-semibold shadow-lg hover:shadow-2xl hover:shadow-black p-2 rounded-r-md'
                onClick={() => handleDeleteClick(bookmark.book_id)}>
                <img src={DeleteIcon} alt='delete' className='w-10 h-8' />
              </button>
            </div>
          ))}
      </List>
      <Stack spacing={2} padding={4} sx={{ alignItems: 'end' }}>
        <Pagination count={Math.ceil(bookmarkList.length / 5)} size='large' variant="outlined" shape="rounded" page={page} onChange={handlePageChange} />
      </Stack>
    </>
  );
}
