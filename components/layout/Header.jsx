import Link from 'next/link';
import menu from 'data/menu.json';
import app from 'data/app.json';

import LOGO from 'src/assets/images/logo.svg';
import LOGO_ICON from 'src/assets/images/logo_icon.svg';
import STORE_24 from 'src/assets/images/store_24.svg';
import INFO_24 from 'src/assets/images/info_24.svg';

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
        <LOGO_ICON className='Header__logo--mb' />
        <LOGO className='Header__logo' />
        <span className='Header__title-text'>{props.title || app.title}</span>
      </Link>
    </div>
  );
};

// COMPONENT header menu list
const HeaderMenu = () => {
  const getIcon = (title) => {
    switch (title) {
      case 'STORE':
        return <STORE_24 className='Header__menu-icon' />;
      case 'ABOUT':
        return <INFO_24 className='Header__menu-icon' />;
    }
  };
  return (
    <nav className='Header__menu'>
      {menu.length > 0 && (
        <ul className='Header__menu-list'>
          {menu.map((el, idx) => {
            return (
              <li className='Header__menu-item' key={`menuList${idx}`}>
                <Link href={el.link}>
                  {getIcon(el.title)}
                  <span className='Header__menu-text'>{el.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Header;
