// Define the structure of the client within cases
export interface Client {
    id: number;
    name: string;
  }
  
  // Define the structure of the case result
  export interface CaseResult {
    result_id: number;
    name: string;
    is_final: boolean;
    contacted: boolean;
  }
  
  // Define the structure of the responses within case log
  export interface Response {
    text: string;
    time: number;
    confidence: number;
  }
  
  // Define the structure of the transcription within case log
  export interface Transcription {
    text: string;
    time: number;
    confidence: number;
  }
  
  // Define the structure of the case log
  export interface CaseLog {
    responses: Response[];
    result_id: number;
    commitment: string;
    got_promise: boolean;
    transcription: Transcription[];
    final_sip_code: number;
  }
  
  // Define the structure of the extra metadata
  export interface ExtraMetadata {
    dni: string;
    grupo: string;
    orden: string;
  }
  
  // Define the structure of a single case
  export interface InboundCase {
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