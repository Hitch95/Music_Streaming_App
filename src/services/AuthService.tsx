import axios from 'axios';
import { handleError } from '../helpers/ErrorHandler';
import { UserProfileToken } from '../models/User';

const api = 'http://localhost:3000';

export const loginAPI = async (email: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + '/auth/login', {
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(api + '/auth/register', {
      name: name,
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
