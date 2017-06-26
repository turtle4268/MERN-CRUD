import React from 'react';

const PostsDetail = (props) => {
    return this.props.post.map((post) =>{
        return(
            <li className="list-group-item" key={this.props.post.id}>
                <div className="list col-sm-3">
                    <div class="title"><h3>{this.props.post.title}</h3></div>
                    <p>{this.props.post.content}</p>
                    <footer>
                        <button class='button'><span class="glyphicon glyphicon-remove" ></span></button>
                        <link to="/"><span class="glyphicon glyphicon-pencil"></span></link>
                    </footer>
                </div>
            </li>
        );
    });
}

export default PostsDetail;