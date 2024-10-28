import { Button } from "@nextui-org/react";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";
import { LoginFormProps } from "./types";
import VerificationCodeInput from "../VerificationCodeInput";
import EmailInput from "../EmailInput";
export const LoginForm: React.FC<LoginFormProps> = (type) => {
  return (
    <>
      <form action="/api/login">
        <div className="flex flex-col items-center flex-wrap gap-4">
          <EmailInput />
          {type.type === "password" ? <PasswordInput /> : <VerificationCodeInput />}
          <Button type="submit" className="w-4/12">
            登录
          </Button>
        </div>
      </form>
    </>
  );
};
