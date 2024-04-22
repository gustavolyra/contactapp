import axios from "axios";

const API_URL = 'http://localhost:8080/contact';

export async function saveContact(contact) {
    return await axios.post(API_URL, contact);
}

export async function getContacts(page = 0, size = 10) {
  return await axios.get(`${API_URL}/page?page=${page}&size=${size}`);
}

export async function getContact(id) {
    return await axios.get(`${API_URL}/${id}`);
}

export async function udpateContact(contact, id) {
    return await axios.post(`${API_URL}/${id}`, contact);
}

export async function deleteContact(id) {
    return await axios.delete(`${API_URL}/${id}`);
}