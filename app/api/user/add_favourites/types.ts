// 增加收藏
export interface Request {
    category: string;
    target_id: string;
}

export interface Response {
    data: null;
    message: string;
    status: number;
}
