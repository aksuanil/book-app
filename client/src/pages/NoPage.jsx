import React, { Component } from 'react'
import Typography from '@mui/material/Typography';

export default class NoPage extends Component {
  render() {
    return (
      <>
        <Typography variant='h5' sx={{ textAlign: 'center', paddingTop: 10 }}>
          All who wander are not lost
        </Typography>
        <Typography variant='h5' sx={{ textAlign: 'center'}}>
          but the Page is not Found.
        </Typography>
      </>
    )
  }
}
