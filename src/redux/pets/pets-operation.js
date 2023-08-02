import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://back-end-yourpet.onrender.com';

export const getPets = createAsyncThunk(
  'pets/fetchPets',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/pets`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getPets = createAsyncThunk(
//   'pets/fetchPets',
//   async (token, thunkAPI) => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const { data } = await axios.get(`/api/pets`, config);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
