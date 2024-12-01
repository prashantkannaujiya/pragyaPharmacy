import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userCart } from "./App";

function Checkout() {
  const [list, setlist] = useState([]);
  const [sum, setsum] = useState(0);
  const [customer,setcustomer]=useState({name:'',lastname:'',email:'',address:'',state:'',city:'',pin:''})
  const c = useContext(userCart);
  const navigate = useNavigate();
  useEffect(() => {
    setlist(c.cart);
    let s = 0;
    c.cart.forEach((a) => {
      s = s + a.Price * a.QTY;
    });
    setsum(s);
  }, [c.cart]);
  const placeOrder=()=>{
    alert(customer)
  }
  return (
    <div className="productDisplay container mx-auto text-center mb-5" style={{fontFamily:'Roboto,sans-serif'}}>
      <h4 className="text-dark   mt-3 text-start mb-5" >
        Preview your order and Pay
      </h4>
      <div className="d-md-flex justify-content-between mx-auto  mb-4">
        <div
          className=" w-100 text-start mx-0 align-self-start mb-4 bg-white p-3"
        
        >
          <form id="form1">
            <div className="  text-start">
              <h3 className=" h6 fw-light text-start">Your Contact</h3>
              <input
                type="email"
                placeholder="email"
                className="form-control m-1"
                onChange={(e)=>{setcustomer({...customer,email:e.target.value})}}
                required
              />
              <input type="checkbox" className="form-check-input m-1" />
              <label className="form-check-label m-1 pb-5">
                We'll send you offers
              </label>
            </div>

            <h3 className="h6 fw-light text-start ">Delivery</h3>
            <div className="row  mb-1">
              <div className="col">
                <input
                  type="text"
                  className=" form-control "
                  placeholder="First Name"
                  onChange={(e)=>{setcustomer({...customer,name:e.target.value})}}
                  required
                />
              </div>
              <div className="col ">
                <input
                  type="text"
                  className=" form-control "
                  placeholder="Last Name"
                  onChange={(e)=>{setcustomer({...customer,lastname:e.target.value})}}
                  required
                />
              </div>
            </div>

            <div className="  mb-1">
              <input
                type="text"
                className="form-control "
                placeholder="Address"
                onChange={(e)=>{setcustomer({...customer,address:e.target.value})}}
                required
              />{" "}
            </div>
            <div className="row ">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  onChange={(e)=>{setcustomer({...customer,city:e.target.value})}}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  onChange={(e)=>{setcustomer({...customer,state:e.target.value})}}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pin Code"
                  onChange={(e)=>{setcustomer({...customer,pin:e.target.value})}}
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div className="w-75 mb-5 " style={{height:'55vh',overflow: 'hidden'}} >
          <div className=" w-75 mx-auto scrollel ">
            {list.length != 0 &&
              list.map((a) => {
                return (
                  <div className="d-flex px-2 justify-content-between align-items-center bg-white mb-1 small ">
                    <p className="w-50 text-start">
                      <img
                        className="w-25 vh-25 mt-1 me-2"
                        src={a.IMAGE}
                        style={{ height: "9vh" }}
                      />
                      <span className="d-inline-block text-truncate" style={{maxWidth:'65%'}}>{a.NAME}</span>
                    </p>
                    <p>QTY : {a.QTY}</p>
                    <p className="text-start">
                     
                      <i className="bi bi-currency-rupee"></i> {a.Price}
                    </p>
                  </div>
                );
              })}
          </div>
          <p className="d-flex justify-content-between w-75 mx-auto fs-5 ">
            <span>Total :</span>
            <span>
              <i className="bi bi-currency-rupee"></i>
              {sum}
            </span>{" "}
          </p>
        </div>
      </div>
      <button className="btn btn-success"  form="form1" onSubmit={placeOrder}>Confirm Order & Book</button>
    </div>
  );
}
export default Checkout;
