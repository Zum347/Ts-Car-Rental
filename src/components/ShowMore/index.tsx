import { useSearchParams } from 'react-router-dom';
import CustomButton from '../CustomButton';

const ShowMore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = Number(searchParams.get('limit')) || 5;

  const handleLimit = () => {
  
    const newLimit = String(limit + 5);
    searchParams.set('limit', newLimit);

    setSearchParams(searchParams);
  };

  return (
    <div className="w-full flex-center gap-5 my-10">
      {limit < 30 && (
        <CustomButton handleClick={handleLimit} title="Daha Fazla" />
      )}
    </div>
  );
};

export default ShowMore;