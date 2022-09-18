import { Button } from "@/button";
import { Card } from "@/card";
import { Typography } from "@/typography/typography.component";
import { useThemeToggler } from "./use-theme-toggler.hook";

export const ThemeSwitcherButton = () => {
  const { isDark, toggle } = useThemeToggler();

  return (
    <Card>
      <Button onClick={toggle}>Switch theme</Button>
      <Typography>
        Current theme is <b>{isDark ? "Dark" : "Light"}</b>
      </Typography>
    </Card>
  );
};
