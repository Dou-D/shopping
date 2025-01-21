// 个人简介
export interface Request {
    gender: string;
    introduction: string;
    nickname: string;
    sign: string;
}

export interface Response {
    data: null;
    message: string;
    status: number;
}