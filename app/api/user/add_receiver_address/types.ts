// 添加收获地址
export interface Request {
    detailed_address: string;
    label: string;
    phone: string;
    receiver: string;
}

export interface Response {
    data: null;
    message: string;
    status: number;
}
