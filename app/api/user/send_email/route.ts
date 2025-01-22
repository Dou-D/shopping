import { NextRequest, NextResponse } from "next/server";
import { Response, Request } from "./types";


export async function POST(req: NextRequest) {
  const cloneBody: Request = await req.json();

  const res: Response = await (
    await fetch("/api/user/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: cloneBody.email,
      }),
    })
  ).json();
  return NextResponse.json({ message: res.message, status: res.status });
}
