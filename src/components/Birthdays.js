import { useState } from 'react';
import strawhats from '../data/strawhats';
import Birthday from './Birthday.js';
import Button from './Button';

const Birthdays = () => {
  const [list, setList] = useState(strawhats);

  return (
    <div className="birthdays">
      <div className="birthdays-card">
        <h3>Strawhat Birthdays</h3>
        <Birthday list={list} />
        <Button className="birthdays-btn" onClick={() => setList([])}>
          clear all
        </Button>
      </div>
    </div>
  );
};

export default Birthdays;
