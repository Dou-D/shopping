// 修改密码
export interface Request {
    new_password:      string;
    verification_code: string;
}

export interface Response {
    data: null;
    message: string;
    status: number;
}
