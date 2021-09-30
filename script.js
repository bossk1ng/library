let myLibrary = [];

function Book(author, title, pages, read, index) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

const bookContainer = document.getElementById('bookContainer');
const addBook = document.getElementById('newBook');
const popupForm = document.getElementById('form');
const formButton = document.getElementById('btn');
const formContainer = document.getElementById('formContainer');

console.log(formContainer);

function createBook() {
    const book1 = new Book(
        formContainer.querySelector('[name="author"]').value,
        formContainer.querySelector('[name="title"]').value,
        formContainer.querySelector('[name="pages"]').value,
        formContainer.querySelector('[name="read"]').value
    );

    myLibrary.push(book1);

    return (book1.index = myLibrary.indexOf(book1));
}

function addBookToLibrary() {
    let bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    let index = createBook();
    let bookValues = document.querySelectorAll('form>input, form>label>input');
    bookValues.forEach((value) => {
        let valueDiv = document.createElement('div');
        let valueName = value.name;
        valueDiv.textContent = myLibrary[index][valueName];
        bookCard.appendChild(valueDiv);
    });

    let removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    bookCard.appendChild(removeButton);

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

formButton.addEventListener('click', () => {
    resetForm();
});
