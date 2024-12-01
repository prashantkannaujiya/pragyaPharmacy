import { useContext, useEffect, useRef, useState } from "react";
import { userCart } from "./App";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [list, setlist] = useState([]);
  const [sum, setsum] = useState(0);
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
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

  useEffect(() => {
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

      },
   
    );
    if(isIntersecting){  ref.current.className=ref.current.className + ' animateThis';}
   console.log(ref.current.id)
    console.log(isIntersecting);
    observer.observe(ref.current);
    return () => observer.disconnect();
    
  }, [isIntersecting]);
  function addQuantity(k) {
    c.cart.forEach((a) => {
      if (a.NAME == k.NAME) {
        a.QTY = a.QTY + 1;
      }
    });
    console.log(c.cart);
    c.setcart([...c.cart]);
    window.localStorage.setItem("cartlist", JSON.stringify(c.cart));
  }
  function reduceQuantity(k) {
    if (k.QTY > 1) {
      c.cart.forEach((a) => {
        if (a.NAME == k.NAME) {
          a.QTY = a.QTY - 1;
        }
      });
      c.setcart([...c.cart]);
      window.localStorage.setItem("cartlist", JSON.stringify(c.cart));
    } else {
      Swal.fire({ text: "Quantity already minimum, try removing it!" });
    }
  }

  function remove(k) {
    c.cart = c.cart.filter((a) => {
      if (a.NAME != k.NAME) {
        return a;
      }
    });

    c.setcart([...c.cart]);
    console.log(c.cart);
    window.localStorage.setItem("cartlist", JSON.stringify(c.cart));
  }
  return (
    <div className="containe">
      <div className="mb-5" id="aboutHead">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
            <h1
              className="text-uppercase h3 fw-bold"
              style={{ marginTop: "23vh", fontFamily: "Roboto , sans-serif" }}
            >
              Your Cart
            </h1>
            <div className="navigate-button text-center">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className=""
              >
                HOME
              </button>
              <i class="bi bi-caret-right-fill"></i>
              <button> CART</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3 mb-3">
        <p
          className=" mx-auto sm  p-2  text-dark  "
          style={{ backgroundImage: "linear-gradient(to right,skyblue,white)" }}
        >
          <ul>
            <li>15% discount across medicines</li>
            <li>
              Free delivery on orders above{" "}
              <i className="bi bi-currency-rupee"></i> 2000
            </li>
          </ul>
        </p>
        <div className="table-responsive">
        <table className="table " ref={ref}>
          <tr >
            <th></th>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          {list.map((a) => {
            return (
              <tr>
                <td>
                  <i
                    className="bi bi-x-square-fill fw-bold " style={{backgroundColor:'aliceblue'}}
                    onClick={() => {
                      remove(a);
                    }}
                  ></i>
                </td>
                <td className="text-center">
                  <img
                    className=" img-fluid p-1"
                    src={a.IMAGE}
                    style={{ height: "15vh", width: "fit-content",backgroundColor:'aliceblue' }}
                  />
                </td>
                <td>{a.NAME}</td>
                <td>
                  <i className="bi bi-currency-rupee" style={{backgroundColor:'aliceblue'}}></i> {a.Price}
                </td>
                <td>
                  <span style={{backgroundColor:'aliceblue'}}
                    className="bi bi-plus-square me-2"
                    onClick={() => {
                      addQuantity(a);
                    }}
                  ></span>
                  {a.QTY}
                  <span style={{backgroundColor:'aliceblue'}}
                    className="bi bi-dash-square ms-2"
                    onClick={() => {
                      reduceQuantity(a);
                    }}
                  ></span>
                </td>
                <td>
                  <i className="bi bi-currency-rupee" style={{backgroundColor:'aliceblue'}}></i> {a.QTY * a.Price}
                </td>
              </tr>
            );
          })}
        </table>
        </div>
        <div className="mx-auto text-end text-secondary border-top border-bottom p-2 px-4   bg-light" style={{fontFamily:'Roboto , sans-serif'}}>
          Subtotal : <i className="bi bi-currency-rupee "></i> {sum}<span className="me-4"></span>
        </div>
      </div>
      <div className="container  mt-0 text-start mx-auto">
        <div className=" mx-auto">
        <button
          onClick={() => {
            c.cart.length == 0 ? alert("Cart is Empty") : navigate("/checkout");
          }}
          className="btn btn-success "
        >
          Checkout
        </button>
        </div>
        
      </div>
    </div>
  );
};
export default Cart;
