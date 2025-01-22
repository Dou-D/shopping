"use client";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import MyIcon from "@/components/MyIcons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const PasswordInput: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
      label="Password"
      variant="bordered"
      placeholder="输入您的密码"
      name="password"
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
          aria-label="toggle password visibility"
        >
          {isVisible ? <MyIcon icon={faEyeSlash} /> : <MyIcon icon={faEye} />}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />
  );
};
