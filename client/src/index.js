import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import '../src/assets/css/output.css';
import Header from './components/Header';
import Bookmarks from './pages/Bookmarks';
import Search from './pages/Search';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookmarkProvider } from './context/BookmarkProvider';
import NoPage from './pages/NoPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookmarkProvider>
      <div className='h-full min-h-screen bg-[#EADABC] overflow-hidden'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </BookmarkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
