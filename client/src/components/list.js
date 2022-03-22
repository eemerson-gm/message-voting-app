import React, { Component } from 'react';
import Message from './message';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:3001/api/all")
        .then(res => res.json())
        .then(data => {
            this.setState({messages: data});
        });
    }

    render() {
        return(
            <div>
                {
                    this.state.messages.map((message) => {
                        return(<Message message={message.text} likes={message.likes} />);
                    })
                }
            </div>
        );
    }
}

export default List;