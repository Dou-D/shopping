"use client";

import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { VerificationCodeButtonProps } from "./type";

const text = "获取验证码";
const end_countdown = "秒后重发";
const isCountdownDefault = false;
const TIMEOUT = 5;
export const VerificationCodeButton: React.FC<VerificationCodeButtonProps> = ({onSendEmail}) => {
  const [countdown, setCountdown] = useState(TIMEOUT);
  const [isCountdown, setIsCountdown] = useState(isCountdownDefault);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCountdown && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsCountdown(false);
      setCountdown(TIMEOUT);
    }

    return () => clearInterval(timer);
  }, [isCountdown, countdown]);

  const handleSendVerificationCode = async() => {
    setIsCountdown(true);
    setCountdown(TIMEOUT);
    onSendEmail(); // 触发发送验证码的函数
  };
  return (
    <Button
      size="sm"
      disabled={isCountdown}
      onClick={handleSendVerificationCode}
    >
      {isCountdown ? countdown + end_countdown : text}
    </Button>
  );
};
