"use client";
import { Input } from "@nextui-org/react";
import VerificationCodeButton from "@/components/VerificationCodeButton";
import { useFormInput, useMessage } from "@/hooks";
import { useMemo } from "react";
import { Response } from "@/app/api/user/send_email/types";
import { sendEmailProps } from "./types";
export const VerificationCodeInput: React.FC = () => {
  const emailProps = useFormInput("123456");
  const { onMessage, contextHolder } = useMessage();
  const validateEmail = (value: string) => value.match(/^\d{6}$/);

  const isInvalid = useMemo(() => {
    if (emailProps.value === "") return false;
    return validateEmail(emailProps.value) ? false : true;
  }, [emailProps.value]);
  // 向邮箱发送验证码
  const send_email = async (email: sendEmailProps) => {
    const res = await fetch("/api/user/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const result: Response = await res.json();
    onMessage(result.message, result.status)
  };
  return (
    <>
      {contextHolder}
      <Input
        name="code"
        label="verification code"
        variant="bordered"
        onChange={emailProps.onChange}
        placeholder="输入邮箱验证码"
        className="max-w-xs"
        isInvalid={isInvalid}
        endContent={
          <VerificationCodeButton
            onSendEmail={() => send_email(emailProps.value)}
          />
        }
        value={emailProps.value}
      />
    </>
  );
};
