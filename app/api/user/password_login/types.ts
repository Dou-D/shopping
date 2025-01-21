// 通过密码登录接口

export interface Request {
    email: string;
    password: string;
}

export interface Response {
    data: Data;
    message: string;
    status: number;
}

export interface Data {
    access_token: string;
    expiry: number;
    refresh_token: string;
    token_type: string;
}
