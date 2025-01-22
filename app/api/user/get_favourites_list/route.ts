import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams;
    const category = params.get("category") || "" ;
    const req = params.get("req") || "";
    const size = params.get("size") || "";
    const query = { category, req, size };
    const cookieStore = cookies();
    const queryString = new URLSearchParams(query).toString();
    const res = await fetch(`/api/user/get_favourites_list?${queryString}`, {
        headers: {
            Authorization: `Bearer ${cookieStore.get("token")}`,
        },
    });
    const result = await res.json();
    return NextResponse.json(result);
}