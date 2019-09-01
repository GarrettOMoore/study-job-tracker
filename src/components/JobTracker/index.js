import React, { Component } from 'react';
import JobTrackerForm from './form'
import JobTrackerTable from './table';
import {withFirebase} from '../Firebase';
import Spinner from 'react-bootstrap/Spinner';


const INITIAL_STATE = {
  company: '',
  position: '',
  date: '',
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
    this.props.firebase.jobs(this.props.firebase.auth.O).once('value', snapshot => {
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

  getJobs = () => {
    this.props.firebase.jobs(this.props.firebase.auth.O).on('value', snapshot => {
      const jobObject = snapshot.val();
      this.setState({jobs: jobObject});
    })
  }

  handleDelete = (id) => {
    console.log("delete", id);
    this.props.firebase.jobs(this.props.firebase.auth.O).child(id).remove()
      .then(() => {
        this.getJobs();
      });
  }

  handleUpdate(id) {
    console.log("update", id);
    // update route to firebase here...
  }

  render() {
    const { loading } = this.state;
    return(
      <>
        <JobTrackerForm onChange={this.onChange} onSubmit={this.onSubmit} jobVars={this.state} />
        <JobTrackerTable jobs={this.state.jobs} delete={this.handleDelete} onChange={this.onChange}/>
        {loading && <div><Spinner animation="grow" variant="dark" /></div>}
      </>
    )
  }
};

const JobTrackerPage = withFirebase(JobTrackerBase);

export default JobTracker;
export { JobTrackerPage };

