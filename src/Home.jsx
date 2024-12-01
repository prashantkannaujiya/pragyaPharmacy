import HomeCard from "./HomeCard";
import "./Home.css";
import data from "./productDatabase";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userCart } from "./App";


import { CarouselItem, Carousel, CarouselCaption } from "react-bootstrap";
import HomeSub from "./HomeSub";
import HomeSlide from "./HomeSlide";
function Home() {
  const c = useContext(userCart);
  const navigate = useNavigate();
 
  function cartAdd(ev, k) {
    k["QTY"] = 1;
    console.log(k);
    console.log(ev.target.innerHTML)
    if (ev.target.innerHTML == "Add to Cart") {
      var f = false;
      ev.target.innerHTML = "Go to Cart";
      c.cart.filter((a) => {
        if (k.NAME == a.NAME) {
          f = true;

          return (a.QTY = a.QTY + 1);
        }
      });
      c.cart = (!f && [...c.cart, k]) || c.cart;
      c.setcart([...c.cart]);
      window.localStorage.setItem("cartlist", JSON.stringify(c.cart));
      console.log(c.cart);
      ev.target.className = "btn btn-outline-secondary ";
    } 
    else {
          navigate("/cart");
    }

  
  }

  return (
    <div >
      <div className="mx-auto mb-5" >
      <HomeCard></HomeCard>
      </div>
    
<HomeSub></HomeSub>
     <HomeSlide></HomeSlide>
      <h3 className="text-center h4 mt-5" style={{ fontFamily: '' }}>TOP SELLING PRODUCTS</h3>
      <div className="h6 text-center" style={{ fontFamily: '' }}>100% AUTHENTIC PRODUCTS GUARANTEED</div>
      <div className="row w-100 justify-content-center mb-5 mx-auto">
        {data
          .filter((a, i) => {
            if (i < 3) return a;
          })
          .map((a, i) => {
            return (
              <div className="col-lg-3 m-1">
                <a style={{ textDecoration: "none" }} >
                  <div className="card w-100 border-0 ">
                    <div className="card-header text-center border-0 w-100 bg-white">
                      <img className="image-fluid bg-white" style={{ height: '25vh', width: '50%' }} src={data[i].IMAGE} />
                    </div>
                    <div className="card-body fs-5 text-center" style={{fontFamily:'Roboto ,sans-serif'}}>
                      <span>{data[i].NAME}</span><br/>
                      <span>
                        <i className="bi bi-currency-rupee"></i>
                        {data[i].Price}
                      </span><br/>
                      <button
                        className="btn btn-success"
                        onClick={(e) => {
                          cartAdd(e, a);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
      <section className="  mb-5">
    <div className="container mt-5 pt-5 ">
      <div className="row  justify-content-center">
        <div className="col-lg-5">
          <div className="services-flow">
            <img
              src="images/customers.jpg"
              width="450px"
              height="500px"
            
            />
          </div>
        </div>
        <div className="col-lg-6  ">
          <div className="heading-section ftco-animate mb-5">
            <h2 className="mb-4">Our satisfied customer says</h2>
           
          </div>
          <Carousel>
            <CarouselItem>
            <div
                  className="user-img mb-4 "
                  
                ></div>
                 <p className="mb-4 pl-4 line">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">Garreth Smith</p>
            </CarouselItem>
            <CarouselItem>
            <div
                  className="user-img mb-4 "
                 
                ></div>
                 <p className="mb-4 pl-4 line">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">Garreth Smith</p>
            </CarouselItem>
            <CarouselItem>
            <div
                  className="user-img mb-4 "
                 
                ></div>
                 <p className="mb-4 pl-4 line">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">Garreth Smith</p>
            </CarouselItem>
          </Carousel>
         
          </div>
        </div>
      </div>
      
  </section>
    </div>
  );
}
export default Home;
