import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import data from "./productDatabase";
import { userCart } from "./App";
import HomeCard from "./HomeCard";
import SideBar from "./SideBar";

function Category()
{
    const location=useLocation();
    const navigate=useNavigate()
const [list,setlist]=useState([])
const c=useContext(userCart);
useEffect(()=>{
let k=data.filter((a)=>{
    if(a.category==location.state)
        {return a}
})
setlist(k)
},[location.state])
function cartAdd( ev,k)
{
  var Contains;
    k['QTY']=1;
    if(ev.target.innerHTML=='Add to Cart')
      {
          ev.target.innerHTML='Go to Cart';
          c.cart=[...c.cart,k]; 
           
          ev.target.className='btn btn-outline-secondary ';
      }
      else{
          navigate('/cart');
      }
  
c.setcart([...c.cart])
window.localStorage.setItem('cartlist',JSON.stringify(c.cart))
console.log(c.cart)
 
}
    return(
        <div className="container mb-2">
            <div className="bg-light mt-2 mx-auto px-1 fs-5 " ><span className="text-uppercase">{location.state}</span> : Showing {list.length} products</div>
          <div className=" d-md-flex">  
            <div className="w-25">
                <SideBar></SideBar>
            </div>
            
        <div className="row row-cols-md-3 mt-4 mx-auto justify-content-start w-100">
{
list.length!=0 && list.map((a)=>{
   return  <div className="col-md-3 mb-3">
         <div className='card border-0 shadow p-0 '>
            <img src={a.IMAGE} className='card-img-top w-50 mx-auto mt-1' style={{height:'25vh'}}/>
          
            
                <div className='card-body text-center '>
                  <p>{a.NAME}</p>
                <p><i className="bi bi-currency-rupee"></i> {a.Price}</p>
                <p><button className='btn btn-success' onClick={(e)=>{cartAdd(e,a)}}>Add to Cart</button></p>
    </div>
    </div>
    </div>
})
}
        </div>
        </div>
        </div>
    )
}
export default Category;