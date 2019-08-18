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
  loading: false
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
    let count = 0;
    this.props.firebase.jobs(this.props.firebase.auth.O).push({
      count: {
        company,
        position,
        date,
        referral,
        source,
      }
    }).then(()=> {
      this.getJobs();
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

  getJobs = () => {
    this.props.firebase.jobs(this.props.firebase.auth.O).on('value', snapshot => {
      const jobObject = snapshot.val();
      this.setState({jobs: jobObject});
      for (var key in jobObject) {
        console.log(key.job)
      }
    })
  }

  render() {
    return(
      <>
        <JobTrackerForm onChange={this.onChange} onSubmit={this.onSubmit} jobVars={this.state} />
        <JobTrackerTable jobs={this.state.jobs}/>
        <button onClick={this.getJobs}>Get Jobs</button>
      </>
    )
  }
};


const JobTrackerPage = withFirebase(JobTrackerBase);

export default JobTracker;
export { JobTrackerPage };

