import "./ColorButton.css";
import { useState } from "react";
import { Colors } from "./Colors";

let curColor = Colors[0].hex;

export function ColorButton(props) {
    const [selectedColor, setColor] = useState(Colors[0].hex);

    const changeColor = (col) => {
        curColor = col;
        console.log(col);
        setColor(col);
    }

    return(
        <>
            {Colors.map((item, index) => {
            return (
                <li key={index}>
                    <button 
                    style={{backgroundColor: item.hex}} 
                    onClick={() => changeColor(item.hex)}>
                    </button>
                </li>
            );
        })}
        </>
    );
}

export function getColor() {
    return curColor;
}