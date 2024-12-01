import React, { useEffect, useRef, useState } from 'react';
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
const HomeSub = () => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

      },
   
    );
    if(isIntersecting){ref.current.className=ref.current.className+ '  animateThis'  }
   console.log(ref.current.id)
    console.log(isIntersecting);
    observer.observe(ref.current);
    return () => observer.disconnect();
    
  }, [isIntersecting]);
    return (
        <div>
            <>
  <div className="container">
    <div className="row justify-content-center mb-3 pb-3">
      <div className="col-md-12 heading-section text-center mx-1 ftco-animate">
        <h2 className="mb-4">Why choose Us</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row justify-content-between" id='subcontent' ref={ref}>
      <div className="col-lg-4 px-2 py-2 text-center d-flex " >
        <div className=" p-4 py-md-5">
          <div className="icon d-flex justify-content-center align-items-center mb-4">
            <span className=""><FaShippingFast size={'12vh'}/></span>
          </div>
          <div className="media-body">
            <h3 className="h6 fw-bold">Free Shipping</h3>
            <p className='h6 '>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 px-2 py-2 text-center  d-flex">
        <div className="p-4 py-md-5">
          <div className="icon d-flex justify-content-center align-items-center mb-4">
            <span className="flaticon-customer-service" ><RiCustomerService2Line size={'12vh'} /></span>
          </div>
          <div className="media-body">
            <h3 className="h6 fw-bold">Support Customer</h3>
            <p className='h6 '>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 px-2 py-2 text-center  d-flex ">
        <div className=" p-4 py-md-5">
          <div className="icon d-flex justify-content-center align-items-center mb-4">
            <span className="flaticon-payment-security"><RiSecurePaymentLine size={'12vh'} /></span>
          </div>
          <div className="media-body">
            <h3 className="h6 fw-bold">Secure Payments</h3>
            <p className='h6 '>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

        </div>
    );
};

export default HomeSub;