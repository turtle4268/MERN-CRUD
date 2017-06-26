import React from 'react';
import PostsDetail from './posts_list_detail';

const PostsList = (props) => {
    return (
        <ul className="list-group">
            {props.post.length}
        </ul>
    );
}

export default PostsList;