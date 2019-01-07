import React, { Component } from 'react';

class NewPost extends Component {
    state = { 
        text: 'string',
        body: 'string body',
     }
    render() { 
        return (
            <div>
                <h1>Fill the title: </h1>
                <input placeholder='FIll the title' />
            </div>
         );
    }
}
 
export default NewPost;