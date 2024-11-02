import { ThemeKey } from "@/components/ThemeSwitcher/types";
import { ThemeProvider } from "next-themes";
interface Props {
  children: React.ReactNode;
  attribute: string
  defaultTheme: ThemeKey
}
export const NextThemesProvider: React.FC<Props> = ({ children, attribute, defaultTheme }) => {
  return <ThemeProvider attribute={attribute} defaultTheme={defaultTheme}>{children}</ThemeProvider>;
};

