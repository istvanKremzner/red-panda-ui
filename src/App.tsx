import { Card } from "./card";
import { ThemeSwitcherButton } from "./theme/theme-switcher-button.component";
import { Typography } from "./typography/typography.component";

function App() {
  return (
    <main>
      <Card>
        <Typography type="extra-small" color="secondary">
          XS
        </Typography>

        <Typography type="small" color="success">
          S
        </Typography>
        <Typography>M</Typography>
        <Typography type="large" color="info">
          L
        </Typography>
        <Typography type="extra-large" color="warning">
          XL
        </Typography>
        <Typography type="extra-large" color="error">
          XL
        </Typography>
      </Card>

      <Card>
        <Typography highlighted type="extra-small" color="secondary">
          XS
        </Typography>

        <Typography highlighted type="small" color="success">
          S
        </Typography>
        <Typography highlighted>M</Typography>
        <Typography highlighted type="large" color="info">
          L
        </Typography>
        <Typography highlighted type="extra-large" color="warning">
          XL
        </Typography>
        <Typography highlighted type="extra-large" color="error">
          XL
        </Typography>
      </Card>

      <ThemeSwitcherButton />
    </main>
  );
}

export default App;
