import React from 'react';

class sessionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user)
            .then(() => this.props.closeModal());
    }

    handleDemo(e) {
        e.preventDefault();
        this.props.login({username: 'Demo-User', password: 'password'})
            .then(() => this.props.closeModal());
        

    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    renderErrors() {
        return (
            <>
                {this.props.errors.map((error, i) => (
                    <div key={`error-${i}`}>
                        {error}
                    </div>
                ))}
            </>
        );
    }


    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <p>Welcome to BassNimbus!</p> 
                <p className='modalerrors'>{this.renderErrors()}</p>
                
                    <br/>
                    <input className='modalinput' type="text" onChange={this.update('username')} placeholder='Your Username'/>
                    <input className='modalinput' type="password" onChange={this.update('password')} placeholder='Your Password'/>
                
                <br/>
                
                    <input className='modalsubmit' type="submit" value={this.props.formType}/>
                    <input className='modalsubmit' type="submit" value='Demo User' onClick={this.handleDemo} /> 

            </form>

        )
    }
}

export default sessionForm;