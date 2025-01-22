// 更改收货地址
export interface Request {
    detailed_address: string;
    id: string;
    label: string;
    phone: string;
    receiver: string;
}

export interface Response {
    data: null;
    message: string;
    status: number;
}
