import { useState, useEffect, useRef } from 'react';
import questions from '../data/questions';
import graphic from '../UIUX_design.svg';
import Question from './Question';

const Accordion = () => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(0);
  const infoHeight = useRef(0);

  const handleActiveClick = (id) => {
    if (active === id) {
      setActive(0);
      setHeight(0);
    } else {
      setActive(id);
    }
  };

  useEffect(() => {
    if (active) {
      setHeight(infoHeight.current.clientHeight);
    }
  }, [active]);

  return (
    <div className="accordion-container">
      <div className="card accordion-card">
        <div className="accordion-image-container">
          <img src={graphic} alt="UI/UX design graphic" />
        </div>
        <div className="FAQs-container">
          <h2>FAQs</h2>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                details={question}
                active={active}
                height={height}
                infoHeight={infoHeight}
                onActiveClick={handleActiveClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
