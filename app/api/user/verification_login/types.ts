// 通过验证码登录

// 响应
export interface Data {
  access_token: string;
  expiry: number;
  refresh_token: string;
  token_type: string;
}

export interface Response {
  data: Data;
  message: string;
  status: number;
}

// 请求
export interface Request {
  email: string;
  verification_code: string;
}
