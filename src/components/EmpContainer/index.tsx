import React, { Component } from 'react';
import EmpTable from "../EmpTable";
import SearchBar from "../SearchBar";
import API from "../../utils/API";
import sortEmp from "../../utils/sortEmp";
import "./style.css";

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
                let empData = res.data.results.map(
                    (emp:
                        {
                            id: { value: string; };
                            picture: { medium: string; };
                            name: { first: string; last: string; };
                            email: string; cell: string;
                        }) => {
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

    handleInput = (event: { target: { value: any; name: any; }; }) => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        }, () => {
            if (this.state.search) {
                let filteredArr = sortEmp.searchEmp(this.state.search, this.state.sortedArr);
                this.setState({
                    empArr: filteredArr,
                    orderBy: ""
                })
            } else {
                this.setState({
                    empArr: this.state.sortedArr,
                    orderBy: ""
                })
            }
        });
    };

    render() {
        return (
            <>
                <div className="searchContainer">
                    <SearchBar handleInput={this.handleInput} />
                </div>
                <EmpTable results={this.state.empArr} handleSort={this.handleSort} orderBy={this.state.orderBy} order={this.state.order} />
            </>
        )
    }
}

export default EmpContainer;