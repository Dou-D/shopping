import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const cookieStore = cookies();
    const cloneBody: Request = await req.json();
    const res = await fetch('/api/user/add_favourites', {
        headers: {
            "Authorization": `Bearer ${cookieStore.get("token")}`, 
        },
        method: 'POST',
        body: JSON.stringify(cloneBody),
    });
    const result = await res.json();
    return NextResponse.json(result);
}