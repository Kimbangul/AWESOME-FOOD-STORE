import Image from 'next/image';

const ImageView = (props) => {
  return (
    <div className='ImageView'>
      <Image fill className='ImageView__img' {...props} alt={props.alt || ''} />
    </div>
  );
};

export default ImageView;
