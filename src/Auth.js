import React ,{Component} from 'react';
import './Auth.css';
import {Redirect} from 'react-router-dom';
import axios from "axios";

class Auth extends Component {
    state = {
        Email : '',
        Password : '',
        token : null ,
        error : null ,
        isSignUp : true ,
    }

    inputHandler = (event)=> {
           this.setState({
               [event.target.placeholder] : event.target.value 
           })
    }

    submitHandler = (e)=>{
         e.preventDefault();
         this.auth(this.state.Email , this.state.Password)
    }

    auth = (email ,password)=> {
        const authData = {
            email: email,
            password: password,
            returnSercureToken : true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAYZWFO7Psypn7kc6N0sA-dzd5zXNaR_i0';
        if(!this.state.isSignUp){
               url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYZWFO7Psypn7kc6N0sA-dzd5zXNaR_i0'
        }
        axios.post(url,authData).then(
            response=>{ console.log(response);
                this.setState({token : response.data.idToken})}
        ).catch(err => {console.log(err.response.data.error);
            this.setState({error : err.response.data.error})})
    }

    switchAuthModeHandler = ()=>{
        this.setState(prevState => {
            return {isSignUp : !prevState.isSignUp}
        })
    }

    

    render(){

        let errorMessage = null ;
        if (this.state.error){
            errorMessage = (<p className='errorMessage'>{this.state.error.message}</p>) ;
        };

        let authRedirect = null ;
        if(this.state.token !== null){
            authRedirect = <Redirect to='/home'/>
        }

        return(
            <div className='auth'>
                {authRedirect}
              <img className="auth_logo" 
                 src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024" alt="Netflix Logo"/>
            <form className='form' onSubmit={this.submitHandler}>
                <p className='auth_sign'>{this.state.isSignUp ? 'Sign Up' :  'Sign In'}</p>
              <ul >
                <li>
                   <input 
                   className='Auth_input' 
                   type='email' 
                   placeholder='Email'
                   value = {this.state.Email} 
                   onChange={this.inputHandler} />
                </li>
                {errorMessage}
                <li>
                   <input 
                   className='Auth_input' 
                   type='text' 
                   placeholder='Password'
                   value = {this.state.Password} 
                   onChange={this.inputHandler}/>
                </li>
                <li><button 
                      className="Auth_button" 
                      type='submit'>{this.state.isSignUp ? 'SignUp' :  'Sign In'}</button></li>
              </ul>
              <p className='switch' onClick={this.switchAuthModeHandler}>{this.state.isSignUp ? 'sign in' :  'sign up'}</p>
            </form>
            </div>
        )
    }
}

export default Auth ; 