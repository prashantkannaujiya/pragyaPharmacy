import { useContext, useEffect, useState } from "react"
import { userCart } from './App';
import data from './productDatabase'
import './store.css'
import { useNavigate } from "react-router-dom";
function Store() {
  var [list, setlist] = useState([])
  const c = useContext(userCart);
const navigate=useNavigate()
  useEffect(() => {


    setlist(data)
    fetch('https://mlm.jpsw.in/product/get')
      .then(res => res.json())
      .then((data) => {

        const u = JSON.parse(data)
        console.log(u)
        

      }).catch(e => { console.log(e) })


  }, [c.cart])

  function cartAdd(ev, k) {
    k["QTY"] = 1;
    console.log(k);
    if (ev.target.innerHTML == "Add to Cart") {
      var f = false;
      ev.target.innerHTML = "Go to Cart";
      ev.target.style.backgroundColor='grey'
      c.cart.filter((a) => {
        if (k.NAME == a.NAME) {
          f = true;

          return (a.QTY = a.QTY + 1);
        }
      });
      c.cart = (!f && [...c.cart, k]) || c.cart;

      
    } else {
      navigate("/cart");
    }

    c.setcart([...c.cart]);
    window.localStorage.setItem("cartlist", JSON.stringify(c.cart));
    console.log(c.cart);
  }
  function AscSort()
  {
    list.sort((a,b)=>{return a.Price*0.9-b.Price*0.9 })
    setlist([...list])
  }
  function DscSort()
  {
   list.sort((a,b)=>{return b.Price*0.9-a.Price*0.9 })
    setlist([...list])
  }
 
  return (
    <div className="container mt-4">
      <div className="text-center display-5 mt-5 mb-5 animateThis">Our latest medicine's stock</div>
      <div className="p-3 text-dark  mb-2" style={{backgroundImage:'linear-gradient(to right,skyblue,white)'}}>10% discount applicable across all medicines until offer lasts.</div>
      <div class="btn-group mb-4" style={{width:'10%'}}>
        <button type="button" class="btn btn-success btn-sm ">Sort</button>
        <button type="button" class="btn btn-success btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu rounded-0 ">
          <li><button className="dropdown-item text-secondary" onClick={AscSort}>Ascending</button></li>
          <li><button className="dropdown-item text-secondary" onClick={DscSort}>Descending</button></li>


        </ul>
      </div>
      <div className=' row   w-auto mt-2 justify-content-start moveup' >
        {
          list.length != 0 && list.map((a) => {
            return <div className='col-lg-3 col-md-4 col-6    h-auto mb-4 ' id='cardProduct'>
              <div className='card border-0  p-0 '>
                <img src={a.IMAGE} className='card-img-top w-50  mx-auto mt-1' onError={(e)=>{e.target.src='https://i.quotev.com/b2gtjqawaaaa.jpg'}} id="storePic"/>


                <div className='card-body text-center'>
                  <span className="text-truncate m-1">{a.NAME}</span><br/>
                  <span className="m-1"><i className="bi bi-currency-rupee"></i> <s className="text-danger ">{a.Price}</s> <span className="text-info fs-6 fw-bold d-block d-lg-inline"><i className="bi bi-currency-rupee"></i>{a.Price * 0.9}</span></span><br/>
                 
                  <span className="m-1" ><button className='cartbutton ' onClick={(e) => { cartAdd(e, a) }}>Add to Cart</button></span>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
export default Store;