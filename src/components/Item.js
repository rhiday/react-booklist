import React from 'react';
import toggleOnIcon from '../images/toggle-on.png';
import toggleOffIcon from '../images/toggle-off.png';
import deleteIcon from '../images/delete.png';

const Item = props => (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.book.title}</td>
            <td>{props.book.author}</td>
            <td>{props.book.pages}</td>
            <td>
                <button onClick={() => props.readStatus(props.index)}>
                    {
                        props.book.readStatus ? 
                        <img src={toggleOnIcon} alt="read"/> : 
                        <img src={toggleOffIcon} alt="not read"/>
                    }
                </button>
            </td>
            <td>
                <button onClick={() => props.deleteBook(props.index)}>
                    <img src={deleteIcon} alt="delete"/>
                </button>
            </td>
        </tr> 
);

export default Item;