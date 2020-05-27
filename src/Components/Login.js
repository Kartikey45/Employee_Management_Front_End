import React from 'react';
import './Style.css';
import axios from 'axios';


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
        console.log(this.state ," thi is state ");
        
        let user = {
            Email: this.state.Email,
            Password: this.state.Password
        };
        console.log("user creditails ", user);
        

        axios.post(`https://localhost:44375/api/user/login`, user )
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
                    <input type="checkbox" /> <b>Remember me</b><br />
                    <button type="submit" onClick={() => { this.login() }}>Login</button><br />
                    <button type="reset" className="cancellbutton"> Reset</button>
                </form>
            </div>
        );
    }
}

export default Login;