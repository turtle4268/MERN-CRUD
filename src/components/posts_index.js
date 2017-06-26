import React, { Component } from 'react';
import { Link } from 'react-router';
import PostsList from './posts_list';

class PostsIndex extends Component{
    constructor() {
        super();
        this.state ={title: '',
                     content:''};
    }
    render(){
        return(
            <div>
                <div className="header col-md-12">
                    <h1>To Do List</h1>
                    <Link to="/posts/new"  className="btn btn-primary">NEW</Link>   
                </div>
                <div>
                    <PostsList post={this.state}/>
                </div>
            </div>
        );
    }
}

export default PostsIndex;