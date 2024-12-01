import { useContext, useEffect, useRef, useState } from "react";
import SubHeader from "./SubHeader";
import { userCart, userInfo } from "./App";
import './header.css'
import { Link, useNavigate } from "react-router-dom";
import logoPragya from './logoPragya.png'
import { RiEyeFill } from "react-icons/ri";
function Header() {
const ref=useRef();
const [searchbutton,setsearchbutton]=useState(false)
  const u=useContext(userInfo)
    const c=useContext(userCart)
    const navigate=useNavigate()
    useEffect(()=>{
if(searchbutton){ref.current.className='searchAnimate'}
else{ref.current.className='searchBar'}
const k=document.getElementsByClassName('searchButton')
document.body.addEventListener('click',(e)=>{
if(e.target!=ref.current && e.target!=k[0] && !k[0].contains(e.target))
  {
    ref.current.className='searchBar'
    setsearchbutton(false)
  }
})
    })
function userlog(){
  console.log('in fun')
 
u.setuser(null)
} 
const logoff=()=>{
  console.log('inside logoff')
  u.setuser(null)
}
const search=()=>{
  ref.current.className='searchAnimate';
}
  return (
   <div style={{backgroundColor:'#a6d8d8'}}>
    <>
  <div className="py-2  text-uppercase fw-bold" style={{fontFamily:'Roboto,sans-serif',fontSize:'11px',color:"white",backgroundColor:'darkcyan'}}>
    <div className="container">
      <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
        <div className="col-lg-12 d-block">
          <div className="row d-flex">
            <div className="col-md pr-4 d-flex topper align-items-center">
              <div className="icon mr-2 d-flex justify-content-center align-items-center">
                <span className="icon-phone2" />
              </div>
              <span className="text">+ 1235 2355 98</span>
            </div>
            <div className="col-md pr-4 d-flex topper align-items-center">
              <div className="icon mr-2 d-flex justify-content-center align-items-center">
                <span className="icon-paper-plane" />
              </div>
              <span className="text">youremail@email.com</span>
            </div>
            <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
              <span className="text">
                3-5 Business days delivery &amp; Free Returns
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav
    className="navbar navbar-expand-lg justify-content-lg-between  justify-content-around mx-5 px-5 fw-bold"
    id="ftco-navbar" style={{fontFamily:'Roboto,sans-serif',fontSize:'14px',fontWeight:'600',color:'black',letterSpacing:'2px'}}
  >
    <div className="container-fluid w-50">
      <Link className="navbar-brand" to={'/'}>
        Pragya Hospital
      </Link>
      </div>
      <button
        className="navbar-toggler "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
     <i className="bi bi-list"></i>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="ftco-nav">
  <ul className="navbar-nav w-100 justify-content-around " >
          <li className="nav-item active">
            <Link to={'/'} className="nav-link text-dark">
       HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/store'} className="nav-link text-dark">
              PRODUCT
            </Link>
          </li>
          {/* <li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false">Services</a>
						<div class="dropdown-menu" aria-labelledby="dropdown04">
							<a class="dropdown-item" href="shop.html">Shop</a>
							<a class="dropdown-item" href="product-single.html">Single Product</a>
							<a class="dropdown-item" href="cart.html">Cart</a>
							<a class="dropdown-item" href="checkout.html">Checkout</a>
						</div>
					</li> */}
          <li className="nav-item">
            <Link to={'/about'} className="nav-link text-dark">
           ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/'} className="nav-link text-dark">
          CONTACT
            </Link>
          </li>
          {
            !u.user ?  <li className="nav-item dropdown " >
            
            <Link 
   className="nav-link dropdown-toggle text-dark" 
   
   id="dropdown04"
   data-bs-toggle="dropdown"
   aria-haspopup="true"
   aria-expanded="false"
 >
   LOGIN
 </Link>
 <div className="dropdown-menu" aria-labelledby="dropdown04" id="headdrop" >
   <Link className=" dropdown-item " to={'/login'} href="shop.html">
     Login
   </Link>
   <Link className=" dropdown-item " to={'/register'} href="product-single.html">
     Register
   </Link>
 </div>
</li> :  <li className="nav-item dropdown " >
            
            <Link 
   className="nav-link dropdown-toggle text-dark" 
   
   id="dropdown04"
   data-bs-toggle="dropdown"
   aria-haspopup="true"
   aria-expanded="false"
 >
 USER
 </Link>
 <div className="dropdown-menu" aria-labelledby="dropdown04" id="headdrop" >
   <Link className=" dropdown-item " to={'/dash'} state={'order'}>
    Orders
   </Link>
   <Link className=" dropdown-item " to={'/dash'} state={'account'}>
   Account
   </Link>
   <Link className=" dropdown-item " to={''} onClick={logoff} >
LogOut   </Link>
 </div>
</li>
          }
          <li className="nav-item ">
         
          <input type="text" className="searchBar" style={{position:'absolute'}} ref={ref}/><button className="searchButton" onClick={()=>{searchbutton?setsearchbutton(false):setsearchbutton(true)}} ><i className="bi bi-search fs-5"></i></button>
          
        
          </li>
        
          <li className="nav-item ">
            <Link style={{ fontSize: 14 }} to={'/cart'} className="nav-link text-dark">
              <span className="" style={{position:'relative',bottom:'5px'}} ><i className="bi bi-cart3 fs-5 fw-bolder "></i>  [{c.cart.length}]</span>
            
            </Link>
          </li>
        </ul>
      </div>
  
  </nav>
  {/* END nav */}
</>

    </div>
  );
}
export default Header;
