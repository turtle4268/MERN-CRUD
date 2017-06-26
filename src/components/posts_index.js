import React from 'react';
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
                <div>
                    <PostsList post={this.state}/>
                </div>
            </div>
        );
    }
}

export default PostsIndex;