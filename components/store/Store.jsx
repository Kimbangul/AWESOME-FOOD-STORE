import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import useAPICall from 'utils/useAPICall';
import StoreModal from './StoreModal';

// COMPONENT main component
const Store = () => {
  const storeList = useAPICall('GET', '/stores');
  const [modalData, setModalData] = useState(null);
  console.log(storeList);

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
      {storeList.data?.length > 0 && (
        <StoreListView
          data={storeList.data}
          onClickStoreItem={onClickStoreItem}
        />
      )}
      <ModalView data={modalData} />
    </section>
  );
};

// COMPONENT store list
const StoreListView = (props) => {
  return (
    <ul className='Store__list'>
      {props.data.map((el) => {
        return (
          <li
            className='Store__list-item'
            key={`storeList${el.id}`}
            onClick={props.onClickStoreItem(el)}
          >
            <Image src={el.thumb} width={300} height={300} alt={el.name} />
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
