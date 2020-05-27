import React from 'react';
import axios from 'axios';
import './Style.css';

class AddEmployee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserId: 0,
            FirstName: '',
            LastName: '',
            Gender: '',
            Email: '',
            Address: '',
            Designation: '', 
            Salary: 0.00,
            MobileNumber: '',
            Password: ''
        }
    }
    AddEmployeeData = () => {
        axios.post('https://localhost:44375/api/user/register', {
            UserId: this.state.UserId, FirstName: this.state.FirstName,
            LastName: this.state.LastName, Gender: this.state.Gender,
            Email: this.state.Email, Address: this.state.Address,
            Designation: this.state.Designation, Salary: this.state.Salary,
            MobileNumber: this.state.MobileNumber, Password: this.state.Password
        })
            .then(json => {
                if (json.data.Status === 'Success') {
                    console.log(json.data.Status);
                    alert("Data Save Successfully");
                    //this.props.history.push('/Studentlist')
                }
                else {
                    alert('Data Saved successfully');
                    
                    //this.props.history.push('/Studentlist')
                }
            })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render() {
        return (
            <div className="container register">
                <h2>Employee Management</h2><br /> <br />
                <label><strong>User Id : </strong></label><br />
                <input type="text" placeholder="Enter user Id" name="UserId" value={this.state.UserId} onChange={this.handleChange} required /><br /><br />

                <label><strong>First Name : </strong></label><br />
                <input type="text" placeholder="Enter First Name" name="FirstName" value={this.state.FirstName} onChange={this.handleChange} required /><br /><br />

                <label><strong>Last Name : </strong></label><br />
                <input type="text" placeholder="Enter Last Name" name="LastName" value={this.state.LastName} onChange={this.handleChange} required /><br /><br />

                <label><strong>Gender : </strong></label><br />
                <input type="text" placeholder="Enter the gender" name="Gender" value={this.state.Gender} onChange={this.handleChange} required /><br /><br />

                <label><strong>Email : </strong></label><br />
                <input type="email" placeholder="Enter Email" name="Email" required value={this.state.Email} onChange={this.handleChange} /><br /><br />

                <label><strong>Address : </strong></label><br />
                <input type="text" placeholder="Enter Address" name="Address" required value={this.state.Address} onChange={this.handleChange} /><br /><br />

                <label><strong>Designation : </strong></label><br />
                <input type="text" placeholder="Enter Designation" name="Designation" value={this.state.Designation} onChange={this.handleChange} required /><br /><br />

                <label><strong>Salary : </strong></label><br />
                <input type="number" placeholder="Enter Salary" name="Salary" value={this.state.Salary} onChange={this.handleChange} required /><br /><br />

                <label><strong>Mobile Number : </strong></label><br />
                <input type="number" placeholder="Enter Mobile Number" name="MobileNumber" value={this.state.MobileNumber} onChange={this.handleChange} required /><br /><br />

                <label><strong>Password : </strong></label><br />
                <input type="password" placeholder="Enter Password" name="Password" value={this.state.Password} onChange={this.handleChange} required /><br /><br />

                <button type="submit" onClick={this.AddEmployeeData} className="btn btn-success">Register</button> &nbsp; <button type="reset" className="cancellbutton"> Reset</button>
            </div>
        );
    }
}
export default AddEmployee;