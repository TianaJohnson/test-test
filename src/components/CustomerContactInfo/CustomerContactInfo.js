import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

class CustomerContactInfo extends Component {

    //may not need this page..
    render() {
        return (
            <div className="project_contact">
            <Card className="contact_card">
            <div className="project_contact_name">
                <h1>Contact Info</h1>
                <br/>
                </div>
                <br/>
                </Card>           
            </div>
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(CustomerContactInfo);