import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

function EmpTable(props: { results: any[]; orderBy: string; order: string; handleSort: (arg0: string, arg1: any) => void; }) {

    const empArr = props.results;
    const [sortedField, setSortedField] = useState(null);
    const sortedArr = [...empArr];

    if (sortedField)
        sortedArr.sort((a, b) => {
            if (a.firstName < b.firstName) {
                return -1;
            }
            if (a.firstName > b.firstName) {
                return 1;
            }
            return 0;
        });

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

    let rows = props.results.map((emp) => {
        return (
            <TableRow hover key={emp.id}>
                <TableCell align="center">{emp.id}</TableCell>
                <TableCell align="center"><img alt={`${emp.firstName} ${emp.lastName}`} src={`${emp.picture}`}></img></TableCell>
                <TableCell align="center">{emp.firstName}</TableCell>
                <TableCell align="center">{emp.lastName}</TableCell>
                <TableCell align="center">{emp.email}</TableCell>
                <TableCell align="center">{emp.cell}</TableCell>
            </TableRow>
        )
    });

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID
                        <TableSortLabel active={props.orderBy === "firstName"} onClick={() => props.handleSort("id", props.order)}></TableSortLabel>
                        </TableCell>
                        <TableCell align="center">Photo
                        <TableSortLabel active={props.orderBy === "photo"} onClick={() => props.handleSort("photo", props.order)}></TableSortLabel>
                        </TableCell>
                        <TableCell align="center">First Name
                        <TableSortLabel active={props.orderBy === "firstName"} onClick={() => props.handleSort("firstName", props.order)}></TableSortLabel>
                        </TableCell>
                        <TableCell align="center">Last Name
                        <TableSortLabel active={props.orderBy === "lastName"} onClick={() => props.handleSort("lastName", props.order)}></TableSortLabel>
                        </TableCell>
                        <TableCell align="center">Email
                        <TableSortLabel active={props.orderBy === "email"} onClick={() => props.handleSort("email", props.order)}></TableSortLabel>
                        </TableCell>
                        <TableCell align="center">Phone Number
                        <TableSortLabel active={props.orderBy === "phone"} onClick={() => props.handleSort("cell", props.order)}></TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>
        </TableContainer >
    )
};

export default EmpTable;