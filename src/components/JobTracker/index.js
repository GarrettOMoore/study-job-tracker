import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import {Form, Row, Col, Button} from 'react-bootstrap';

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

  // onSubmit = (event) => {
  //   const { username, email, passwordOne } = this.state;

  //   this.props.firebase
  //     .doCreateUserWithEmailAndPassword(email, passwordOne)
  //     .then(authUser => {
  //       return this.props.firebase
  //         .user(authUser.user.uid)
  //         .set({
  //           username,
  //           email,
  //         });
  //     }).then(() => {
  //       this.setState({ ...INITIAL_STATE });
  //       this.props.history.push(ROUTES.HOME);
  //     })
  //     .catch(error => {
  //       this.setState({ error });
  //     });

  //   event.preventDefault();
  // }

  onChange = event => {
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return(
      <>
        <div className="job-form">
          <h4>Add New Job</h4>
          <Form>
            <Row>
              <Col lg={true}>
                <Form.Control name="company" placeholder="Company" onChange={this.onChange} />
              </Col>
              <Col lg={true}>
                <Form.Control name="position" placeholder="Position" onChange={this.onChange} />
              </Col>
            </Row>
            <Row>
              <Col lg={true}>
                <Form.Control name="date" placeholder="Date" onChange={this.onChange} />
              </Col>
              <Col lg={true}>
                <Form.Control name="referral" placeholder="Referral" onChange={this.onChange} />
              </Col>
              <Col lg={true}>
                <Form.Control name="source" placeholder="Source" onChange={this.onChange} />
              </Col>
            </Row>
            <Button variant="dark" type="submit">Submit</Button>
          </Form>
        </div>
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

export default JobTracker;