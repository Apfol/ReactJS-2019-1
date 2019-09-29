class Book {

    constructor(name, author, isbn, date, img, questions = []) {
        this.name = name;
        this.author = author;
        this.isbn = isbn;
        this.date = date;
        this.img = img;
        this.questions = questions;
    }

    getAllQuestions() {
        return this.questions;
    }

    addQuestion(id, title, option1, option2, option3, option4) {
        this.questions.push({
            id, title, option1, option2, option3, option4
        });
    }



}

export default Book;