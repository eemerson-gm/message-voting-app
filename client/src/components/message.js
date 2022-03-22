import React, { Component } from 'react';
import Like from '../images/like.png';
import Dislike from '../images/dislike.png';

class Message extends Component {
    render() {
        return(
            <div class="card">
                <div class="card-body text-white">
                    {this.props.message}
                    <div class="float-end">
                        <img alt="Like Button" src={Dislike} Width="24" class="float-end"/>
                        <div class="mx-3 float-end">
                            {this.props.likes}
                        </div>
                        <img alt="Like Button" src={Like} Width="24" class="float-end"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;