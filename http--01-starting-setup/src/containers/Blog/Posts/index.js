import React from 'react';
import axios from 'axios';
import './index.css'

import Post from '../../../components/Post/Post'

class Posts extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {...post, author: 'Max'}
                })
                this.setState({ posts: updatedPosts  })
                // console.log(response);
            })
            .catch(error => {
                console.log(error)
            });

            document.title = "Posts"
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render() {

        const posts = this.state.posts.map(post => <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => { this.postSelectedHandler(post.id) }}
        />)

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;