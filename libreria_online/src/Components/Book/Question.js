import React, { Component } from 'react';
import classes from './Question.css';
class Question extends Component {
    state = {
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        title: "",
        answer: 0
    };

    render() {
        let toRender = (<div className={classes.question}>
            <h1>{this.props.title}</h1>
            <hr />
            <input type="radio" name="options" className={this.props.className} id="option1" /><p>{this.props.option1}</p>
            <input type="radio" name="options" className={this.props.className} id="option2" /><p>{this.props.option2}</p>
            <input type="radio" name="options" className={this.props.className} id="option3" /><p>{this.props.option3}</p>
            <input type="radio" name="options" className={this.props.className} id="option4" /><p>{this.props.option4}</p>
        </div>);
        if (this.props.toCreate) {
            toRender = (<div className={classes.question}>
                <input type="text" onChange={e => this.props.loadInfo(e, "title", this.props.id)} placeholder="Del parrafo 2 se puede inferir que: " />
                <hr />
                <input type="radio" name="options" className={this.props.className} id="r1" onChange={e => this.props.loadInfo(e, 1, this.props.id)} /><input type="text" placeholder="Opción 1" onChange={e => this.props.loadInfo(e, "option1", this.props.id)} />
                <input type="radio" name="options" className={this.props.className} id="r2" onChange={e => this.props.loadInfo(e, 2, this.props.id)} /><input type="text" placeholder="Opción 2" onChange={e => this.props.loadInfo(e, "option2", this.props.id)} />
                <input type="radio" name="options" className={this.props.className} id="r3" onChange={e => this.props.loadInfo(e, 3, this.props.id)} /><input type="text" placeholder="Opción 3" onChange={e => this.props.loadInfo(e, "option3", this.props.id)} />
                <input type="radio" name="options" className={this.props.className} id="r4" onChange={e => this.props.loadInfo(e, 4, this.props.id)} /><input type="text" placeholder="Opción 4" onChange={e => this.props.loadInfo(e, "option4", this.props.id)} />
            </div>);
        }
        return (toRender);
    }

}

export default Question;