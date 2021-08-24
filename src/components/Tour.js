import { useState } from 'react';
import Button from './Button';

const Tour = ({ details, onTourRemove }) => {
  const { id, name, info, image, price } = details;
  const [isExpandInfo, setIsExpandInfo] = useState(false);

  return (
    <article className="card tour">
      <img src={image} alt={name} />
      <div className="tour-content">
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {isExpandInfo ? info : info.substring(0, 200) + '...'}
          <button
            className="btn-readmore"
            onClick={() => {
              setIsExpandInfo(!isExpandInfo);
            }}
          >
            {isExpandInfo ? 'show less' : 'read more'}
          </button>
        </p>
        <Button className="btn-center" onClick={() => onTourRemove(id)}>
          not interested
        </Button>
      </div>
    </article>
  );
};

export default Tour;
