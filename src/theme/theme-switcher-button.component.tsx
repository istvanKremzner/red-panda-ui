import { useThemeToggler } from "./use-theme-toggler.hook";

export const ThemeSwitcherButton = () => {
  const { toggle } = useThemeToggler();

  return <button onClick={toggle}>Switch theme</button>;
};
