import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store"; 
import { InboundCase } from "../../utils/interfaces/inboundCaseInterfase";



// Define the structure of the API response
interface GetInboundCasesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: InboundCase[];
}

export const inboundCaseApi = createApi({
  reducerPath: "inboundCaseApi",
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
    getInboundCases: builder.query<GetInboundCasesResponse, { bot: number; local_updated__date__gte: string; local_updated__date__lte: string }>({
      query: ({ bot, local_updated__date__gte, local_updated__date__lte }) => ({
        url: `/api/v1/inbound-case/`,
        params: {
          bot,
          local_updated__date__gte,
          local_updated__date__lte
        }
      }),
    }),
  }),
});

export const { useGetInboundCasesQuery } = inboundCaseApi;
