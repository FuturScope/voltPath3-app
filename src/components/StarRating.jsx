import { FaStar } from 'react-icons/fa';

function StarRating({ rating }) {
  return (
    <div className="flex justify-center items-center ">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? 'text-yellow-400' : 'text-yellow-400'}
        />
      ))}
      <span className="ml-2 text-gray-700">{rating}</span>
    </div>
  );
}

export default StarRating;