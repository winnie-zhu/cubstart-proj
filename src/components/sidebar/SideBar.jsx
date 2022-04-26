import "./SideBar.css"
import { ColorButton } from '../colorbutton/ColorButton';
import { Trash } from '../trash/Trash';

export function SideBar() {
    return  (
        <ul>
          <ColorButton n="0" color="#2E2E2E"/>
          <ColorButton n="1" color="white"/>
          <ColorButton n="2" color="#FFA8A8"/>
          <ColorButton n="3" color="#FFCCA8"/>
          <ColorButton n="4" color="#FFF0A1"/>
          <ColorButton n="5" color="#9AE8A7"/>
          <ColorButton n="6" color="#A8D5FF"/>
          <ColorButton n="7" color="#BFA8FF"/>
          <Trash />
        </ul>
    );
}