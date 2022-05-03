import { MenuItems } from "./MenuItems";
import './Nav.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export function Nav() {

    return (
        <nav className="nav-container">
            <ul className='nav-menu'>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} className="menu-names">
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
