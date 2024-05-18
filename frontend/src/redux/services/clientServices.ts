import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { Client } from "../../utils/interfaces/clientInterface";


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
