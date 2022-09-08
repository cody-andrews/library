//DOM Objects

const submit = document.querySelector('#submitBook');

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
    myLibrary.push(theHobbit)
    console.log(title.value)
    for (let i = 0; i < myLibrary.length; i++) {
      console.log(myLibrary[i]);
  }    
    clear()
  }

   function clear()  {
    document.getElementById('myForm').reset();
   }

  submit.addEventListener("click", addBookToLibrary);
  // addBookToLibrary(theHobbit);

  // console.log(myLibrary[0]);

  function openForm() {
    document.getElementById("bookFormPopup").style.setProperty('visibility', 'visible', 'important');
  }
  
  function closeForm() {
    document.getElementById("bookFormPopup").style.setProperty('visibility', 'hidden', 'important');
  }

