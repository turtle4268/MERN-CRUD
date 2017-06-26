import React, { Component } from 'react';
import { Link } from 'react-router';

class PostsNew extends Component{
    onSubmit(props) {
        this.props.createPost(props).then(() => {
            this.context.router.push('/');
    });
    var data = {
      'title': $('input[name="title"]').val(),
      'content': $('input[name="content"]').val()
    }
    
    $.ajax({
        type: "post",
        url: "/form",
        data: data,
        dataType:'JSON'
    }).done((props) => {
        this.props.createPost(props).then(() => {
            this.context.router.push('/');
        });
      });
    

    $('input[name="title"]').val('');
    $('input[name="content"]').val('');
  
    }
    
    render(){
        return(
            <form>
                <h1>Create A New Post</h1>
                <div className="form-group">
                    <label>Title：</label>
                    <input type="text" className="form-control" name="title"/>
                </div>
                <div className="form-group">
                    <label>Content：</label>
                    <textarea className="form-control" name="content"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit.bind(this)}>Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

export default PostsNew;