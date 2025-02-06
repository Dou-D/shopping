/**
 * 登录方式
 */
export interface LoginFormProps {
    type: "message" | "password"
}

// 通过密码登录接口

export interface PasswordRequestType {
    email: string;
    password: string;
}

export interface PasswordResponseType {
    data: PasswordDataType;
    message: string;
    status: number;
}

export interface PasswordDataType {
    access_token: string;
    expiry: number;
    refresh_token: string;
    token_type: string;
}
