import { MenuItems } from "./MenuItems"
import './Nav.css'
import { Icon } from '@iconify/react';
import { useState } from "react";
import { Link } from 'react-router-dom';

export function Nav() {
    const [clicked, setClick] = useState(false);

    return (
        <nav className="NavbarItems">
            
            <div className="menu-icon" onClick={() => setClick(!clicked)}>
                
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <Icon className="icons" icon={item.icon} color="#545454" height="30"></Icon>
                                {item.title}
                            </Link>
                        </li>
                    );
                })} 
            </ul>
        </nav>
    );
}