import React from 'react';
import {Link} from "react-router-dom";

export const Header = props => {
    const styleFromProps = {backgroundColor: props.colorPage, color: props.colorFont};

    return (
        <header style={styleFromProps}>
            <nav>
                <ul>
                    <li><Link style={styleFromProps}  to="/">Главная</Link></li>
                    <li><Link style={styleFromProps} to='/task-list'>Список задач</Link></li>
                    <li><Link style={styleFromProps} to='/customization'>Настройка внешнего вида</Link></li>
                    <li><Link style={styleFromProps} to='/not-found'>404</Link></li>
                </ul>
            </nav>
        </header>
    )
};