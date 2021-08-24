import { useState } from 'react';
import strawhats from '../data/strawhats';
import Birthday from './Birthday.js';
import Button from './Button';

const Birthdays = () => {
  const [list, setList] = useState(strawhats);

  return (
    <div className="birthdays">
      <div className="card birthdays-card">
        <h3>{list.length} birthdays today</h3>
        <Birthday list={list} />
        <Button className="btn btn-red btn-center" onClick={() => setList([])}>
          clear all
        </Button>
      </div>
    </div>
  );
};

export default Birthdays;
