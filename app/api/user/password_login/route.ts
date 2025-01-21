import { NextRequest, NextResponse } from "next/server";
import { Request, Response } from './types'
export async function POST(req: NextRequest) {
    const cloneBody: Request = await req.json();
    const res = await fetch('/api/user/login_by_password', {
        method: 'POST',
        body: JSON.stringify(cloneBody),
    })
    const result: Response = await res.json();
    return NextResponse.json(result.data);
}
