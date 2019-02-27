import React from 'react';

class sessionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                Welcome to BassNimbus! <br/>
                <div onClick={this.props.closeModal} className="close-x">X</div>

                <br/>
                {this.renderErrors()}
                <label>Username:
                    <br/>
                    <input type="text" onChange={this.update('username')} placeholder='Username'/>
                </label>
                <br/>
                <label >Password: <br/>
                    <input type="password" onChange={this.update('password')} placeholder='Password'/>
                </label>
                <br/>
                <input type="submit" value={this.props.formType}/>
            </form>

        )
    }
}

export default sessionForm;