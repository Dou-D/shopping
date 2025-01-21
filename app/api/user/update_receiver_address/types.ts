// 获取所有收获地址
// req和size写死 seq = 1, size = 10
export interface Request {
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
    CreatedAt?: string;
    DeletedAt?: null;
    detailed_address?: string;
    ID?: number;
    label?: string;
    phone_number?: string;
    receiver_name?: string;
    UpdatedAt?: string;
    user_id?: string;
}
