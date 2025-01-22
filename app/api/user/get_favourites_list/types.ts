// 获取收藏列表
export interface Request {
    category?: string;
    req?: string;
    size?: string;
}

export interface Response {
    data: Data;
    message: string;
    status: number;
}

export interface Data {
    list: List[];
    total: number;
}

export interface List {
    category?: string;
    CreatedAt?: string;
    DeletedAt?: null;
    ID?: number;
    target_id?: string;
    UpdatedAt?: string;
    user_id?: string;
}
