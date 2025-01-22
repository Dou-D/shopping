"use client";

import { useFormInput } from "@/hooks";
import { Input } from "@nextui-org/react";
import { useMemo } from "react";

export const EmailInput: React.FC = () => {
  const emailProps = useFormInput("xiaoming123@gmail.com");
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (emailProps.value === "") return false;

    return validateEmail(emailProps.value) ? false : true;
  }, [emailProps.value]);
  return (
    <Input
      className="max-w-xs"
      variant="bordered"
      isClearable
      onClear={() => emailProps.setValue("")}
      onChange={emailProps.onChange}
      type="email"
      name="username"
      label="Email"
      placeholder="输入您的邮箱"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "default"}
      errorMessage="您输入的邮箱不符合规范"
      value={emailProps.value}
    />
  );
};
