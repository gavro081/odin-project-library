let myLibrary;
const bookContainer = document.querySelector('.books-container');
const form = document.querySelector('form');
const newBtn = document.querySelector('.new-book');

const submitBtn = document.querySelector('.submit-btn');
let i = 0;

const cancelBtn = document.querySelector('.cancel-btn');

// dodadi handler za koga e knigata .focused i se brise od tamu
function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

function addBookToLibrary(book){
    myLibrary.push(book);
    addBookToContainer(book);
}

const b1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 257, false);
const b2 = new Book("Steve Jobs", "Walter Isaacson", 656, true);
const b3 = new Book("The Art of War", "Sun Tzu", 68, false);
const b4 = new Book("Lorem Ipsum", "filip gav", 777, true);

myLibrary = [b1,b2];
// myLibrary = [b1, b2, b3, b4];

// make trash-can SVG for the delete button
const deleteButton = document.createElement('button');
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svg.setAttribute('viewBox', '0 0 24 24');

const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
title.textContent = 'delete';
svg.appendChild(title);

const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('d', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z');
svg.appendChild(path);

svg.setAttribute('height', '30px');
deleteButton.appendChild(svg);

function addBookToContainer (book) {

    let div = document.createElement('div');

    const title = document.createElement('h2');
    title.textContent = book.title;

    let author = document.createElement('h3');
    author.textContent = book.author;

    let numPages = document.createElement('p');
    numPages.textContent = "pages: " + book.numPages;

    let haveRead = document.createElement('p');
    haveRead.textContent = book.haveRead ? "haveread" : "havent read";

    let readBtn = document.createElement('button');
    readBtn.textContent = book.haveRead;
    readBtn.classList.add('read-btn');

    readBtn.addEventListener("click", (event) => {
        readBtn.textContent = (readBtn.textContent === "true") ? false : true; 
    
        event.stopPropagation();
    })

    let deleteBtn = deleteButton.cloneNode(true);
    deleteBtn.classList.add('delete-btn');
    deleteBtn.setAttribute('data-index', i);

    deleteBtn.addEventListener("click", (event) => {
        const bookIndex = parseInt(deleteBtn.getAttribute('data-index'));
        console.log(bookIndex);
        myLibrary.splice(bookIndex, 1);
        console.table(myLibrary);
        renderLibrary();
        event.stopPropagation();
    })
    
    let btnContainer = document.createElement('div');
    btnContainer.appendChild(readBtn);
    btnContainer.appendChild(deleteBtn);
    btnContainer.classList.add('btn-container');

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(numPages);
    div.appendChild(haveRead);
    div.appendChild(btnContainer);

    div.classList.add('book-card');

    console.log(div);

    bookContainer.appendChild(div);
}

function renderLibrary(){
    bookContainer.innerHTML = "";
    i = 0;
    myLibrary.forEach((book) => {
        addBookToContainer(book);
        i++;        
    })
}

renderLibrary();

const deleteBtns = document.querySelectorAll('.delete-btn');


let bookCards = document.querySelectorAll('.book-card');

// div.appendChild(cancelBtn);

function handleCardClick(element){
    cancelBtn.classList.add('visible');

    element.classList.add('focused');
    bookContainer.classList.add('blur');

    bookCards.forEach(element => {
        element.removeEventListener('click', handleClick);
    })
}

function handleClick(){
    handleCardClick(this);
}

bookCards.forEach((element) => {
    element.addEventListener("click", handleClick)
})

cancelBtn.addEventListener("click", () => {
    cancelBtn.classList.remove('visible');
    bookContainer.classList.remove('blur');
    bookCards.forEach((element) => {
        element.classList.remove('focused');
        element.addEventListener("click", handleClick)
    })
})

function newBook(){
    let name = document.querySelector('input[title="book-name"]').value;
    let author = document.querySelector('input[title="author"]').value;
    let pages = document.querySelector('input[title="num-pages"]').value;
    let haveRead = document.querySelector('input[title="have-read"]').value;


    if (name !== "" && author !== "" && pages !== "") {

        haveRead = (haveRead === "on") ? "true" : "false";

    let book = new Book(name, author, pages, haveRead);

    document.querySelector('input[title="book-name"]').value = "";
    document.querySelector('input[title="author"]').value = "";
    document.querySelector('input[title="num-pages"]').value ="";
    document.querySelector('input[title="have-read"]').value = "on";

    // addBookToContainer(book);
    myLibrary.push(book);
    renderLibrary();

    form.style.display = 'none';
    bookContainer.style.display = 'grid';
    newBtn.style.display = 'block';
    }
    else {
        alert("All inputs must be filled!");
    }

}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    newBook();
})


newBtn.addEventListener("click", () => {
    newBtn.style.display = 'none';
    form.style.display = 'grid';
    bookContainer.style.display = 'none';
})
