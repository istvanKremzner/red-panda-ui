import { round } from "@/lib/utils";
import { FC, useMemo } from "react";

interface IExampleCardProps {
  children: string;
}

const getRandomColorComponent = () => Math.random() * 255;
const getRandomAlpha = () => round(Math.random() * 0.5 + 0.5, 2);
const getRandomColor = () =>
  `rgba(${getRandomColorComponent()}, ${getRandomColorComponent()}, ${getRandomColorComponent()}, ${getRandomAlpha()})`;

export const ExampleCard: FC<IExampleCardProps> = ({ children }) => {
  const color = useMemo(getRandomColor, []);

  return (
    <div
      style={{
        margin: "1rem",
        outline: "1px solid black",
        width: 200,
        height: 200,
        backgroundColor: color,
        borderRadius: "2rem",
        display: "grid",
        placeItems: "center",
      }}
    >
      {children}
    </div>
  );
};
