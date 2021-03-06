import React, { Component } from 'react';

import { Button } from 'react-bootstrap';
import ViewAllRecords from './ViewAllRecords';
import AddUser from './AddUser';
import axios from 'axios';

const apiUrl = 'https://localhost:44375/api/employee/';

class UserActions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAddUser: false,
            error: null,
            response: {},
            userData: {},
            isEdituser: false,
            isUserDetails: true,
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onCreate() {
        this.setState({ isAddUser: true });
        this.setState({ isUserDetails: false });
    }

    onDetails() {
        this.setState({ isUserDetails: true });
        this.setState({ isAddUser: false });
    }

    onFormSubmit(data) {
        this.setState({ isAddUser: true });
        this.setState({ isUserDetails: false });
        if (this.state.isEdituser) {
            axios.put(apiUrl + 'UpdateEmployeeDetails', data).then(result => {
                alert(result.data);
                this.setState({
                    response: result,
                    isAddUser: false,
                    isEdituser: false
                })
            });
        } else {

            axios.post(apiUrl + 'InsertUserDetails', data).then(result => {
                alert(result.data);
                this.setState({
                    response: result,
                    isAddUser: false,
                    isEdituser: false
                })
            });
        }
    }

    editUser = userId => {

        this.setState({ isUserDetails: false });
        axios.get(apiUrl + "GetUserDetailsById/" + userId).then(result => {

            this.setState({
                isEdituser: true,
                isAddUser: true,
                userData: result.data
            });
        },
            (error) => {
                this.setState({ error });
            }
        )
    }

    render() {

        let userForm;
        if (this.state.isAddUser || this.state.isEditUser) {

            userForm = <AddUser onFormSubmit={this.onFormSubmit} user={this.state.userData} />

        }
        return (
            <div className="App">
                
                    <h1 style={{ textAlign: 'center' }}>Employee List</h1>
                    <hr></hr>
                    {!this.state.isUserDetails && <Button variant="primary" onClick={() => this.onDetails()}> User Details</Button>}
                    {!this.state.isAddUser && <Button variant="primary" onClick={() => this.onCreate()}>Add User</Button>}
                    <br></br>
                    {!this.state.isAddUser && <ViewAllRecords editUser={this.editUser} />}
                    {userForm}
                
            </div>
        );
    }
}

export default UserActions;











