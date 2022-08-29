const books = {
    bookName: "",
    author: "",
    numPages: ""
  }

  function Books (bookName, author, numPages, haveRead)   {
    this.bookName = bookName; 
    this.author = author; 
    this.numPages = numPages;
    this.haveRead = haveRead;

    if (haveRead === 'yes'){
        haveRead = "Have read"
    }
       else
        haveRead = 'Have not read'
    
        this.info = function(){
        return (bookName + ", " + author + ", " + numPages + ', ' + haveRead)
    }
  }

  const theHobbit = new Books('The Hobbit', 'J.R.R. Tolkien', '295 Pages', 'yes')

  console.log(theHobbit.info());