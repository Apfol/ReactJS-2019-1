import React, { Component } from 'react';
import classes from './UploadPdf.css';
import Question from '../Book/Question';
import { tempUser, countAnswers, setIdAnswers } from '../../Data';
import Book from '../../Classes/Book';
import { withRouter } from 'react-router-dom';

class UploadPdf extends Component {
    state = {
        qToRender: [],
        questions: [],
        counter: 0,
        file: "",
        isbn: "",
        name: "",
        author: ""
    };
    counter = 0;


    render() {
        return (
            <div className={classes.form}>
                <header>
                    <h1>Subir Un Documento</h1>
                </header>
                <hr />
                <section>
                    { /*constructor(name, author, isbn, date, img, questions = [], pdfName) { */}
                    <label>Nombre: </label><input type="text" onChange={e => this.loadInformation(e, "name")} /><br />
                    <label>Archivo: </label><input type="file" id="pdf_file" onChange={e => this.loadInformation(e, "file")} accept="application/pdf" /><br />
                    <label>isbn: </label><input type="text" onChange={e => this.loadInformation(e, "isbn")} /><br />
                    <label>Autor: </label><input type="text" onChange={e => this.loadInformation(e, "author")} /><br />
                </section>
                <section>
                    <header>
                        <h1>Preguntas: </h1>
                    </header>
                    <hr />
                    <div>
                        {this.state.qToRender}
                    </div>
                </section>
                <button onClick={this.addQuestion}>Añadir Preguntas</button>
                <div>
                    <button id="button_upBook" onClick={this.upload}>Subir Archivo</button>
                </div>
            </div>
        );
    }

    upload = () => {
        let tempPerson = tempUser;
        let date = new Date();
        let stringDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        // addQuestion(id, title, option1, option2, option3, option4, answer) {

        let newBook = new Book(this.state.name, this.state.author, this.state.isbn, stringDate, "bookicon.svg", this.state.questions,
            this.state.file);
        /*constructor(name, author, isbn, date, img, questions = [], pdfName) { */
        tempPerson.books.push(newBook);
        console.log(newBook);
        alert("Subida exitosa del documento");
        document.getElementById("upload_button").className = "userbar_button";
        this.props.history.push("/session/sign-in");

    }

    loadInformation = (e, type) => {
        let newInfo = { ...this.state };
        if (type === "file") {
            newInfo[type] = document.getElementById("pdf_file").files[0].name.replace(".pdf", "");
        } else {
            newInfo[type] = e.target.value;
        }

        this.setState(newInfo);
    }
    loadInfoQ = (e, option, key) => {
        let newState = { ...this.state };
        newState.questions.forEach(q => {
            if (q.id === key) {
                if (option === 1 || option === 2 || option === 3 || option === 4) {
                    q.answer = option;
                } else {
                    q[option] = e.target.value;
                }
            }
        });
        this.setState(newState);
    }

    addQuestion = () => {
        let newState = { ...this.state };
        let idAnswer = "q_" + (countAnswers + 1);
        setIdAnswers(countAnswers + 1);
        //<Question key={this.counter} toCreate={true} info="" />
        // addQuestion(id, title, option1, option2, option3, option4, answer) {
        newState.questions.push({ id: idAnswer, title: "", option1: "", option2: "", option3: "", option4: "", answer: 0 });
        newState.qToRender.push(<Question key={idAnswer} id={idAnswer} toCreate={true} loadInfo={this.loadInfoQ} />);
        this.setState(newState);
    }
}

export default withRouter(UploadPdf);