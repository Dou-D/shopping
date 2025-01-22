import { message } from "antd";
type MessageType = "success" | "error" | "info" | "warning";
const hashmap: Record<number, MessageType> = {
  200: "success",
  400: "error",
};
export const useMessage = () => {
  const [messageAPI, contextHolder] = message.useMessage();
  const onMessage = (text: string, status: number) => {
    messageAPI[hashmap[status]](text);
  };
  return {
    onMessage,
    contextHolder,
  };
};
