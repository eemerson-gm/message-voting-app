import React, { Component } from 'react';

class Textbox extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({text: event.target.value});
    }

    handleSubmit(){
        fetch("http://localhost:3001/api/new/" + this.state.text);
    }

    render() {
        return(
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" className="Message-Box form-control" placeholder="Type a message..." value={this.state.text} onChange={this.handleChange}/>
                        </td>
                        <td>
                            <input type="button" className="btn btn-secondary w-100" value="Send" onClick={this.handleSubmit}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Textbox;