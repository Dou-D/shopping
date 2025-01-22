import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Request } from "./types";


export async function POST(req: NextRequest) {
    const cookieStore = cookies();
    const cloneBody: Request = await req.json();
    const res = await fetch('/api/user/update_receiver_address', {
        headers: {
            "Authorization": `Bearer ${cookieStore.get("token")}`, 
        },
        method: 'POST',
        body: JSON.stringify(cloneBody),
    });
    const result = await res.json();
    return NextResponse.json(result);
}