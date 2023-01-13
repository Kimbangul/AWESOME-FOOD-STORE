import { useState } from 'react';
import useAPICall from 'utils/useAPICall';

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
      case 'rejected':
        return (
          <Error
            title='Oops!'
            text={`데이터를 불러오는 데 에러가 발생했습니다. 다시 시도해 주세요 :(`}
          />
        );
      default:
        return null;
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
      {setComponetView(storeList.state)}
      {storeList.data?.length > 0 && (
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
        return (
          <li
            className='Store__list-item'
            key={`storeList${el.id}`}
            onClick={props.onClickStoreItem ? props.onClickStoreItem(el) : null}
          >
            <ImageView src={el.thumb} alt={el.name} />
          </li>
        );
      })}
    </ul>
  );
};

// COMPONENT modal view
const ModalView = (props) => {
  return <>{props.data && <StoreModal {...props.data} />}</>;
};

export default Store;
