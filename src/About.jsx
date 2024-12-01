import React from 'react';
import { useNavigate } from 'react-router-dom';
import './about.css'
import { Carousel, CarouselItem } from 'react-bootstrap';
const About = () => {
  const navigate=useNavigate()
    return (
        <div>
          <div className="mb-5" id='aboutHead'>
  <div className="row no-gutters slider-text align-items-center justify-content-center">
    <div className="col-md-9 ftco-animate text-center">
      <h1 className="text-uppercase h3 fw-bold" style={{marginTop:'23vh',fontFamily:"Roboto , sans-serif"}}>About Us</h1>
      <div className="navigate-button text-center">
      <button onClick={()=>{navigate('/')}} className=''>HOME</button>
      <i class="bi bi-caret-right-fill"></i>
       <button > ABOUT US</button>
      </div>
    </div>
  </div>
</div>

            <>
  <div className="container mb-5 ">
    <div className="row gx-5">
      <div
        className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
        style={{ backgroundImage: "url(images/customer.jpg)" }}
      ></div>
      <div className="col-md-7 py-md-5 wrap-about pb-md-5 ">
        <div className="heading-section-bold mb-4 mt-md-5">
          <div className="ml-md-0">
            <h2 className="mb-4">Who we are..</h2>
          </div>
        </div>
        <div className="pb-md-5 pb-4 text-secondary">
          <p>
            But nothing the copy said could convince her and so it didn’t take
            long until a few insidious Copy Writers ambushed her, made her drunk
            with Longe and Parole and dragged her into their agency, where they
            abused her for their.
          </p>
          <h5>Established since 2023</h5>
          <p>
            But nothing the copy said could convince her and so it didn’t take
            long until a few insidious Copy Writers ambushed her.
          </p>
          <span id="points" />
          <span id="moreText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni in
            eaque quas saepe sed totam officiis odit vitae odio molestiae dicta
            hic nesciunt, repellat illum excepturi voluptatibus fugiat non.
            Deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos minus porro excepturi, a non sit eos debitis consectetur
            nostrum, sunt eius deleniti rerum magnam corrupti quae consequuntur
            maxime quasi tempora.
          </span>
          <p>
            <button
              onclick="toggleText()"
              id="textButton"
              className="btn btn-info collapsible"
            >
              Know more
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-section testimony-section  mb-5">
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-lg-5">
          <div className="services-flow">
            <img
              src="images/customers.jpg"
              width="450px"
              height="500px"
              style={{ borderTopRightRadius: 200 }}
            />
          </div>
        </div>
        <div className="col-lg-7">
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
</>

        </div>
    );
};

export default About;