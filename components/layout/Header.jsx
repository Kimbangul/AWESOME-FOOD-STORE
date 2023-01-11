import Link from 'next/link';
import menu from 'data/menu.json';
import app from 'data/app.json';

// COMPONENT main component
const Header = () => {
  return (
    <header className='Header'>
      <HeaderTitle />
      <HeaderMenu />
    </header>
  );
};

// COMPONENT header title
const HeaderTitle = (props) => {
  return (
    <div className='Header__title'>
      <Link href={props.link || '/'}>{props.title || app.title}</Link>
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
