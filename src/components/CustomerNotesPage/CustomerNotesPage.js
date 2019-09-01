import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CustomerNotesPage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PROJECT', payload: { id: this.props.match.params.id } });      
    }
    addCustNotesBtn = () => {
        alert('Sent!');
        this.props.history.push('/home');
    }

    //may not need this page..
    render() {
        const project = this.props.reduxStore.project.projectReducer;
        return (
            <div className="notes_main">
                <Card className="notes_card">
                    <div className="notes_text">
                        <h1>Notes from Build:</h1>
                        <h2>Current build status: {project.progress_status}</h2>
                        <TextField
                            id="outlined-notes"
                            className="new-cust-intake"
                            margin="normal"
                            variant="outlined"
                            // style={{ margin:  }}
                            label="Project Notes"
                            multiline rows="8"
                            fullWidth
                            placeholder="Date/Status/Author"
                        // value={project.project_name}
                        // onChange={this.handleChange('project_name')}
                        />
                        <Button onClick={this.addCustomer}
                            style={{ marginLeft: 30 }}
                            variant="contained"
                            color="primary"
                            onClick={this.addCustNotesBtn}
                            size="large">
                            Add Note
                        </Button>
                        <Card className="card_notes">
                            <p>02/16/2019</p> <p>Status: Drawning Approval.</p>
                            Author: Chicken
                    <p> Customer has checked over and approved of the drawing and put down a deposite on the frame. Please proceed with the purchuse of required material for build.  </p>

                        </Card>
                        <Card className="card_notes">
                            <p>01/16/19</p>     <p>Status: Waiting for confirmation.</p>
                            Author: Eric
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus libero, laoreet vitae dignissim facilisis, aliquam vitae tortor. Cras dapibus augue at suscipit lacinia. Curabitur odio velit, auctor in pretium quis, varius vitae lectus. Pellentesque sed commodo enim. Nam tincidunt eget tortor vitae dapibus. In tincidunt mi scelerisque, tempus est at, ullamcorper nunc. Sed pharetra dignissim justo, et blandit ligula eleifend ut. Donec iaculis pretium felis. Phasellus eros purus, luctus eget rhoncus id, eleifend ut ex.</p>
                        </Card>
                        <Card className="card_notes">
                            <p>12/20/2018</p>     <p>Status: Open</p>
                            Author: Chicken
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus libero, laoreet vitae dignissim facilisis, aliquam vitae tortor. Cras dapibus augue at suscipit lacinia. Curabitur odio velit, auctor in pretium quis, varius vitae lectus. Pellentesque sed commodo enim. Nam tincidunt eget tortor vitae dapibus. In tincidunt mi scelerisque, tempus est at, ullamcorper nunc. Sed pharetra dignissim justo, et blandit ligula eleifend ut. Donec iaculis pretium felis. Phasellus eros purus, luctus eget rhoncus id, eleifend ut ex.</p>
                        </Card>
                        <br />
                    </div>
                    <br />
                </Card>
            </div>
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(CustomerNotesPage);