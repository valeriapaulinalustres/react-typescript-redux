export interface Client {
    id: number;
    name: string;
  }
  
  export interface CaseResult {
    result_id: number;
    name: string;
    is_final: boolean;
    contacted: boolean;
  }
  
  export interface Response {
    text: string;
    time: number;
    confidence: number;
  }
  
  export interface Transcription {
    text: string;
    time: number;
    confidence: number;
  }
  
  export interface CaseLog {
    responses: Response[];
    result_id: number;
    commitment: string;
    got_promise: boolean;
    transcription: Transcription[];
    final_sip_code: number;
  }
  
  export interface ExtraMetadata {
    dni: string;
    grupo: string;
    orden: string;
  }
  
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