import "./Trash.css"
import { Icon } from '@iconify/react';

export function Trash() {
    return(
        <li>
          <button id='trash'><Icon icon="bx:trash" color="#545454" height="42"/></button>
        </li>
    );
}