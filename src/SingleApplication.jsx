import React from "react";
import styles from "./SingleApplication.module.css";
import {dateFormat, moneyFormat} from "./utils";

const SingleApplication = ({ application }) => (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company {application.key}</sub>
          {application.id} {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        <a href={`mailto:${application.email}`}>{application.email}</a>
      </div>
      <div className={`${styles.cell} ${styles.cellRight}`} >
        <sub>Loan Amount</sub>
        {moneyFormat(application.loan_amount)}
      </div>
        <div className={`${styles.cell} ${styles.cellRight}`} >
        <sub>Application Date</sub>
        {dateFormat(new Date(application.date_created))}
      </div>
        <div className={`${styles.cell} ${styles.cellRight}`} >
        <sub>Expiry date</sub>
          {dateFormat(new Date(application.expiry_date))}
      </div>
    </div>
  );


export default SingleApplication;
