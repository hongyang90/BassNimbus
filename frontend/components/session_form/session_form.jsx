import React from 'react';

class sessionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.login({username: 'demouser', password: 'password'});
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    renderErrors() {
        return (
            <>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </>
        );
    }


    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Welcome to BassNimbus!</p> 
                <div onClick={this.props.closeModal} className="close-x">X</div>

                
                <p>{this.renderErrors()}</p>
                
                    <br/>
                    <input type="text" onChange={this.update('username')} placeholder='Your Username'/>
                
                <br/>
                    <input type="password" onChange={this.update('password')} placeholder='Your Password'/>
                
                <br/>
                <input type="submit" value={this.props.formType}/>
                <br/>
                <input type="submit" value='Demo User' onClick={this.handleClick} /> 
            </form>

        )
    }
}

export default sessionForm;