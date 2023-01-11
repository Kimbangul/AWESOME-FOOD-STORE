import Image from 'next/image';
import Link from 'next/link';

const StoreModal = (props) => {
  return (
    <div className='Modal'>
      <article className='Modal__container'>
        <div className='Modal__close-container'>
          <span onClick={props.onCloseModal}>X</span>
        </div>
        <h2 className='Modal__title'>{props.name}</h2>
        <div className='Modal__img-container'>
          <Image src={props.image} width={300} height={300} alt={props.name} />
        </div>
        <p className='Modal__desc'>{props.description}</p>
        {props.url && (
          <Link href={props.url} target='_blank'>
            홈페이지 바로가기
          </Link>
        )}
      </article>
    </div>
  );
};

export default StoreModal;
