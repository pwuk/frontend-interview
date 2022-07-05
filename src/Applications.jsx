import React, {useEffect, useState, useLayoutEffect} from "react";
import SingleApplication from "./SingleApplication";
import { getSingleApplicationFixture } from "./__fixtures__/applications.fixture";
import styles from "./Applications.module.css";
import {Button} from "./ui/Button/Button";

const NEXT_BATCH_QUERY_LIMIT = 5;

const Applications = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const moreButtonHandlerClick = () => setCurrentPage(currentPage+1);

  useEffect( async () => {
      setIsLoading(true);
    const response = await fetch(
        `http://localhost:3001/api/applications?_page=${currentPage}&_limit=${NEXT_BATCH_QUERY_LIMIT}`
    );
    const data = await response.json();
    setApplications([...applications, ...data]);
      setIsLoading(false);
  }, [currentPage]);

  useLayoutEffect(() => {
      window.scrollTo(0, document.body.scrollHeight);
  }, [applications, isLoading]);

  return (
    <>
      <div className={styles.Applications}>
        {applications.map(application =>
          <SingleApplication key={application.id} application={application} />
        )}
      </div>
      <div className={styles.ButtonContainer} >
          {
              isLoading
                  ? <div className={styles.Loading} >Loading</div>
                  : <Button onClick={moreButtonHandlerClick}>Load More</Button>
          }

      </div>
    </>
  );
};

export default Applications;
