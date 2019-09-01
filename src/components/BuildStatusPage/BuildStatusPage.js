import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class BuildStatusPage extends Component {


    //may not need this page..
    render() {
        return (
            <div className="build_main">
                <Card className="build_card">
                <h1>Build Status</h1>
                </Card>
            </div>
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(BuildStatusPage);