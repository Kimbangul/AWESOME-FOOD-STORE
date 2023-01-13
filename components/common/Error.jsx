import ERROR_320 from 'src/assets/images/error_320.svg';

const Error = (props) => {
  return (
    <div className='Error'>
      <ERROR_320 className='Error__icon' />
      {props.title && <h1 className='Error__title'>{props.title}</h1>}
      <p className='Error__desc'>{props.text || props.children}</p>
    </div>
  );
};

export default Error;
