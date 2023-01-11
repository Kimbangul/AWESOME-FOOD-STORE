import Link from 'next/link';
import axios from 'axios';
import { useEffect } from 'react';
import Image from 'next/image';
import useAPICall from 'utils/useAPICall';

const Store = () => {
  const storeList = useAPICall('GET', '/stores');
  console.log(storeList);

  return (
    <section className='Store'>
      {storeList.data?.length > 0 && (
        <ul className='Store__list'>
          {storeList.data.map((el, idx) => {
            return (
              <li className='Store__list-item' key={`storeList${idx}`}>
                <Image src={el.thumb} width={300} height={300} />
                <Link href={el.url || '#'}></Link>
                <h2>{el.name}</h2>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Store;
