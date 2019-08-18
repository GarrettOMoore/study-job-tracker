import React from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';


const JobTrackerFormBase = (props) => {
	const {company, position, date, referral, source} = props.jobVars;

	const isInvalid =
	company === '' ||
	position === '' ||
	date === '' ||
	source === '';
	
    return(
      <>
        <div className="job-form">
          <h4>Add New Job</h4>
          <Form>
            <Row>
              <Col lg={true}>
                <Form.Control name="company" placeholder="Company" onChange={props.onChange} value={company} />
              </Col>
              <Col lg={true}>
                <Form.Control name="position" placeholder="Position" onChange={props.onChange} value={position} />
              </Col>
            </Row>
            <Row>
              <Col lg={true}>
                <Form.Control name="date" placeholder="Date" onChange={props.onChange} value={date} />
              </Col>
              <Col lg={true}>
                <Form.Control name="referral" placeholder="Referral" onChange={props.onChange} value={referral} />
              </Col>
              <Col lg={true}>
                <Form.Control name="source" placeholder="Source" onChange={props.onChange} value={source} />
              </Col>
            </Row>
            <Button variant="dark"  disabled={isInvalid} onClick={props.onSubmit}>Submit</Button>
          </Form>
        </div>
      </>
    )
};


export default JobTrackerFormBase;

