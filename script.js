let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

const bookContainer = document.getElementById('bookContainer');
const addBook = document.getElementById('newBook');
const popupForm = document.getElementById('form');
const formButton = document.getElementById('btn');
const formContainer = document.getElementById('formContainer');

Book.prototype.createBook = () => {
    console.log(this.title)
}

function addBookToLibrary() {

    let bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    let author = document.createElement('div')
    author.id = "author"
    let title = document.createElement('div')
    title.id = "title"
    let pages = document.createElement('div')
    pages.id = "pages"
    let read = document.createElement('div')
    read.id = "read"


    bookContainer.appendChild(bookCard);
    bookCard.append(author, title, pages, read)
}


function resetForm() {
    popupForm.style.display = 'none';
    addBookToLibrary();
    formContainer.reset();
}

addBook.addEventListener('click', () => {
    popupForm.style.display = 'block';
});


formButton.addEventListener('click', resetForm);
