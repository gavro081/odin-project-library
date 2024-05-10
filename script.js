let myLibrary = [];
const bookContainer = document.querySelector('.books-container');

function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;

    // this.info = () => {
    //     let string;
    //     string = (this.haveRead === false) ? "not read yet" : "have read";
    //     return (this.title + " by " + this.author + ", " + this.numPages 
    //         + " pages, " + string);
    // }
}

function addBookToLibrary(book){
    myLibrary.push(book);
    addBookToContainer(book);
}

const b1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 257, false);
const b2 = new Book("Steve Jobs", "Walter Isaacson", 656, true);
const b3 = new Book("The Art of War", "Sun Tzu", 68, false);

myLibrary = [b1, b2, b3];


myLibrary.forEach((element) => {
    console.table(element.info());
}) 


function addBookToContainer (book) {

let div = document.createElement('div');

const title = document.createElement('h2');
title.textContent = book.title;

let author = document.createElement('h3');
author.textContent = book.author;

let numPages = document.createElement('p');
numPages.textContent = book.numPages;

let haveRead = document.createElement('p');
haveRead.textContent = book.haveRead;

div.appendChild(title);
div.appendChild(author);
div.appendChild(numPages);
div.appendChild(haveRead);

bookContainer.appendChild(div);
}

myLibrary.forEach((element) => {
    addBookToContainer(element);
})