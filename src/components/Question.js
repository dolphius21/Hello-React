import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Question = ({ details, active, height, infoHeight, onActiveClick }) => {
  return (
    <div className="question-container">
      <div
        className="question"
        onClick={() => onActiveClick(details.id)}
        style={{
          borderBottom:
            active === details.id ? '1px solid #e1e1f1' : '1px solid #fff',
          borderLeft:
            active === details.id ? '5px solid #38b7dd' : '5px solid #fff',
          color: active === details.id ? '#38b7dd' : undefined
        }}
      >
        <h3 className="question-title">{details.title}</h3>
        <span className="question-icon">
          {active === details.id ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      <div
        className="question-info"
        style={{
          maxHeight: active === details.id ? height + 32 + 'px' : 0,
          padding: `${active === details.id ? 16 + 'px' : 0} 1rem`
        }}
      >
        <p ref={infoHeight}>{details.info}</p>
      </div>
    </div>
  );
};

export default Question;
