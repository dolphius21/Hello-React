import { useState, useEffect } from 'react';
import Loader from './Loader';
import { BiChevronsRight } from 'react-icons/bi';
import useFetch from '../utils/useFetch';

const url = 'https://course-api.com/react-tabs-project';

const Jobs = () => {
  const [jobs, setjobs] = useState([]);
  const [activeJob, setActiveJob] = useState(0);
  const { get } = useFetch(url);

  useEffect(() => {
    get()
      .then((data) => {
        setjobs(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!jobs[activeJob]) {
    return (
      <div className="center">
        <Loader />
      </div>
    );
  }

  const { title, company, dates, duties } = jobs[activeJob];

  return (
    <div className="jobs-container">
      <h2 className="title">Experience</h2>
      <div className="jobs-center">
        <div className="jobs-btn-container">
          {jobs.map((job, index) => (
            <button
              className={`job-btn ${index === activeJob && 'job-active-btn'}`}
              key={job.id}
              onClick={() => setActiveJob(index)}
            >
              {job?.company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <BiChevronsRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </div>
  );
};

export default Jobs;
