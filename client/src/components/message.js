import React, { Component } from 'react';
import Like from '../images/like.png';
import Dislike from '../images/dislike.png';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            message: this.props.message,
            likes: this.props.likes,
            liked: false,
            disliked: false,
        }
        this.handleLikes = this.handleLikes.bind(this);
        this.handleDislikes = this.handleDislikes.bind(this);
    }

    handleLikes(){
        let newLikes = this.state.likes + 1;
        this.setState({liked: true, disliked: false, likes: newLikes});
        fetch("http://localhost:3001/api/like/" + this.state.id + "/" + 1);
    }

    handleDislikes(){
        let newLikes = this.state.likes - 1;
        this.setState({disliked: true, liked: false, likes: newLikes});
        fetch("http://localhost:3001/api/like/" + this.state.id + "/" + -1);
    }

    render() {
        return(
            <div className="card">
                <div className="card-body text-white">
                    <table>
                        <tbody>
                            <tr>
                                <td width="75%">
                                    {this.state.message}
                                </td>
                                <td width="5%">
                                    {this.state.likes}
                                </td>
                                <td width="10%">
                                    <button type="button" className="btn btn-primary" onClick={this.handleLikes}>Like</button>
                                </td>
                                <td width="10%">
                                    <button type="button" className="btn btn-primary" onClick={this.handleDislikes}>Dislike</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        );
    }

}

export default Message;