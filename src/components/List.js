import React from 'react';
import ListTitle from './ListTitle';
import ListBody from './ListBody';

const List = props => (
    <div className="table-container">
    <table>
        <ListTitle />
        <ListBody 
        books={props.books}
        deleteBook={props.deleteBook}
        readStatus={props.readStatus}
        />
    </table>
</div>
);

export default List;