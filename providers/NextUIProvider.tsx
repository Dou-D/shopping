import * as React from "react";
import { NextThemesProvider } from "@/providers/NextThemesProvider";

import { NextUIProvider } from "@nextui-org/react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
