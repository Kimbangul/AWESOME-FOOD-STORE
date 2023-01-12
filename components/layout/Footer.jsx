import app from 'data/app.json';

const Footer = (props) => {
  return (
    <footer className='Footer'>
      <div className='Footer__inner'>
        <div className='Footer__title'>{props.title || app.title}</div>
        <p className='Footer__copy'>{app.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
