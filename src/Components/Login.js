import React from 'react';
import './Style.css';
import axios from 'axios';
import UserActions from './UserActions';

const apiUrl = `https://localhost:44375/api/user/login`;

class Login extends React.Component {
   constructor() {
        super();
        this.state = {
            Email: '',
            Password: ''
        }
    }
        

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state ," this is state ");
        
        let user = {
            Email: this.state.Email,
            Password: this.state.Password
        };
        console.log("user creditails ", user);
        

        axios.post(apiUrl, user )
            .then(res => {
                console.log(" suceesfull", res);
                console.log(res.data);
                
            }).catch((err)=>{
                console.log(" error ",err);
                
            })
    }

    login() {
        console.warn(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Employee Management</h1><br /> <br />
                    <label><strong>Email : </strong></label><br />
                    <input type="text" placeholder="Enter Email"  value={this.state.Email} name="Email" onChange={this.handleChange} required /><br /><br />
                    <label><strong>Password : </strong></label><br />
                    <input type="password" placeholder="Enter Password" value={this.state.Password} name="Password" onChange={this.handleChange} required /><br /><br />
                    <input type="checkbox" /> <b>Remember me</b><br /><br/>
                    <button type="submit" className="btn btn-primary" onClick={() => { this.login() }}>Login</button>
                    &nbsp;
                   <a type="button" href="/Registration" className="btn btn-primary"> Signup</a>
                </form>
            </div>
        );
    }
}

export default Login;