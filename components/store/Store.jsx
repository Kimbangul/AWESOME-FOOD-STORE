import { useState } from 'react';
import useAPICall from 'utils/useAPICall';

import app from 'data/app.json';
import ImageView from 'components/common/ImageView';
import StoreModal from 'components/store/StoreModal';
import LoadingView from 'components/common/Loading';
import Error from 'components/common/Error';

// COMPONENT main component
const Store = () => {
  const storeList = useAPICall('GET', '/stores');
  const [modalData, setModalData] = useState(null);

  // FUNCTION set component
  const setComponetView = (state) => {
    switch (state) {
      case 'idle':
        return <LoadingView />;
      case 'fullfilled':

      case 'rejected':
        return (
          <Error
            title='Oops!'
            text={`데이터를 불러오는 데 에러가 발생했습니다. 다시 시도해 주세요 :(`}
          />
        );
      default:
        return <LoadingView />;
    }
  };

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

  return (
    <section className='Store'>
      <h1 className='Store__title'>Store</h1>
      {storeList.state !== 'fullfilled'
        ? setComponetView(storeList.state)
        : storeList.data?.length > 0 && (
            <StoreListView
              data={storeList.data}
              onClickStoreItem={onClickStoreItem || null}
            />
          )}
      <ModalView data={modalData} />
    </section>
  );
};

// COMPONENT store list
export const StoreListView = (props) => {
  return (
    <ul className='Store__list'>
      {props.data?.map((el) => {
        return <StoreItem key={`storeList${el.id}`} {...el} />;
      })}
    </ul>
  );
};

// COMPONENT store item
const StoreItem = (props) => {
  return (
    <li
      className='Store__list-item'
      onClick={props.onClickStoreItem ? props.onClickStoreItem(props) : null}
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
