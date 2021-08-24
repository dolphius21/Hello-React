import React, { useState } from 'react';
import strawhats from '../data/strawhats';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import Button from './Button';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextBtnClick = () => {
    currentIndex < strawhats.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0);
  };

  const handlePrevBtnClick = () => {
    currentIndex > 0
      ? setCurrentIndex(currentIndex - 1)
      : setCurrentIndex(strawhats.length - 1);
  };

  const handleRandomBtnClick = () => {
    const randomIndex = Math.floor(Math.random() * strawhats.length);
    randomIndex === currentIndex
      ? handleRandomBtnClick()
      : setCurrentIndex(randomIndex);
  };

  const { name, image, role, text } = strawhats[currentIndex];

  return (
    <section className="reviews-container">
      <h2 className="title">Customer Reviews</h2>
      <div className="card reviews-card">
        <div className="review-image-container">
          <img src={image} alt={name} className="review-image" />
          <span className="review-quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="review-author">{name}</h4>
        <p className="review-role">{role}</p>
        <p className="review-content">{text}</p>
        <div className="buttons-container">
          <button className="prev-btn" onClick={handlePrevBtnClick}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={handleNextBtnClick}>
            <FaChevronRight />
          </button>
        </div>
        <Button className="btn-blue btn-center" onClick={handleRandomBtnClick}>
          Surprise Me
        </Button>
      </div>
    </section>
  );
};

export default Reviews;
