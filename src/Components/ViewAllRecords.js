import React from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const apiUrl = 'https://localhost:44375/api/employee';

class ViewAllRecords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            users: [],
            response: {}

        }
    }

    componentDidMount() {
        axios.get(apiUrl + '/GetUserDetails').then(response => response.data.result).then(
            (result) => {
                this.setState({
                    users: result
                });
                console.log("Data", this.state.users)
            },
            (error) => {
                this.setState({ error });
            }
        )
    }


    deleteUser(userId) {
        const { users } = this.state;
        axios.delete(apiUrl + '/DeleteUserDetails/' + userId).then(result => {
            alert(result.data);
            this.setState({
                response: result,
                users: users.filter(user => user.UserId !== userId)
            });
        });
    }

    

    render() {
        const { error, users } = this.state;
        if (error) {
            return (
                <div>Error:{error.message}</div>
            )
        }
        else {
            return (
                <div>

                    <Table className="mytable table-bordered">
                        <thead className="btn-primary tcenter">
                            <tr>
                                <th>UserId</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Designation</th>
                                <th>Salary</th>
                                <th>MobileNumber</th>

                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr>
                                    <td>{user.userId}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.salary}</td>
                                    <td>{user.mobileNumber}</td>

                                    <td><Button variant="info" onClick={() => this.props.editUser(user.userId)}>Edit</Button>
                                           
                                        <Button variant="danger" onClick={() => this.deleteUser(user.userId)}>Delete</Button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

export default ViewAllRecords;  