"use client";

import { Spinner } from "@nextui-org/react";
import { useEffect, useRef } from "react";

export const MySpinner: React.FC = () => {
  const loadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          return;
        } else {
          console.log("加载更多");
        }
      },
      {
        root: null, // 监听视口
        threshold: 0.5, // 重叠50%触发
      }
    );
    const currentRef = loadingRef.current; // 将 current 值保存到局部变量
    if (currentRef) {
      ob.observe(currentRef); // 使用局部变量
    }
    return () => {
      if (currentRef) {
        ob.unobserve(currentRef);
      }
    };
  }, []);

  return <Spinner label="Loading..." color="warning" ref={loadingRef} />;
};
