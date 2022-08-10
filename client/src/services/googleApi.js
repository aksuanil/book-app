import { axiosRequest } from "./api";

const API_KEY = 'AIzaSyCdGd1z98FSKNzgnlxGmjr70HWeN-EuYcg';

const getBooksByTitle = async (title) => {
    try {
        const response = await axiosRequest.get(`?q=${title}+intitle&orderBy=relevance&key=${API_KEY}`)
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
