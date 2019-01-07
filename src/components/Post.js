import React from 'react';
import { Link } from 'react-router-dom';

const post = (props) => {
    return ( 
        <div className="post" onClick={props.click}>
            <span>{props.id}. </span>
            <span>{props.title}</span>
            <button className="deleteBtn" onClick={() => props.delete(props.id)}>Delete</button>
            <Link to={'/posts/' + props.id}>read more</Link>
        </div>
     );
}
 
export default post;