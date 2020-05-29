import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';

class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.initialState = {
            userId: '',
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            address: '',
            designation: '', 
            salary: '',
            mobileNumber: '',
            password: ''
        }

        if (props.user.UserId) {
            this.state = props.user
        } else {
            this.state = this.initialState;
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState(this.initialState);
    }
    render() {
        let pageTitle;
        let actionStatus;
        if (this.state.userId) {

            pageTitle = <h2>Edit User</h2>
            actionStatus = <b>Update</b>
        } else {
            pageTitle = <h2>Add User</h2>
            actionStatus = <b>Save</b>
        }

        return (
            <div>
                <h2> {pageTitle}</h2>
                <Row>
                    <Col sm={7}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="userId">
                                <Form.Label>userId</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="userId"
                                    value={this.state.userId}
                                    onChange={this.handleChange}
                                    placeholder="user Id" />
                            </Form.Group>
                            <Form.Group controlId="firstName">
                                <Form.Label>firstName</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    placeholder="first Name" />
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                <Form.Label>lastName</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                    placeholder="last Name" />
                            </Form.Group>
                            <Form.Group controlId="gender">
                                <Form.Label>gender</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={this.handleChange}
                                    placeholder="gender" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>email</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="email" />
                            </Form.Group>
                            <Form.Group controlId="address">
                                <Form.Label>address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                    placeholder="address" />
                            </Form.Group>

                            <Form.Group controlId="designation">
                                <Form.Label>designation</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="designation"
                                    value={this.state.designation}
                                    onChange={this.handleChange}
                                    placeholder="designation" />
                            </Form.Group>
                            <Form.Group controlId="salary">
                                <Form.Label>salary</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="salary"
                                    value={this.state.salary}
                                    onChange={this.handleChange}
                                    placeholder="salary" />
                            </Form.Group>
                            <Form.Group controlId="mobileNumber">
                                <Form.Label>mobile Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="mobileNumber"
                                    value={this.state.mobileNumber}
                                    onChange={this.handleChange}
                                    placeholder="mobile Number" />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>password</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder="password" />
                            </Form.Group>

                            <Form.Group>
                               
                                <Button variant="success" type="submit">{actionStatus}</Button>

                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AddUser;  