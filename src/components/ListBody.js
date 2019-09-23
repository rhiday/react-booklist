import React from 'react';
import Item from './Item';

const uuidv1 = require('uuid/v1');

const ListBody = props => (
    <tbody>
            {props.books.map((book, index) => 
                <Item 
                    book={book}
                    index={index} 
                    key={uuidv1()} 
                    deleteBook={props.deleteBook}
                    readStatus={props.readStatus}
                />)}
        </tbody>

);

export default ListBody;