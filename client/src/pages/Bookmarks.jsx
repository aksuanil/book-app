import React, { useState, useContext, useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';
import { addBookmarkToDb, deleteBookmarkFromDb } from '../services/serverApi.js'

import { BookmarkContext, BookmarkTriggerContext } from '../context/BookmarkProvider';


export default function Bookmarks() {

  const bookmarkList = React.useContext(BookmarkContext);
  const setContextTrigger = useContext(BookmarkTriggerContext);

  function handleDeleteClick(id) {
    deleteBookmarkFromDb(id).then(res => {
      setContextTrigger(Math.random());
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <List sx={{ marginX: { xs: 4, md: 20, lg: 40, xl: 50 } }} >
      {bookmarkList.map((bookmark, index) => (
        <div className='flex mb-8 '>
          <ListItem key={index} alignItems="flex-start" sx={{ padding: { xs: 1, sm: 1, md: 2 }, borderRadius: '20px 0px 0px 20px', bgcolor: 'white', boxShadow: '0px 4px 10px black;', border: 1 }}>
            <div className='w-40'>
              <img src={bookmark.thumbnail} />
            </div>
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
          <button className='bg-red-700 hover:bg-red-600 transition-all h-16 text-lg font-semibold hover:shadow-2xl hover:shadow-black p-2 rounded-r-md' onClick={() => handleDeleteClick(bookmark.book_id)}>Remove</button>
        </div>
      ))}
    </List>
  );
}
