import React from 'react';
import Title from './components/Title';
import List from './components/List';
import AddForm from './components/AddForm';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.readStatus = this.readStatus.bind(this);
    this.addNewBook = this.addNewBook.bind(this);

    this.state = {
      formHidden: true,
      books: [
        {
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          pages: 295,
          readStatus: false,
        },
        {
          title: "Harry Potter",
          author: "J.K. Rowling",
          pages: 150,
          readStatus: false,
        },
      ]
    }
  }

  showForm() {
    this.setState({formHidden: false});
  }

  hideForm() {
    this.setState({formHidden: true});
  }

  deleteBook(index) {
    const books = this.state.books.slice();
    books.splice(index, 1);
    this.setState({books: books});
  }

  readStatus(index) {
    const books = this.state.books.slice();
    books[index].readStatus = !books[index].readStatus;
    this.setState({books: books});
  }
  
  Book(title, author, pages, readStatus) {
    return {
      title,
      author,
      pages,
      readStatus
    };
  }

  addNewBook(e) {
    e.preventDefault();
    const books = this.state.books.slice();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let readStatus = document.querySelector('#read').checked;
    let book = this.Book(title, author, pages, readStatus);
    books.push(book);
    this.setState({books: books, formHidden: true});
  }

  render() {
    if (!this.state.formHidden) {
      return(
        <div className="App">
          <Title  showForm={this.showForm} />
          <List 
          books={this.state.books}
          deleteBook={this.deleteBook}
          ReadStatus={this.ReadStatus}
          />
          <AddForm 
            hideForm={this.hideForm}
            addNewBook={this.addNewBook}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Title showForm={this.showForm} />
        <List 
        books={this.state.books}
        deleteBook={this.deleteBook}
        readStatus={this.readStatus}
        />
      </div>
    );
  }
}

export default App;
