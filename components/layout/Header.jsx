import Link from 'next/link';
import menu from 'data/menu.json';
import app from 'data/app.json';

import LOGO from 'src/assets/images/logo.svg';

// COMPONENT main component
const Header = () => {
  return (
    <header className='Header'>
      <div className='Header__inner'>
        <HeaderTitle />
        <HeaderMenu />
      </div>
    </header>
  );
};

// COMPONENT header title
const HeaderTitle = (props) => {
  return (
    <div className='Header__title'>
      <Link href={props.link || '/'}>
        <LOGO className='Header__logo' />
        <span className='Header__title-text'>{props.title || app.title}</span>
      </Link>
    </div>
  );
};

// COMPONENT header menu list
const HeaderMenu = () => {
  return (
    <nav className='Header__menu'>
      {menu.length > 0 && (
        <ul className='Header__menu-list'>
          {menu.map((el, idx) => {
            return (
              <li className='Header__menu-item' key={`menuList${idx}`}>
                <Link href={el.link}>{el.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Header;
