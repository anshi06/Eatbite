import axios from 'axios';

export const API_URL = "https://eatbite-o1swj7xv6-anshika-upadhyays-projects.vercel.app/";


export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});


