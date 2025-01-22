import { NextRequest, NextResponse } from "next/server";
import { Request, Response } from './types'
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
    const cloneBody: Request = await req.json();
    const cookieStore = cookies();

    const res = await fetch('/api/user/cancel_follow', {
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