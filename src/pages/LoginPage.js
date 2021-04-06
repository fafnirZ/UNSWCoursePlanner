import React from 'react'

function Login(){
    class Login extends React.Component{
        state={
            zID:'',
            Password:'',
        }
        handleChange = (e)=>{
            const {name,value} = e.target
            this.setState({[name]:value})
        }

        handSubmit = (e)=>{

        }
        render(){
            return(
                <div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <input type='zID' name='zID' placeholder='zId' required onChange/>
                            <input type='Pssword' name='Password' placeholder='Password' required onChange/>
                            <button onSubmit={this.handleChange}>Sign In</button>
                        </form>
                            
                        
                    </div>
                </div>
            )
        }
    }
}
export default Login;