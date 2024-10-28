"use client";

import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

const text = "获取验证码";
const end_countdown = "秒后重发";
const isCountdownDefault = false;
const TIMEOUT = 5;
export const VerificationCodeButton: React.FC = () => {
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

  const handleSendVerificationCode = () => {
    setIsCountdown(true);
    setCountdown(TIMEOUT);
    console.log(1);
    
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
