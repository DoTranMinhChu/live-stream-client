import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5687',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
    }
});

const getListChannels = async () => {
    const result = await axiosInstance.get('/api/v1/live-stream-channel');
    return result;
}

const getItem = async (_id: string) => {
    console.log(`/api/v1/live-stream-channel/${_id}`)
    const result = await axiosInstance.get(`/api/v1/live-stream-channel/${_id}`);
    return result;
}

export {
    getListChannels,
    getItem
}