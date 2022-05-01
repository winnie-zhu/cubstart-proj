import "./SideBar.css"
import { ColorButton, getColor } from '../colorbutton/ColorButton';
import { Trash } from '../trash/Trash';
import { useState } from "react";

export function SideBar() {

    return  (
        <ul className="sidebar-container">
          <ColorButton/>
          <Trash />
        </ul>
    );
}