import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'


const JobTrackerTableBase = (props) => {

  const UsersJobs = () => {
    let data = [];
    for (let key in props.jobs) {
      data.push(props.jobs[key])
    }
    return data.map((job, key) => {
      return (
        <>
          <tr>
            <td>{key + 1}</td>
            <td>{job.company}</td>
            <td>{job.position}</td>
            <td>{job.date}</td>
            <td>{job.referral}</td>
            <td>{job.source}</td>
          </tr>
        </>
      )
    })
  } 



    return(
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Position</th>
            <th>Date</th>
            <th>Referral (If any):</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <UsersJobs />
        </tbody>
      </Table>
    )
};


export default JobTrackerTableBase;

