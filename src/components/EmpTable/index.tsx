import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function EmpTable(props: { results: any[]; }) {

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
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Photo</TableCell>
                        <TableCell align="center">First Name</TableCell>
                        <TableCell align="center">Last Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Phone Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default EmpTable;