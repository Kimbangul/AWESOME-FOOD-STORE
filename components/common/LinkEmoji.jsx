import Link from 'next/link';
import Emoji from './Emoji';

const LinkEmoji = (props) => {
  return (
    <Link
      className='LinkEmoji'
      href={props.href}
      target='_blank'
      style={{ display: 'inline-block' }}
    >
      <Emoji symbol='🔗' />
    </Link>
  );
};

export default LinkEmoji;
