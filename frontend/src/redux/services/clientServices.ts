import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";


// Structure of the user groups
interface Group {
  id: number;
  name: string;
}

// Structure of the users within clients
interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string | null;
  groups: Group[];
  is_active: boolean;
}

// Structure of the clients
interface Client {
  id: number;
  name: string;
  users: User[];
}

// The response is an array of clients
type GetClientsResponse = Client[];

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://admindev.inceptia.ai", 
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userReducer.value.token; 
      if (token) {
        headers.set("authorization", `JWT ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getClients: builder.query<GetClientsResponse, void>({
      query: () => '/api/v1/clients/',
  }),
  }),
});

export const {useGetClientsQuery, } = clientApi;
