const myLibrary = [];

function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;

    this.info = () => {
        let string;
        string = (this.haveRead === false) ? "not read yet" : "have read";
        return (this.title + " by " + this.author + ", " + this.numPages 
            + " pages, " + string);
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

const b1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 257, false);
const b2 = new Book("Steve Jobs", "Walter Isaacson", 656, true);
const b3 = new Book("The Art of War", "Sun Tzu", 68, false);

addBookToLibrary(b1);
addBookToLibrary(b2);
addBookToLibrary(b3);

myLibrary.forEach((element) => {
    console.table(element.info());
}) 