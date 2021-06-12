export interface UserDto {
        fullName: string;
        username: string;
        email: string;
        isLogin: boolean;
        courses: boolean[];
}

export interface LoginDto {
        username: string;
        password: string;
}

export interface RegisterDto {
        fullname: string;
        email: string;
        username: string;
        password: string;
        confirmPassword: string;
}
