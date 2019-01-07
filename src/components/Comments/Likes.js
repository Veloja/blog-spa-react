import React from 'react';

const likes = (props) => {
    return (
        <div>
            LIKES number: {props.likes}
            <button onClick={props.addLike}>add like</button>
        </div>
      );
}
 
export default likes;