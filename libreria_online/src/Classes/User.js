class User {

    constructor(username, name, mail, pass, img = "", books = []) {
        this.username = username;
        this.name = name;
        this.mail = mail;
        this.pass = pass;
        this.img = img;
        this.books = books;
    }

    addBook(book) {
        this.books.push(book);
    }



}

export default User;