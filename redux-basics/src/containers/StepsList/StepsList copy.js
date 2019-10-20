import React, { Component } from 'react';
import Step from '../../components/Step/Step';
import { connect } from 'react-redux';

class StepsList extends Component {

    render() {
        return (<div>
            <header>
                <h1>Actions performed by the user: </h1>
            </header>
            <section>
                {this.props.steps}
            </section>
        </div>);
    }
}

const mapStateToProps = state => {
    let newSteps = [];
    let newKey = 0;
    newSteps = state.counterSave.steps.map(step => <Step value={step} key={newKey++} />);
    console.log(newSteps);
    return {
        steps: newSteps
    }
}


export default connect(mapStateToProps, null)(StepsList);