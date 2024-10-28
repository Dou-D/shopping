"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import { LoginFormProps } from "@/components/LoginForm/types";

export const MyLogin: React.FC = () => {
  const [type, setType] = useState<LoginFormProps>({ type: "password" });

  return (
    <>
      <Card className="py-4 w-6/12 flex justify-center h-4/5 items-center">
        <CardHeader className="flex justify-center">
          <h1 onClick={() => setType({ type: "password" })}>密码登录</h1>
          <span className="m-4"> | </span>
          <h1 onClick={() => setType({ type: "message" })}>短信登录</h1>
        </CardHeader>
        <CardBody>
          <LoginForm type={type.type} />
        </CardBody>
      </Card>
    </>
  );
};
