import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store"; // Asegúrate de que esto apunte al archivo donde defines el RootState

// Define the structure of the client within cases
interface Client {
  id: number;
  name: string;
}

// Define the structure of the case result
interface CaseResult {
  result_id: number;
  name: string;
  is_final: boolean;
  contacted: boolean;
}

// Define the structure of the responses within case log
interface Response {
  text: string;
  time: number;
  confidence: number;
}

// Define the structure of the transcription within case log
interface Transcription {
  text: string;
  time: number;
  confidence: number;
}

// Define the structure of the case log
interface CaseLog {
  responses: Response[];
  result_id: number;
  commitment: string;
  got_promise: boolean;
  transcription: Transcription[];
  final_sip_code: number;
}

// Define the structure of the extra metadata
interface ExtraMetadata {
  dni: string;
  grupo: string;
  orden: string;
}

// Define the structure of a single case
interface InboundCase {
  id: number;
  client: Client;
  case_uuid: string;
  phone: number;
  first_name: string;
  last_name: string;
  code: string | null;
  case_result: CaseResult;
  case_duration: string;
  case_log: CaseLog;
  extra_metadata: ExtraMetadata;
  recording: string;
  is_complete: boolean;
  status: string;
  last_updated: string;
  is_active: boolean;
}

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
