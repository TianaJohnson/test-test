import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


class ProjectPageRows extends Component {
    // componentDidMount() {
    //     this.props.dispatch({ type: 'FETCH_PROJECT' });
    // }


    editCust = () => {
        this.props.history.push(`updatecustomer/${this.props.client.id}`);
    }
    // on click of btn sends user to customer file page
    custFile = () => {
        this.props.history.push(`/file/${this.props.client.id}`);
    }

    // breakdown of customer info in the table from admin page
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.work.project_name}</TableCell>
                <TableCell>{this.props.work.brand}</TableCell>
                <TableCell>{this.props.work.progress_status}</TableCell>
                <TableCell>{this.props.work.projected_due_date}</TableCell>
            </TableRow>
        )
    }
}

const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProjectPageRows);