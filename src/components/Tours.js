import { useState, useEffect } from 'react';
import useFetch from '../utils/useFetch';
import Tour from './Tour';
import Loader from './Loader';
import Button from './Button';

const url = 'https://course-api.com/react-tours-project';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const { get, loading } = useFetch(url);

  const handleFetchedTours = () => {
    get()
      .then((data) => {
        setTours(data);
      })
      .catch((err) => console.log('Could not load tours', err));
  };

  useEffect(() => {
    handleFetchedTours();
  }, []);

  const handleTourRemove = (id) => {
    const updatedTours = tours.filter((tour) => id !== tour.id);
    setTours(updatedTours);
  };

  return (
    <section className="tours-container">
      {loading ? (
        <div className="center">
          <Loader />
        </div>
      ) : !tours.length ? (
        <>
          <h2 className="title">No Existing Tours</h2>
          <Button className="green-btn" onClick={handleFetchedTours}>
            Refresh
          </Button>
        </>
      ) : (
        <>
          <h2 className="title">Explore Our Tours</h2>
          <div>
            {tours.map((tour) => (
              <Tour
                key={tour.id}
                details={tour}
                onTourRemove={handleTourRemove}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Tours;
