import LoadingView from "components/common/Loading";
import Error from "components/common/Error";

const useLoadingData = (state, component) => {
  switch (state) {
    case 'idle':
      return <LoadingView />;
    case 'fullfilled':
      return component;
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

export default useLoadingData;