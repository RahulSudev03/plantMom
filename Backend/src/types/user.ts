export interface User {
    id: number;
    email: string;
    username: string;
    created_at: Date;
}

export interface UserSignupData {
    email: string;
    password: string;
    username: string;
}

export interface UserLoginData {
    email: string;
    password: string;
} 