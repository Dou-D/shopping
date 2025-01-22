import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Request } from "./types";
export async function POST(req: NextResponse) {
  const cloneBody: Request = await req.json();
  const cookieStore = cookies();
  const res = await fetch("/api/user/modify_password", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cloneBody),
  });
  const result = await res.json();
  return NextResponse.json(result);
}
