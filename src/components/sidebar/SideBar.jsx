import "./SideBar.css"
import { ColorButton } from '../colorbutton/ColorButton';
import { Trash } from '../trash/Trash';
import { useState } from "react";

const colors = [
  {
    color: "black",
    hex: "#2E2E2E",
  },
  {
    color: "white",
    hex: "#ffffff",
  },
  {
    color: "red",
    hex: "#FFA8A8",
  },
  {
    color: "orange",
    hex: "#FFCCA8",
  },
  {
    color: "yellow",
    hex: "#FFF0A1",
  },
  {
    color: "green",
    hex: "#9AE8A7",
  },
  {
    color: "blue",
    hex: "#A8D5FF",
  },
  {
    color: "purple",
    hex: "#BFA8FF",
  },
]

export function SideBar() {
  const [selectedColor, setColor] = useState(colors[0].hex);

    return  (
        <ul className="sidebar-container">
          {
            colors.map(
              <ColorButton color={colors.color} hex={colors.hex} 
              onClick={setColor(colors.hex)}
              />
            )
          }
          <Trash />
        </ul>
    );
}