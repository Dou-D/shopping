import { Button } from "@nextui-org/react";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";
import type {
  LoginFormProps,
  PasswordDataType,
  PasswordRequestType,
  PasswordResponseType,
} from "./types";
import VerificationCodeInput from "../VerificationCodeInput";
import EmailInput from "../EmailInput";
import { myFetch } from "@/utils";
import { useMessage } from "@/hooks";
import { cookies } from "next/headers";
export const LoginForm: React.FC<LoginFormProps> = ({ type }) => {
  const { onMessage, contextHolder } = useMessage();
  const cookieStore = cookies();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {} as PasswordRequestType;
    formData.forEach((value, key) => {
      data[key as keyof PasswordRequestType] = value as string;
    });
    console.log(data);
    if (type === "password") {
      // login with password
      const res = await myFetch<PasswordRequestType, PasswordResponseType>(
        "/api/user/login_by_password",
        "POST",
        data
      );
      onMessage(res.message, res.status);
      cookieStore.set("token", res.data.access_token);
    } else {
      // login with verification code
      const res = await myFetch<PasswordRequestType, PasswordRequestType>(
        "/api/user/login_by_message",
        "POST",
        data
      );
    }
  };
  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center flex-wrap gap-4">
          <EmailInput />
          {type === "password" ? <PasswordInput /> : <VerificationCodeInput />}
          <Button type="submit" className="w-4/12">
            登录
          </Button>
        </div>
      </form>
    </>
  );
};
