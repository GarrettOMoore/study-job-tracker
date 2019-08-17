import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import {Form, Row, Col, Button} from 'react-bootstrap';
import { withFirebase } from 'firebase';

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
    const {company, position, date, referral, source} = this.state;
    event.preventDefault();
    // Send New Job Info to Firebase db
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
        <div className="job-form">
          <h4>Add New Job</h4>
          <Form>
            <Row>
              <Col lg={true}>
                <Form.Control name="company" placeholder="Company" onChange={this.onChange} value={company} />
              </Col>
              <Col lg={true}>
                <Form.Control name="position" placeholder="Position" onChange={this.onChange} value={position} />
              </Col>
            </Row>
            <Row>
              <Col lg={true}>
                <Form.Control name="date" placeholder="Date" onChange={this.onChange} value={date} />
              </Col>
              <Col lg={true}>
                <Form.Control name="referral" placeholder="Referral" onChange={this.onChange} value={referral} />
              </Col>
              <Col lg={true}>
                <Form.Control name="source" placeholder="Source" onChange={this.onChange} value={source} />
              </Col>
            </Row>
            <Button variant="dark" onClick={this.onSubmit}>Submit</Button>
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
