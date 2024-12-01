import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
function HomeCard() {
  const navigate = useNavigate();
  return (
    <div style={{backgroundColor:'#a6d8d8',paddingBottom:'13vh',paddingTop:'5vh',fontFamily:'Roboto,sans-serif'}}>
      <div className="home-slider owl-carousel">
        <div className="slider-item js-fullheight">
          <div className="overlay" />
          <div className="container p-0">
            <div
              className="row d-md-flex no-gutters slider-text align-items-center justify-content-start"
              data-scrollax-parent="true"
            >
            
                <div className="w-50 animateThis">
                  <span className="bg-dark text-white text-uppercase p-1 fw-bold" style={{letterSpacing:'4px',fontSize:'small'}}>
                    100% Genuine &amp; Trusted Pharmacy
                  </span>
                  <div className="horizontal" >
                    <h1 className="mb-4 mt-3 text-uppercase fw-light display-4">Order Medicines From Anywhere</h1>
                    <p className="mb-4">
                      Your medicines will get delivered at your doorstep. <br />{" "}
                      Order With Prescription
                    </p>
                    
                    <img src="./images/capsule.png" className='img-fluid' alt="" />
                  </div>
                </div>
              <img
                className="w-50 order-md-last img-fluid"
                src="./images/bg-1.png"
                alt=""
              />

             
         
            </div>
          </div>
        </div>
        {/* 
			<div class="slider-item js-fullheight">
				<div class="overlay"></div>
				<div class="container-fluid p-0">
					<div class="row d-flex no-gutters slider-text align-items-center justify-content-end"
						data-scrollax-parent="true">
						<img class="one-third order-md-last img-fluid" src="images/bg_1.jpg" alt="">
						<div class="one-forth d-flex align-items-center ftco-animate"
							data-scrollax=" properties: { translateY: '70%' }">
							<div class="text">
								<span class="subheading">100% Genuine & Trusted Pharmacy</span>
								<div class="horizontal">
									<h1 class="mb-4 mt-3">Order Medicines From Anywhere</h1>
									<p class="mb-4">Your medicines will get delivered at your doorstep.</p>

									<p><a href="#" class="btn-custom">Order Now</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
      </div>
    </div>
  );
}
export default HomeCard;
