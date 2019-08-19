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
  loading: false,
};

const JobTracker = () => {
  return(
      <JobTrackerPage />
  )
}
class JobTrackerBase extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      ...INITIAL_STATE
     }
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.jobs(this.props.firebase.auth.O).once('value', snapshot => {
      let data = [];
      const jobObject = snapshot.val();
      for (let key in jobObject) {
        data.push(jobObject[key])
      }
      this.setState({
        jobs: data,
        loading: false
      });
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {company, position, date, referral, source} = this.state;
    this.props.firebase.jobs(this.props.firebase.auth.O).push({
        company,
        position,
        date,
        referral,
        source,
    }).then(()=> {
      this.setState({
        ...INITIAL_STATE
      })
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
    })
  }

  render() {
    const { loading } = this.state;
    return(
      <>
        <JobTrackerForm onChange={this.onChange} onSubmit={this.onSubmit} jobVars={this.state} />
        <JobTrackerTable jobs={this.state.jobs}/>
        {loading && <div>Loading...</div>}
        <button onClick={this.getJobs}>Get Jobs</button>
      </>
    )
  }
};

const JobTrackerPage = withFirebase(JobTrackerBase);

export default JobTracker;
export { JobTrackerPage };

