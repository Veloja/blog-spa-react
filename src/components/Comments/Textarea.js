import React from 'react';

const Textarea = (props) => {
    return ( 
        <textarea value={props.value} onChange={props.text}></textarea>
     );
}

export default Textarea;