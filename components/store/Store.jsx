import { useEffect, useState } from 'react';
import useAPICall from 'utils/useAPICall';

import app from 'data/app.json';
import ImageView from 'components/common/ImageView';
import StoreModal from 'components/store/StoreModal';
import Error from 'components/common/Error';
import useLoadingData from 'utils/useLoadingData';

// COMPONENT main component
const Store = () => {
  const storeList = useAPICall('GET', '/stores');
  const [modalData, setModalData] = useState(null);

  // FUNCTION modal data clear function
  const setClearModalData = () => {
    setModalData(null);
    return;
  };
  // FUNCTION store item click event
  const onClickStoreItem = (data) => () => {
    setModalData({ ...data, onCloseModal: setClearModalData });
    return;
  };

  // FUNCTION set component
  const setComponetView = useLoadingData(
    storeList.state,
    <StoreListView
      data={storeList.data}
      onClickStoreItem={onClickStoreItem || null}
    />
  );

  return (
    <>
      <section className='Store'>
        <h1 className='Store__title'>Store</h1>
        {setComponetView}
      </section>
      <ModalView data={modalData} />
    </>
  );
};

// COMPONENT store list
export const StoreListView = (props) => {
  return (
    <>
      {props.data?.length > 0 ? (
        <ul className='Store__list'>
          {props.data?.map((el, idx) => {
            return (
              <StoreItem
                idx={idx}
                key={`storeList${el.id}`}
                {...el}
                onClickStoreItem={props.onClickStoreItem}
              />
            );
          })}
        </ul>
      ) : (
        <Error title='No data.' text={`현재 등록된 스토어가 없습니다.`} />
      )}
    </>
  );
};

// COMPONENT store item
const StoreItem = (props) => {
  return (
    <li
      className='Store__list-item'
      onClick={props.onClickStoreItem ? props.onClickStoreItem(props) : null}
      style={{ animationDelay: `${props.idx * 0.2}s` }}
    >
      <ImageView
        src={props.thumb}
        alt={props.name}
        placeholder='blur'
        blurDataURL={app.blurDataURL}
      />
    </li>
  );
};

// COMPONENT modal view
const ModalView = (props) => {
  return <>{props.data && <StoreModal {...props.data} />}</>;
};
export default Store;
