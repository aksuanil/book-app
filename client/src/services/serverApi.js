import { axiosRequest } from "./api";

const BASE_URL = 'http://localhost:8080/api/bookmarks/';

export const addBookmarkToDb = async (bookId, thumbnail, title, author, publishDate) => {
    try {
        const response = await axiosRequest.post(BASE_URL, { id: bookId, thumbnail: thumbnail, title: title, author: author, publishDate: publishDate });
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
}

export const deleteBookmarkFromDb = async (bookId) => {
    try {
        const response = await axiosRequest.delete(BASE_URL + bookId, { id: bookId });
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
}

export const getAllBookmarksFromDb = async () => {
    try {
        const response = await axiosRequest.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
}