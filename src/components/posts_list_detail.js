import React, { Component } from 'react';

const PostsDetail = (props) => {
    return this.props.post.map((post) =>{
        return(
            <li className="list-group-item" key={this.props.post.id}>
                <div className="list col-sm-3">
                    <div className="title"><h3>{this.props.post.title}</h3></div>
                    <p>{this.props.post.content}</p>
                    <footer>
                        <button className='button'><span className="glyphicon glyphicon-remove" ></span></button>
                        <Link to="/"><span claclassNamess="glyphicon glyphicon-pencil"></span></Link>
                    </footer>
                </div>
            </li>
        );
    });
}

export default PostsDetail;