import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import { compose } from 'recompose';
import {Form, Row, Col, Button} from 'react-bootstrap';
import { withFirebase } from 'firebase';
import JobTrackerForm from './form'

const JobTrackerPage = () => (
  <>
    <JobTracker />
  </>
)

const INITIAL_STATE = {
  company: '',
  position: '',
  date: '',
  referral: '',
  source: '',
  error: null,
};

class JobTracker extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {company, position, date, referral, source} = this.state;
    // Send New Job Info to Firebase db
    this.props.firebase.jobs.set({
     company: company,
     position: position,
     date: date,
     referral: referral,
     source: source,
    });
    console.log("submit", this.state)
    this.setState({ ...INITIAL_STATE });
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {company, position, date, referral, source} = this.state;

    return(
      <>
      <JobTrackerForm onChange={this.onChange} onSubmit={this.onSubmit} jobVars={this.state} />
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
      </>
    )
  }
};



export default JobTrackerPage;


export { JobTracker }
