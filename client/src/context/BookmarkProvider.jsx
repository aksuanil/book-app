import React, { createContext, useEffect, useState } from "react";
import { getAllBookmarksFromDb } from "../services/serverApi";

const BookmarkContext = createContext(undefined);
const BookmarkTriggerContext = createContext(undefined);

function BookmarkProvider({ children }) {
    const [bookmarkList, setBookmarkList] = useState([{}]);
    //Using a trigger state to force re-rendering the context. This is used to update the context state when a new bookmark is added or deleted.
    const [contextTrigger, setContextTrigger] = useState(0);

    useEffect(() => {
        getAllBookmarksFromDb().then(res => {
            setBookmarkList(res);
        }).catch(err => {
            console.log(err);
        })
    }, [contextTrigger]);

    return (
        <BookmarkContext.Provider value={bookmarkList}>
            <BookmarkTriggerContext.Provider value={setContextTrigger}>
                {children}
            </BookmarkTriggerContext.Provider>
        </BookmarkContext.Provider>
    );
}

export { BookmarkProvider, BookmarkContext, BookmarkTriggerContext };