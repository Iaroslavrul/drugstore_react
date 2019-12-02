import axios from 'axios';

export const getList = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => response)
        .catch(error => error)
};

export const createListItem = data => {
    return axios.post('https://jsonplaceholder.typicode.com/users', data)
        .then(response => response)
        .catch(error => error)
};

export const updateListItem = data => {
    return axios.put(`https://jsonplaceholder.typicode.com/users/${data.id}`, data)
        .then(response => response)
        .catch(error => error)
};

export const removeListItem = data => {
    return axios.delete(`https://jsonplaceholder.typicode.com/users/${data.id}`)
        .then(response => response)
        .catch(error => error)
};
