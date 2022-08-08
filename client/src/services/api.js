import axios from "axios";

export const axiosRequest = axios.create({
  baseURL: `https://www.googleapis.com/books/v1/volumes`,
}); 

