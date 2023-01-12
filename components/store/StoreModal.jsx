import Image from 'next/image';
import Link from 'next/link';

const StoreModal = (props) => {
  return (
    <div className='Modal'>
      <article className='Modal__container'>
        <div className='Modal__close-container'>
          <button className='Modal__close-btn' onClick={props.onCloseModal}>
            닫기
          </button>
        </div>
        <section className='Modal__contents'>
          <div className='Modal__img-container'>
            <Image fill src={props.image} alt={props.name} />
          </div>
          <div className='Modal__text-container'>
            <h2 className='Modal__title'>{props.name}</h2>
            <p className='Modal__desc'>{props.description}</p>
            {props.url && (
              <div className='Modal__link'>
                <Link href={props.url} target='_blank'>
                  홈페이지 바로가기
                </Link>
              </div>
            )}
          </div>
        </section>
      </article>
    </div>
  );
};

export default StoreModal;
