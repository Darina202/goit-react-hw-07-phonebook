import axios from 'axios';

const contactInstance = axios.create({
  baseURL: 'https://65d38a55522627d501091c9b.mockapi.io/api/contacts',
});

export const requestFetchContacts = async () => {
  const { data } = await contactInstance.get('/');
  return data;
};

export const requestAddContacts = async body => {
  const { data } = await contactInstance.post('/', body);
  return data;
};

export const requestDeleteContacts = async id => {
  const { data } = await contactInstance.delete(`/${id}`);
  return data;
};
