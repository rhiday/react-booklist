import React from 'react';

const Title = props => (
    <header>
        <div className="container">
            <h1>BookList</h1>
            <button onClick={props.showForm}>Add Book</button>
        </div>
    </header>
);

export default Title;