import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  email: string;
  password: string;
}

interface LoginResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  profile_image: null;
  groups: [
    {
      id: number;
      name: string;
    }
  ];
  is_active: boolean;
  token: string;

  // Otros posibles campos de la respuesta
}

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://admindev.inceptia.ai" }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, User>({
      query: (user) => ({
        url: "/api/v1/login/",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
