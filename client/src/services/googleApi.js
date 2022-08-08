import { axiosRequest } from "./api";

const API_KEY = 'AIzaSyD7T0qT0mxxB_9wJ6YxRouqqNB01Sv1gMk';

const getBooksByTitle = async (title) => {
    try {
        const response = await axiosRequest.get(`?q=${title}+intitle&key=${API_KEY}`)
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
}

const getBooksByAuthor = async (author) => {
    try {
        const response = await axiosRequest.get(`?q=${author}+inauthor&key=${API_KEY}`)
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
}

const getBooksBySubject = async (subject) => {
    try {
        const response = await axiosRequest.get(`?q=${subject}+subject&key=${API_KEY}`)
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
}

export { getBooksByTitle, getBooksByAuthor, getBooksBySubject };
