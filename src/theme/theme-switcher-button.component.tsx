import { Button } from "@/button";
import { useThemeToggler } from "./use-theme-toggler.hook";

export const ThemeSwitcherButton = () => {
  const { toggle } = useThemeToggler();

  return <Button onClick={toggle}>Switch theme</Button>;
};
