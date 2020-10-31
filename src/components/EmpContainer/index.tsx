import React, { Component } from 'react';
import EmpTable from "../EmpTable";
import API from "../../utils/API";

class EmpContainer extends Component {

    state = {
        employees: []
    };

    componentDidMount() {
        API.getEmployees()
            .then((res: { data: { results: any[]; }; }) => {
                let empData = res.data.results.map((emp) => {
                    return {
                        id: emp.id.value,
                        picture: emp.picture.medium,
                        firstName: emp.name.first,
                        lastName: emp.name.last,
                        email: emp.email,
                        cell: emp.cell
                    }
                })
                this.setState({
                    employees: empData
                })
                return this.state.employees;
            })
            .catch((err: any) => console.log(err))
    }

    render() {
        return (
            <EmpTable results={this.state.employees} />)
    }
}

export default EmpContainer;