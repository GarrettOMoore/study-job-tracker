import React, { Component } from 'react';
import JobTrackerForm from './form'
import JobTrackerTable from './table';
import {withFirebase} from '../Firebase';
import { compose } from 'recompose';
import { withAuthentication, AuthUserContext } from '../Session';


const INITIAL_STATE = {
  company: '',
  position: '',
  date: '',
  referral: '',
  source: '',
  error: null,
  uid: ''
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
    const {company, position, date, referral, source, uid} = this.state;
    // Send New Job Info to Firebase db
    this.props.firebase.jobs(this.props.firebase.auth.O).push({
      job: {
        company,
        position,
        date,
        referral,
        source,
      }
    }).then(()=> {
      this.setState({
        ...INITIAL_STATE
      })
      console.log("success");
    })
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return(
      <>
      {/* <AuthUserContext.Consumer> */}
        <JobTrackerForm onChange={this.onChange} onSubmit={this.onSubmit} jobVars={this.state} />
        <JobTrackerTable />
      {/* </AuthUserContext.Consumer> */}
      </>
    )
  }
};


const JobTrackerPage = withFirebase(JobTrackerBase);

export default JobTracker;
export { JobTrackerPage };

