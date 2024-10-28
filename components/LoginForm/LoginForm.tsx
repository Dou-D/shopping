import { Button, Input } from "@nextui-org/react";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";
import { LoginFormProps } from "./types";

export const LoginForm: React.FC<LoginFormProps> = ({ type }) => {
  return (
    <>
      <form action="/api/login">
        <div className="flex flex-col items-center flex-wrap gap-4">
          <Input
            className="max-w-xs"
            variant="bordered"
            isClearable
            type="email"
            name="username"
            label="Email"
            placeholder="输入您的邮箱"
          />
          <PasswordInput />
          <Button type="submit" className="w-4/12">
            登录
          </Button>
        </div>
      </form>
    </>
  );
};
