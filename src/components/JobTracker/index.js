import React, { Component } from 'react';
import JobTrackerForm from './form'
import JobTrackerTable from './table';
import {withFirebase} from '../Firebase';
import Spinner from 'react-bootstrap/Spinner';


const INITIAL_STATE = {
  company: '',
  position: '',
  date: '',
  id: '',
  referral: '',
  source: '',
  loading: false,
  status: 'No Response'
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
    this.getJobs();
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {company, position, date, referral, source, status} = this.state;
    this.props.firebase.jobs(this.props.firebase.auth.O).push({
        company,
        position,
        date,
        referral,
        source,
        status,
    }).then((obj)=> {
      this.setState({
        ...INITIAL_STATE
      })
      this.getJobs();
    })
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onStatusChange = (event) => {
    console.log("IN CHANGE", event.target.value)
    this.setState({
      status: event.target.value
    });
  };

  getJobs = () => {
    this.props.firebase.jobs(this.props.firebase.auth.O).on('value', snapshot => {
      let data = [];
      const jobObject = snapshot.val();
      for (let key in jobObject) {
        jobObject[key].id = key;
        data.push(jobObject[key])
      }
      this.setState({
        jobs: data,
        loading: false
      });
    })
  }

  handleDelete = (id) => {
    console.log("delete", id);
    this.props.firebase.jobs(this.props.firebase.auth.O).child(id).remove()
      .then(() => {
        this.getJobs();
      });
  }

  handleUpdate = (id) => {
    console.log("update", id);
    // update route to firebase here...
    this.props.firebase.jobs(this.props.firebase.auth.O).child(id).update({status: this.state.status})
    .then(() => {
      console.log("successfully updated bb")
      this.getJobs();
    });
  }

  render() {
    const { loading } = this.state;
    return(
      <>
        <JobTrackerForm onChange={this.onChange} onSubmit={this.onSubmit} jobVars={this.state} />
        <JobTrackerTable jobs={this.state.jobs} delete={this.handleDelete} onChange={this.onStatusChange} update={this.handleUpdate}/>
        {loading && <div><Spinner animation="grow" variant="dark" /></div>}
      </>
    )
  }
};

const JobTrackerPage = withFirebase(JobTrackerBase);

export default JobTracker;
export { JobTrackerPage };

