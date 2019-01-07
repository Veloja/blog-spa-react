import React, { Component } from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';
import NewPost from './NewPost';

class Posts extends Component {
  state = {
    posts: [],
    selectedId: null,
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
      const posts = data.slice(0, 10)
      this.setState({
        posts: posts
      })
    });
  }

  deletePostHandle = (id) => {
    const posts = this.state.posts
    posts.splice(this.state.posts.findIndex(post => post.id === id), 1);
    this.setState({ posts: posts });
  }

  // addNewPost = (post) => {
  //   this.setState({
  //     posts: [...this.state.posts, post]
  //   })
  // }

  handleClick = (id) => {
    this.setState({ selectedId: id });
  }

  render() { 
    const posts = this.state.posts.map(post => {
      return (
          <Post 
            key={post.id} 
            id={post.id}
            title={post.title}
            body={post.body}
            delete={this.deletePostHandle}  
            click={() => this.handleClick(post.id)}      
          />
        )
      }
    )

    return (
      <div className="App">
        <h1>BLOG SITE</h1>

        <h2>Go to add new post: </h2>
        <Link to="/addPost">add new</Link>
        {posts}
      </div>
    );
  }
}
 
export default Posts;