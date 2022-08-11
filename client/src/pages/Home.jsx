import React from 'react'
import { TextField } from '@mui/material'
import ReadingDoodle from '../assets/images/ReadingDoodle.png'
import SitReadingDoodle from '../assets/images/SitReadingDoodle.png'

export default function Home() {
    return (
        <div className='flex flex-col md:flex-row justify-between md:pt-16 gap-4 md:gap-0'>
            <img className='w-80 md:w-1/3 mx-auto' src={ReadingDoodle} alt='ReadingDoodle'></img>
            <form className='px-8 md:px-0 m-auto w-1/2 min-w-[260px] ' action="/search" method="GET">
                <TextField
                    fullWidth
                    color='warning'
                    id="standard-search"
                    label="Search a book or an author"
                    type="search"
                    variant="standard"
                    name='book'
                    autoComplete='off'
                    required
                />
                <div className='flex justify-center mt-8'>
                    <button type='submit' className='border-b-4 p-2 rounded-md w-28 self-end transition-all bg-slate-300 border-slate-400 hover:shadow-md hover:bg-slate-400 hover:border-slate-600'>
                        Search!
                    </button >
                </div>
            </form>
            <img className='w-80 md:w-1/3 mx-auto' src={SitReadingDoodle} alt='SitReadingDoodle'></img>
        </div>

    )
}