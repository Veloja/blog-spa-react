import React, { Component } from 'react';

class SingleComment extends Component {
    state = { 
        like: 0
    }

    addLike = () => {
        const like = this.state.like + 1;
        this.setState({
					like
				})
    }

    render() {
        return ( 
            <div className="comment">
                <p>index: {this.props.index + 1}</p>
                <p>id: {this.props.comment.id} </p>
                <p>Text: {this.props.comment.text}</p>
                <p>Likes: {this.state.like}</p>
								<button onClick={this.addLike}>add like</button>
								<button onClick={this.props.deleteSingleComment}>Delete this comment</button>
            </div>
         );
    }
}
 
export default SingleComment;