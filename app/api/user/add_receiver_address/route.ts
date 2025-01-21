import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Response } from './types';

export async function POST(req: NextRequest) {
    const cloneBody = await req.json();
    const cookieStore = cookies();
    const res = await fetch('/api/user/update_receiver_address', {
        headers: {
            'Authorization': `Bearer ${cookieStore.get('token')}`,
        },
        body: JSON.stringify(cloneBody),
        method: 'POST',
    })
    const result = await res.json() as Response;
    return NextResponse.json(result);
}