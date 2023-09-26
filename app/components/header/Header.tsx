import {Link} from "@remix-run/react";

import styles from './header.module.css';
import logoLight from '~/../public/images/svg/academy-light.svg';
import logoDark from '~/../public/images/svg/academy-dark.svg';
import {MouseEventHandler} from "react";

interface HeaderProps {
    isDarkMode: boolean,
    toggleDarkMode: MouseEventHandler,
}

const Header = ({isDarkMode, toggleDarkMode}: HeaderProps) => {
    return (
        <header className={`container ${styles.header}`}>
            <Link to={'/'} className={'linkOpacity'}>
                <img src={isDarkMode ? logoDark : logoLight} alt="Logo"/>
            </Link>
            <div>
                <button className={'buttonIcon linkOpacity'}>
                    <i className='fa-solid fa-magnifying-glass'/>
                </button>
                <button className={'buttonIcon linkOpacity'} onClick={toggleDarkMode}>
                    <i className={isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}/>
                </button>
                <button className={'buttonIcon linkOpacity'}>
                    <i className='fa fa-bars'/>
                </button>
            </div>
        </header>
    );
}
export default Header;