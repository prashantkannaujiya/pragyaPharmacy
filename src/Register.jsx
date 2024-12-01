import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function Register()
{
    const navigate=useNavigate()
    const [user,setuser]=useState({username:'',email:'',mobile:'',address:'',password:''})
    
    const input=(ev)=>{
        ev.preventDefault();
        console.log(user)
        fetch('https://mlm.jpsw.in/customer/post',{
            method: 'post',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data)
            alert('User Registered')
            navigate('/')
        })
        .catch(e=>console.log(e))
    }
   
    return(
        <div className="container text-center w-50 bg-white p-5 mb-5 mt-5">
            <h2 className="text-secondary mt-2   mb-5"> Create Account with Us</h2>
      <form className="w-75 m-auto" onSubmit={(e)=>{input(e)}}>
        <div className="row">
            <div className="col">
            <input type="text" className="form-control" placeholder='name' onChange={(e)=>{setuser({...user,username:e.target.value})}} required />
      
            </div>
            <div className="col">
            <input type="email" className="form-control" placeholder='email' onChange={(e)=>{setuser({...user,email:e.target.value})}} required  />
      
            </div>
        </div>
        <div className="row mt-1">
            <div className="col">
            <input type="number" className="form-control" placeholder='mobile' onChange={(e)=>{setuser({...user,mobile:e.target.value})}} required/>
            
            </div>
            <div className="col">
            <input type="text" className="form-control" placeholder='address' onChange={(e)=>{setuser({...user,address:e.target.value})}} required/>
    
            </div>
        </div>
        <div className="row mt-1">
            <div className="col">
            <input type="password" className="form-control" placeholder="password" onChange={(e)=>{setuser({...user,password:e.target.value})}} required/><br/>
            
            </div>
            <div className="col">
            <input type="text" className="form-control" placeholder='address' onChange={(e)=>{setuser({...user,address:e.target.value})}} required/>
    
            </div>
        </div>
        
              <small className="text-secondary">By registering, you are agreeing with Pragya Hospital's terms and conditions.</small><br/>
                <button className="btn btn-success mt-3" >Register</button>
      
      </form>
                
        </div>
    )
}
export default Register;