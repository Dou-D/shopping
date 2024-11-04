import { NextRequest } from "next/server";

export async function getList(request: NextRequest) {
    await fetch("/getList", {
        method: "GET"
    })
}