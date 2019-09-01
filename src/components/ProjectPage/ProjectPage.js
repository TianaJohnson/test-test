import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
// import axios from 'axios';


class ProjectPage extends Component {

    //client_id: this.props.match.params.id,
    componentDidMount() {
        // this.props.dispatch({ type: 'FETCH_FOCUS_CUSTOMER' });
        // this.custName();
        this.props.dispatch({ type: 'FETCH_PROJECT', payload: { id: this.props.match.params.id } });
        
    }
    //Send project info to saga
    projectIn = (event) => {
        console.log('project In');
        const action = {
            type: 'ADD_PROJECT',
            payload: this.props.reduxStore.project.projectReducer,
        };
        console.log('sending to project saga')
        this.props.dispatch(action);
        this.setState({
            customer_name: '',
            project_name: '',
            brand: '',
            deep_custom: false,
            project_desc: '',
            cust_height: '',
            cust_inseam: '',
            cust_torso: '',
            cust_flex: 0,
            cust_reach: '',
            head_tube: '',
            steerer_tube: '',
            down_tube: '',
            seat_tube: '',
            bottom_bracket: '',
            seat_stays: '',
            chain_stays: '',
            drop_outs: '',
            brake_type: '',
            wheel_size: '',
            tire_clearance: '',
            progress_status: '',
            date_created: new Date(),
            projected_due_date: '',
            client_id: this.props.match.params.id,
        })
        this.props.history.push('/home');
    }
    // make axios request to /intake/${this.props.match.params.id}
    // To display customers name on the file attached to them
    // custName = () => {
    //     console.log('Get axios ');
    //     axios({
    //         method: 'GET',
    //         url: `/intake/${this.props.match.params.id}`
    //     }).then((response) => {
    //         console.log('Get', response);
    //         this.setState({
    //             customer_name: response.data.customers_full_name,
    //         });
    //     });
    // }

    handleChange = (key) => (event) => {
        const action = {
            type: 'SET_PROJECT_PROPERTY',
            payload: { key: key, value: event.target.value },
        };
        console.log('sending to project saga')
        this.props.dispatch(action);
    }

    // // input onChange handles
    // handleChangeProjectName = (event) => {
    //     console.log('name')
    //     this.setState({
    //         project_name: event.target.value,
    //     })
    // }





    //Project main page
    render() {
        const project = this.props.reduxStore.project.projectReducer;
        return (
            <div className="project_page">
                <Card className="file_card">
                    <div className="cust_info">
                        <h1>Project Page</h1>
                        {/* {JSON.stringify(project.customers_full_name)} */}
                        <h2>Customer: {project.customers_full_name}'s</h2>

                        <h3>Build Information</h3>
                    </div>
                    <div className="file_text">
                        <form>
                            <TextField
                                id="outlined-height"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Project Name"
                                value={project.project_name}
                                onChange={this.handleChange('project_name')}
                            />
                            <TextField
                                id="outlined-height"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Brand"
                                value={project.brand}
                                onChange={this.handleChange('brand')}
                            />
                            <TextField
                                style={{ margin: 10 }}
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                placeholder="false"
                                label="Deep Custom"
                                value={project.deep_custome}
                                onChange={this.handleChange('deep_custom')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Date Due"
                                value={project.projected_due_date}
                                onChange={this.handleChange('projected_due_date')}
                            />
                            <TextField
                                id="outlined-height"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Status"
                                value={project.progress_status}
                                onChange={this.handleChange('progress_status')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                placeholder="   This field's intended use is to quickly take in the customers personal vision and description of the bike the with to have built. Such info would include paint color themes or desired use of bike, "
                                multiline rows="10"
                                fullWidth
                                value={project.project_desc}
                                onChange={this.handleChange('project_desc')}
                            />
                            <div className="file_text">
                                <h3>Customer Information</h3>
                            </div>
                            <TextField
                                id="outlined-height"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Height"
                                value={project.cust_height}
                                onChange={this.handleChange('height')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Inseam"
                                value={project.cust_inseam}
                                onChange={this.handleChange('cust_inseam')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Torso"
                                value={project.cust_torso}
                                onChange={this.handleChange('cust_torso')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Preceived Flexability"
                                placeholder="1-10"
                                value={project.cust_flex}
                                onChange={this.handleChange('cust_flex')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Reach"
                                value={project.cust_reach}
                                onChange={this.handleChange('cust_reach')}
                            />
                            <div className="file_text">
                                <h3>Frame information</h3>

                            </div>
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Head Tube Angle/Size"
                                value={project.head_tube}
                                onChange={this.handleChange('head_tube')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Steerer Tube"
                                value={project.steerer_tube}
                                onChange={this.handleChange('steerer_tube')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Top Tube Angle/Length"
                                value={project.top_tube}
                                onChange={this.handleChange('top_tube')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Down Tube Angle/Length"
                                value={project.down_tube}
                                onChange={this.handleChange('down_tube')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Seat Tube Angle/Length"
                                value={project.seat_tube}
                                onChange={this.handleChange('seat_tube')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Bottom Bracket"
                                value={project.bottom_bracket}
                                onChange={this.handleChange('bottom_bracket')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Seat Stays"
                                value={project.seat_stays}
                                onChange={this.handleChange('seat_stays')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Chain Stays"
                                value={project.chain_stays}
                                onChange={this.handleChange('chain_stays')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Dropout"
                                value={project.drop_outs}
                                onChange={this.handleChange('drop_outs')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Brake Type"
                                value={project.brake_type}
                                onChange={this.handleChange('brake_type')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Wheel Size"
                                value={project.wheel_size}
                                onChange={this.handleChange('wheel_size')}
                            />
                            <TextField
                                id="outlined-name"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 10 }}
                                label="Tire Clearance"
                                value={project.tire_clearance}
                                onChange={this.handleChange('tire_clearance')}
                            />

                        </form>
                        <Button variant="outlined"
                            color="secondary"
                            style={{ margin: 20, marginTop: 10 }}
                            onClick={this.projectIn}>
                            Submit
                        </Button>
                    </div>
                </Card>
            </div >
        )
    }

}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProjectPage);