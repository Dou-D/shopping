// 取关店铺

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
    account?: string;
    avatar?: string;
    created_at?: string;
    email?: string;
    gender?: string;
    ID?: string;
    introduction?: string;
    nickname?: string;
    password?: string;
    sign?: string;
    updated_at?: string;
}
