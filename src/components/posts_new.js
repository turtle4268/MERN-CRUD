import React, { Component } from 'react';

class PostsNew extends Component{
    onSubmit(props) {
        this.props.createPost(props).then(() => {
            this.context.router.push('/');
        });
  }
    render(){
        return(
            <form>
                <h1>Create A New Post</h1>
                <div class="form-group">
                    <label>Title：</label>
                    <input type="text" class="form-control" value={this.state.title}/>
                </div>
                <div class="form-group">
                    <label>Content：</label>
                    <textarea class="form-control" value={this.state.content}></textarea>
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.onSubmit.bind(this)}>Submit</button>
                <link to="/" class="btn btn-danger">Cancel</link>
            </form>
        );
    }
}

export default PostsNew;