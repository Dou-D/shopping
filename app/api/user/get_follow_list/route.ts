import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Response } from "./types";

export async function GET(request: NextRequest) {
    const cookieStore = cookies();
    const params = request.nextUrl.searchParams;
    const req = params.get("req") || "";
    const size = params.get("size") || "";
    const query = new URLSearchParams({ req, size }).toString();
    const res = await fetch(`/api/user/get_follow_list?${query}`, {
        headers: {
            Authorization: `Bearer ${cookieStore.get("token")}`,
        },
    });
    const result: Response = await res.json();
    return NextResponse.json(result);
}