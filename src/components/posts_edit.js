import React, { Component } from 'react';

class PostsEdit extends Component{
    onSubmit(props) {
        this.setState({props}).then(() => {
            this.context.router.push('/');
        });
    }
    render(){
        return(
            <form>
                <h1>Edit Post</h1>
                <div className="form-group">
                    <label>Title：</label>
                    <input type="text" className="form-control" value={this.state.title}/>
                </div>
                <div className="form-group">
                    <label>Content：</label>
                    <textarea className="form-control" value={this.state.content}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit.bind(this)}>Update</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}
export default PostsEdit;