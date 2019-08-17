import React, { Component } from 'react';
import JobTrackerForm from './form'
import JobTrackerTable from './table';
import {withFirebase} from '../Firebase';


const INITIAL_STATE = {
  company: '',
  position: '',
  date: '',
  referral: '',
  source: '',
  error: null,
};

const JobTracker = () => {
  return(
    <JobTrackerPage />
  )
}
class JobTrackerBase extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {company, position, date, referral, source} = this.state;
    // Send New Job Info to Firebase db
    this.props.firebase.jobs.push({
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

    return(
      <>
        <JobTrackerForm onChange={this.onChange} onSubmit={this.onSubmit} jobVars={this.state} />
        <JobTrackerTable />
      </>
    )
  }
};


const JobTrackerPage = withFirebase(JobTrackerBase)
export default JobTracker;
export { JobTrackerPage };

