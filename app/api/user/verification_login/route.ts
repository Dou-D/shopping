import type { Response, Request } from "./types";
import { NextRequest, NextResponse } from "next/server";

// 通过验证码登录
export async function POST(req: NextRequest) {
  const cloneBody: Request = await req.json();
  const json = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cloneBody),
  });
  const res = (await json.json()) as Response;
  return NextResponse.json(res);
}
