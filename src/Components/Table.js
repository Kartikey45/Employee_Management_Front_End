import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.UserId}
                </td>
                <td>
                    {this.props.obj.FirstName}
                </td>
                <td>
                    {this.props.obj.LastName}
                </td>
                <td>
                    {this.props.obj.Gender}
                </td>
                <td>
                    {this.props.obj.Email}
                </td>
                <td>
                    {this.props.obj.Address}
                </td>
                <td>
                    {this.props.obj.Designation}
                </td>
                <td>
                    {this.props.obj.Salary}
                </td>
                <td>
                    {this.props.obj.MobileNumber}
                </td>
                <td>
                    {this.props.obj.Password}
                </td>
            </tr>
        );
    }
}
export default Table;