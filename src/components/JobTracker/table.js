import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'


const JobTrackerTableBase = (props) => {

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
          {/* <UsersJobs /> */}
        </tbody>
      </Table>
    )
};


export default JobTrackerTableBase;

