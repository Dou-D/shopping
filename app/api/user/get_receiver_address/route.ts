import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import type { Response, Request } from "./types";
export async function GET(req: NextRequest) {
  const cloneBody: Request = await req.json();
  cloneBody.req = "1";
  cloneBody.size = "10";
  const cookieStore = cookies();
  const res = await fetch("/api/user/get_receiver_address", {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cloneBody),
  });
  const result = (await res.json()) as Response;
  return NextResponse.json(result);
}
