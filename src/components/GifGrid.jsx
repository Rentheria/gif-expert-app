import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <div className="">...Cargando</div>}

      <div className="card-grid">
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
