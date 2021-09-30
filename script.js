let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

/*
const book1 = new Book('bob', 'bobbook', 20, false);
const book2 = new Book('tim', 'timbook', 15, true);
const book3 = new Book('tim', 'timbook', 15, true);
const book4 = new Book('tim', 'timbook', 15, true);
const book5 = new Book('tim', 'timbook', 15, true);
const book6 = new Book('tim', 'timbook', 15, true);
const book7 = new Book('tim', 'timbook', 15, true);
const book8 = new Book('tim', 'timbook', 15, true);
*/

const bookContainer = document.getElementById('bookContainer');

const addBook = document.getElementById('newBook');
const popupForm = document.getElementById('form');
const formButton = document.getElementById('btn');
const formContainer = document.getElementById('formContainer');

function addBookToLibrary() {
    let bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookContainer.appendChild(bookCard);
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
