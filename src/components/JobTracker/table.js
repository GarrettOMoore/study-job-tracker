import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const JobTrackerTableBase = (props) => {

  const UsersJobs = () => {
    let data = [];
    for (let key in props.jobs) {
      data.push(props.jobs[key])
    }
    return data.map((job, key) => {
      return (
        <>
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{job.company}</td>
            <td>{job.position}</td>
            <td>{job.date}</td>
            <td>{job.referral}</td>
            <td>{job.source}</td>
            <td><select>
              <option value="no-response">No Response</option>
              <option value="pass">Pass</option>
              <option value="phone-screen">Phone Screen</option>
              <option value="next-step">Next Step</option>
            </select></td>
            <td><Button variant="secondary" size="sm" onClick={() => props.delete(job.company)}>Remove</Button></td>
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
            <th>Referral</th>
            <th>Source</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <UsersJobs />
        </tbody>
      </Table>
    )
};


export default JobTrackerTableBase;

