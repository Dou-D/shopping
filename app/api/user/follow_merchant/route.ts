// 关注店铺
import { cookies } from "next/headers";
import { Request, Response } from './types'
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
    const cloneBody: Request = await req.json();
    const cookieStore = cookies();

    const res = await fetch('/api/user/follow_merchant', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${cookieStore.get('token')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cloneBody),
    })
    const result: Response = await res.json();
    return NextResponse.json(result);
}