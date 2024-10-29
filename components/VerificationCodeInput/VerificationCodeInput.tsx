import { Input } from "@nextui-org/react";
import VerificationCodeButton from "@/components/VerificationCodeButton";

export const VerificationCodeInput: React.FC = () => {
  return (
    <>
      <Input
        name="code"
        label="verification code"
        variant="bordered"
        placeholder="输入邮箱验证码"
        className="max-w-xs"
        endContent={<VerificationCodeButton />}
      />
    </>
  );
};
