import Image from 'next/image';

const ImageView = (props) => {
  return (
    <div className='ImageView'>
      <Image
        fill
        className='ImageView__img'
        {...props}
        alt={props.alt || ''}
        sizes='(max-width: 1080px) 100vw,
              (max-width: 980px) 95vw,
              (max-width: 780px) 75vw,
              50vw
              '
      />
    </div>
  );
};

export default ImageView;
