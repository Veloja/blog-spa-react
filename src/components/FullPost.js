import React  from 'react';

import Textarea from './Comments/Textarea';
import SingleComment from './Comments/SingleComment';

class FullPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            post: {},
            comments: [],
            activeComment: {
                text: '',
                id: new Date().getUTCMilliseconds(),
            }
        }
		}
		
		deleteSingleComm = (id) => {
			const comments = [...this.state.comments];
			console.log('comments', comments)
			comments.splice(this.state.comments.findIndex(comm => comm.id === id), 1);
			console.log('comments', comments)
			this.setState({ comments }, ()=> console.log('this.state', this.state));
		}

    handleTextarea = (e) => {
        this.setState({ 
            ...this.state,
            activeComment: {
                ...this.state.activeComment,
                text: e.target.value
            }
        });
    }

    saveComment = () => {
        const activeComment = {...this.state.activeComment}
        const array = [...this.state.comments];
        const comments = array.concat(activeComment);
        this.setState({ 
            ...this.state,
            comments,
            activeComment: {
                ...this.state.activeComment,
                text: '',
                id: new Date().getUTCMilliseconds(),
                likes: 0
            }
         }, () => console.log('AFTER EVERHTIN', this.state));
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            const exactPost = this.props.match.params.id;
            const timeout = setTimeout(() => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${exactPost}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ 
                        post: data,
                        loading: false
                    });
                });                
            }, 1000);
        }
    }

    goBack = () => {
        this.props.history.replace('/');
    }    

    render() {
				let comments = this.state.comments.map((comment, index) => (
						<SingleComment 
								deleteSingleComment={() => this.deleteSingleComm(comment.id)}
								key={index}
								index={index}
                comment={comment} />
        ))

        let content;
        if(this.state.loading) {
            content = <h1 className="loader">LOADING...</h1>
        } else {
            content = <div className="post">
                        <h1>FULL POST</h1>
                        <h2>{this.state.post.title}</h2>
                        <p>{this.state.post.body}</p>
                        <button onClick={this.goBack} className="deleteBtn">go back</button>
                        <div>
                            <Textarea text={this.handleTextarea} value={this.state.activeComment.text} />
                            <button onClick={this.saveComment}>save comment</button>
                        </div>
                        <hr />
                        COMMENTS:
                        {comments}
                    </div>
        }

        return (
            <div>{content}</div>         
         );
    }
}
 
export default FullPost;