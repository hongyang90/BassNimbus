import React from 'react';

class sessionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.demoLogin2 = this.demoLogin2.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user)
            .then(() => this.props.closeModal());
    }

    handleDemo(e) {
        e.preventDefault();

        
        setTimeout(() => this.props.login({ username: 'DemoUser', password: 'password' })
            .then(() => this.props.closeModal()), 1800);
        setTimeout(()=> this.demoLogin2(), 1000);
        this.demoLogin1();
        
        

    }

    demoLogin1() {
        let input = document.querySelectorAll(".modalinput")[0];
        input.select();
        input.value = '';
        let text = 'DemoUser';
        let l = text.length;
        let current = 0;
        let time = 100;
        let write_text = function () {
            input.value += text[current];
            if (current < l - 1) {
                current++;
                setTimeout(function () { write_text() }, time);
            } else {
                input.setAttribute('value', input.value);
            }
        };
        setTimeout(function () { write_text(); }, time);
    }

    demoLogin2() {
        let input = document.querySelectorAll(".modalinput")[1];
        input.select();
        input.value = '';
        let text = 'password';
        let l = text.length;
        let current = 0;
        let time = 100;
        let write_text = function () {
            input.value += text[current];
            if (current < l - 1) {
                current++;
                setTimeout(function () { write_text() }, time);
            } else {
                input.setAttribute('value', input.value);
            }
        };
        setTimeout(function () { write_text(); }, time);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    renderErrors() {
        return (
            <>
                {this.props.errors.map((error, i) => (
                    <div key={`error-${i}`} >
                        {error}
                    </div>
                ))}
            </>
        );
    }


    render () {
        return (
            <form className='sessionForm' onSubmit={this.handleSubmit}>
                <div onClick={this.props.closeModal} className="close-x"></div>
                <p className='w'>Welcome to BassNimbus!</p> 
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