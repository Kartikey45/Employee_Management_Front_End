import React, { Component } from 'react';
import axios from 'axios';

export class ViewAllRecords extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://localhost:44375/api/employee')
            .then(res => {
                console.log("successfull", res);
                this.setState({ posts: res.data });
            })
            .catch((err) => {
                console.log("error", err);
            })
    }
    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                List of Records
                {
                    posts.length ?
                        posts.map(post => <div key={post.id}>{post.title}</div>) :
                        null
                }
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        );
    }
}

export default ViewAllRecords;