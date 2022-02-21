import React from 'react';
import Planet from '../icons/planet.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className='header'>
            <FontAwesomeIcon className='header__icon' icon={faEarth} />
            <h1 className='header__title'>erixk travel journal</h1>
        </header>
    );
};

export default Header;