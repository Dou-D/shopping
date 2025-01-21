// 注册
// 请求
export interface Request {
  email: string;
  password: string;
  verification_code: string;
}

// 响应
export interface Response {
    data: Data;
    message: string;
    status: number;
}

export interface Data{
    access_token: string;
    expiry: number;
    refresh_token: string;
    token_type: string;
}
