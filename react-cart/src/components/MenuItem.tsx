import React from 'react';
import s from '../css/style.module.scss';

const MenuItem = () => {
    return( 
        <div className={s.menuItem}>
            <span className={s.menuText}>Mouse - $99</span>
            <span className={s.menuAction}>
                <button>+</button>
            </span>
        </div>
    )
}

export default MenuItem;
