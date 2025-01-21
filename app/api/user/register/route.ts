import { useMessage } from "@/hooks/useMessage";
import {
  Response,
} from "./types";
import { NextRequest, NextResponse } from "next/server";

// 注册接口
export async function POST(req: NextRequest) {
  const res = await fetch("/api/user/register");
  const result: Response = await res.json();
  if (result.status !== 200) {
    return NextResponse.json(result.message);
  }
  return NextResponse.json(result.data);
}
