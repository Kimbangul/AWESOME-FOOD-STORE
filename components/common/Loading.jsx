// COMPONENT main component
const LoadingView = () => {
  return (
    <div className='LoadingView'>
      <Loading />
    </div>
  );
};

// COMPONENT  loading
export const Loading = () => {
  // FUNCTION get animation style
  const getAnimation = (idx) => {
    return {
      left: `${0.8 * (idx + 1)}rem`,
      animationDelay: `${0.12 * idx}s`,
    };
  };
  const barArr = Array.from(Array(3), (_, idx) => (
    <LoadingBar key={idx} style={getAnimation(idx)} />
  ));

  return <div className='Loading'>{barArr.map((el) => el)}</div>;
};

// COMPONENT bar
const LoadingBar = (props) => {
  return <span className='Loading__bar' {...props}></span>;
};

export default LoadingView;
