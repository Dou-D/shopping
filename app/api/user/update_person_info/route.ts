import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Response, Request } from './types';
// 更改个人简介
export async function POST(req: NextRequest) {
    const cloneBody: Request = await req.json();
    const cookieStore = cookies();
    const res = await fetch('/api/user/update_personal_info', {
        headers: {
            'Authorization': `Bearer ${cookieStore.get('token')}`
        },
        body: JSON.stringify(cloneBody),
    })
    const result = await res.json() as Response;
    return NextResponse.json(result);
}