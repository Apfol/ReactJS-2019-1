import React, { Component } from 'react';
import Step from '../../components/Step/Step';
class StepsList extends Component {

    render() {
        let newSteps = [];
        let newKey = 0;
        newSteps = this.props.steps.map(step => <Step value={step} key={newKey++} />);
        return (<div>
            <header>
                <h1>Actions performed by the user: </h1>
            </header>
            <section>
                {newSteps}
            </section>
        </div>);
    }
}




export default StepsList;