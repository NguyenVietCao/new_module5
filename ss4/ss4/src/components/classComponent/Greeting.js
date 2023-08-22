import React from "react";

 export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: window.location.localStorge.getItem('classFirstName') || '',
            lastName: window.location.localStorge.getItem('classLastName') || '',
        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handlelastNameChange = this.handlelastNameChange.bind(this);
    }
    handleFirstNameChange = (e) => this.setState({ firstName: e.target.value });
    handlelastNameChange = (e) => this.setState({ lastName: e.target.value });
    componentDidUpdate() {
        window.localStorage.setItem('classFirstName', this.state.firstName),[this.state.firstName];
        window.localStorage.setItem('classLastName', this.state.lastName),[this.state.lastName];
    }
    render() {
        return (
            <div>
                <input value={this.state.firstName} onChange={this.handleFirstNameChange} />
                <br />
                <input value={this.state.lastName} onChange={this.handlelastNameChange} />
                <p>
                    Hello,{''}
                    <span>
                        {this.state.firstName} {this.state.lastName }
                    </span>
                </p>
            </div>
        )
    }
}