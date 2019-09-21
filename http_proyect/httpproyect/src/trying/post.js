import React, {Component} from 'react';

class Post extends Component{
    render(){
        return(
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.author}</p>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Post;