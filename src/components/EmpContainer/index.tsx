import React, { Component } from 'react';
import EmpTable from "../EmpTable";
import API from "../../utils/API";
import sortEmp from "../../utils/sortEmp";

class EmpContainer extends Component {

    state = {
        empArr: [],
        sortedArr: [],
        search: '',
        orderBy: '',
        order: "asc"
    };

    componentDidMount() {
        API.getEmployees()
            .then((res) => {
                let empData = res.data.results.map((emp: { id: { value: any; }; picture: { medium: any; }; name: { first: any; last: any; }; email: any; cell: any; }) => {
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
                    empArr: empData,
                    sortedArr: empData
                })
                return this.state.empArr;
            })
            .catch((err: any) => console.log(err))
    }

    handleSort = (column: any, order: string) => {
        let sorted = [...this.state.empArr].sort(sortEmp.compareValues(column, order));
        let newOrder = order === "asc" ? "desc" : "asc"
        this.setState({
            empArr: sorted,
            orderBy: column,
            order: newOrder
        });
    }

    render() {
        return (
            <EmpTable results={this.state.empArr} handleSort={this.handleSort} orderBy={this.state.orderBy} order={this.state.order}  />)
    }
}

export default EmpContainer;