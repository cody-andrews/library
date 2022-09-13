//DOM Objects

const submit = document.querySelector('#submitBook');
const haveReadButton = document.querySelector('#have-read-button')

let haveRead = '';

let myLibrary = [];

const theHobbit = new Books('The Hobbit', 'J.R.R. Tolkien', '295 Pages', 'yes')

const books = {
    bookName: "",
    author: "",
    numPages: "",
    haveRead: ''
  }

  function Books (title, author, numPages, haveRead)   {
    this.title = title; 
    this.author = author; 
    this.numPages = numPages;
    this.haveRead = haveRead;
  }



  function addBookToLibrary(book)  {
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;    

      if (document.getElementById('haveRead').checked){
        haveRead = "Yes";
      }
      else{
        haveRead = 'No'
      }
    
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
 
  
    let newBook = new Books(title, author, pages, haveRead)


    myLibrary.push(newBook)
    addBookToList(newBook)
    clear()

  }

   function clear()  {
    document.getElementById('myForm').reset();
   }

   function addBookToList(book)  {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.numPages}</td>
      <td><button id='have-read-button'>${book.haveRead}</button></td>
      <td><a href='#'class='delete'>X</a></td>

    `;

    list.appendChild(row);
   }

   function deleteBook(el)  {
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();
    }
   }

   function changeReadStatus(e)  {
    const btn = document.getElementById('#have-read-button');
    
    if (e.textContent === 'Yes'){
      e.textContent = 'No';
    }
    else{
      e.textContent = 'Yes';
    }
   }

  

   document.querySelector('#book-list').addEventListener('click', (e) => {
    deleteBook(e.target);
    changeReadStatus(e.target)
   });

  submit.addEventListener("click", addBookToLibrary);
  
  function openForm() {
    document.getElementById("bookFormPopup").style.setProperty('visibility', 'visible', 'important');
  }
  
  function closeForm() {
    document.getElementById("bookFormPopup").style.setProperty('visibility', 'hidden', 'important');
  }

