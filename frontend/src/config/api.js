import axios from 'axios';
export const API_URL = "https://eatbite-anshika-upadhyays-projects.vercel.app";


export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});


