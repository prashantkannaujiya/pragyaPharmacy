import { useContext, useState } from "react";
import { userInfo } from "./App";
import { Link, useNavigate } from "react-router-dom";

function Login()
{
    const username=useContext(userInfo)
    const navigate=useNavigate()
   

    const [user,setuser]=useState({username:'',password:'',grant_type:'password'})
    const input=(ev)=>{
        alert('LOGIN')
        const urlencoded = new URLSearchParams();
urlencoded.append("UserName",user.username);
urlencoded.append("Password", user.password);
urlencoded.append("grant_type", "password");
        console.log(user)
        ev.preventDefault()
        fetch('https://mlm.jpsw.in/login',{
            method: 'post',
            mode: 'cors',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
            body: urlencoded,
           
        })
.then(res=>res.json())
        .then((data)=>{
            if(data.hasOwnProperty('error'))
                {
                    alert('invalid credentials')
                }
                else
                {
            window.localStorage.setItem('token',data.access_token)
console.log(data)
alert('LOGIN')
username.setuser(true)
}
        }).catch(e=>{console.log(e)})
    }
    return(
        <div className="container w-50 bg-white p-2 mt-5 mb-5">
            <h2 className="text-secondary  text-center mt-5 mb-5">Welcome, Please Login</h2>
      <form className=" w-50 m-auto text-center" onSubmit={(e)=>{input(e)}}>
      <input type="text" className="form-control" placeholder='name' onChange={(e)=>{setuser({...user,username:e.target.value})}} required /><br/>
      <input type="password" className="form-control" placeholder='Password' onChange={(e)=>{setuser({...user,password:e.target.value})}} required/><br/>
               
                <button className="btn btn-success ">Login</button>
      
      </form>
                <p className="text-center mt-5">New user ?  <Link style={{textDecoration:'',color:'black'}} to={'/register'}>Register Yourself</Link></p>
        </div>
    )
}
export default Login;