import axios from "axios";

const API_URL = 'https://glyra-contact.18q1dqiain9h2.us-east-1.cs.amazonlightsail.com/users';

export async function saveUser(contact) {
    return await axios.post(API_URL+'/register', contact);
}

//TODO
export async function getUsers(page = 0, size = 10) {
  return await axios.get(`${API_URL}/page?page=${page}&size=${size}`);
}

export async function getUser(id) {
    return await axios.get(`${API_URL}/${id}`);
}

export async function udpateUser(user, id) {
    return await axios.post(`${API_URL}/${id}`, user);
}

export async function deleteUser(id) {
    return await axios.delete(`${API_URL}/${id}`);
}