import { axiosRequest } from "./api";

const API_KEY = 'AIzaSyCdGd1z98FSKNzgnlxGmjr70HWeN-EuYcg';

const getBooksBySearch = async (search, page = 0) => {
    try {
        //removing 10 from (page*10) to calculate the startIndex
        const response = await axiosRequest.get(`?q=${search}&orderBy=relevance&key=${API_KEY}&startIndex=${page - 10}`)
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
}

const getBooksByAuthor = async (author, page = 0) => {
    debugger
    try {
        const response = await axiosRequest.get(`?q=${author}+inauthor&key=${API_KEY}&startIndex=${page}`)
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

export { getBooksBySearch, getBooksByAuthor, getBooksBySubject };
