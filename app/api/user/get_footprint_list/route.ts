import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams;
    const category = params.get("category") || "";
    const req = params.get("req") || "";
    const size = params.get("size") || "";
    const cookieStore = cookies();
    const query = { category, req, size };
    const queryString = new URLSearchParams(query).toString();
    const res = await fetch(`/api/user/get_footprint_list?${queryString}`, {
        headers: {
            Authorization: `Bearer ${cookieStore.get("token")}`,
        },
    });
    const result = await res.json();
    return NextResponse.json(result);
}