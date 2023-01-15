import Link from 'next/link';
import menu from 'data/menu.json';
import app from 'data/app.json';

import LOGO from 'src/assets/images/logo.svg';
import LOGO_ICON from 'src/assets/images/logo_icon.svg';
import STORE_24 from 'src/assets/images/store_24.svg';
import INFO_24 from 'src/assets/images/info_24.svg';
import { use, useCallback, useEffect, useMemo, useState } from 'react';

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
  const [path, setPath] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const winPath = window.location.pathname;
      setPath(winPath);
    }
    return;
  }, []);

  // FUNCTION 메뉴 아이콘 구해 주는 함수
  const getIcon = (title) => {
    switch (title) {
      case 'STORE':
        return <STORE_24 className='Header__menu-icon' />;
      case 'ABOUT':
        return <INFO_24 className='Header__menu-icon' />;
    }
  };

  // FUNCTION 현재 메뉴 구해 주는 함수
  const getActivedMenu = useCallback(
    (link) => {
      if (path !== null) {
        const nowPath = path.split('/');
        if (`/${nowPath[1]}` === link) {
          return 'Header__menu-item--active';
        }
      }
      return 'Header__menu-item';
    },
    [path]
  );

  return (
    <nav className='Header__menu'>
      {menu.length > 0 && (
        <ul className='Header__menu-list'>
          {menu.map((el, idx) => {
            return (
              <li className={getActivedMenu(el.link)} key={`menuList${idx}`}>
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
