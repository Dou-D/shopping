import { useMessage } from "@/hooks/useMessage";
import type {
  Response,
  Data,
} from "./types";

// 通过验证码登录
export async function POST(
  email: string,
  verification_code: string
): Promise<Data> {
  const json = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      verification_code,
    }),
  });
  const res = (await json.json()) as Response;
  if (res.status !== 200) {
    const { showMessage } = useMessage();
    showMessage(res.message);
  }
  return res.data;
}
