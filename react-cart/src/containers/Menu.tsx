import React from 'react';
import s from "../css/style.module.scss"


const Menu = () => {
    return (
        <div id="menu" className={s.menu}>
            <h2>Menu</h2>
            <div id="menu-area" className={s.menuArea}></div>
        </div>
    );
}

export default Menu;