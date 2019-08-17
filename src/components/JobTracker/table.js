import React, { Component } from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { withFirebase } from 'firebase';


const JobTrackerTableBase= (props) => {

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
          <tr>
            <td>1</td>
            <td>Google</td>
            <td>Software Engineer II</td>
            <td>8/14/2019</td>
            <td>John Smith</td>
            <td>Glassdoor</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pinterest</td>
            <td>Front End Engineer</td>
            <td>8/15/2019</td>
            <td>None</td>
            <td>Indeed</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Expedia</td>
            <td>React Developer</td>
            <td>8/12/2019</td>
            <td>Sarah Jones</td>
            <td>Built In Seattle</td>
          </tr>
        </tbody>
      </Table>
    )
};


export default JobTrackerTableBase;

