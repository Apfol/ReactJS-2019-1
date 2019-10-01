class Book {

    questions = [];
    constructor(name, author, isbn, date, img, question = [], pdfName) {
        this.pdfName = pdfName;
        this.name = name;
        this.author = author;
        this.isbn = isbn;
        this.date = date;
        this.img = img;
        this.questions = question;
    }

    getAllQuestions() {
        return this.questions;
    }

    addQuestion(id, title, option1, option2, option3, option4, answer) {
        this.questions.push({
            id, title, option1, option2, option3, option4, answer
        });
    }



}

export default Book;