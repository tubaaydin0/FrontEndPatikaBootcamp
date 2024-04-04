import axios from "axios";

const starWarsApi = axios.create({ baseURL: 'https://swapi.dev/api/' });

export const getAllStarShips = async () => {
    try {
        const res = await starWarsApi.get('starships/');
        return res.data;
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
};

export const filterStarShips = async (filter) => {
    try {
        const res = await starWarsApi.get(`starships/?search=${filter}`);
        return res.data;
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
};

export const getStarShipDetails = async (url) => {
    try {
        const res = await axios.create().get(url);
        return res.data;
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
};