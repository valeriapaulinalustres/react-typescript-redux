// Structure of the user groups
export interface Group {
    id: number;
    name: string;
}

// Structure of the users within clients
export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    profile_image: string | null;
    groups: Group[];
    is_active: boolean;
}

// Structure of the clients
export interface Client {
    id: number;
    name: string;
    users: User[];
}

