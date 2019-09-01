import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const JobTrackerTableBase = (props) => {

  const UsersJobs = () => {
    let data = [];
    for (let key in props.jobs) {
      data.push(props.jobs[key])
    }
    return data.map((job, index) => {
      return (
        <>
          <tr key={job.id}>
            <td>{index + 1}</td>
            <td>{job.company}</td>
            <td>{job.position}</td>
            <td>{job.date}</td>
            <td>{job.referral}</td>
            <td>{job.source}</td>
            <td>
              <select name="status" onChange={props.onChange} value={job.status}>
                <option value="No Response">No Response</option>
                <option value="Pass">Pass</option>
                <option value="Phone Screen">Phone Screen</option>
                <option value="Next Step">Next Step</option>
              </select></td>
            <td><Button variant="secondary" size="sm" onClick={() => props.update(job.id)}>Update Status</Button></td>
            <td><Button variant="secondary" size="sm" onClick={() => props.delete(job.id)}>Remove</Button></td>
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

