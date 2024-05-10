import React, { useEffect } from 'react';
import './Mymobiforce.css'
import Accordion from 'react-bootstrap/Accordion';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

const Mymobiforce = () => {
  useEffect(() => {
    let slider = document.querySelector(".slider");
    let currentSlide = 0;
    let totalSlides = slider.querySelectorAll(".wrapper .left > div").length - 1;

    slider.querySelector(".controls .up").addEventListener("click", function () {
      if (currentSlide === 0) return;
      currentSlide--;
      slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide * -100}vh`;
      slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide) * -100}vh`;
    });

    slider.querySelector(".controls .down").addEventListener("click", function () {
      if (currentSlide === totalSlides) return;
      currentSlide++;
      slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide * -100}vh`;
      slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide) * -100}vh`;
    });
  }, []); 

    

  return (
   <>
     <div class="slider">
      <div class="controls">
        <div class="up">
          <i class="fa fa-chevron-up"></i>
        </div>
        <div class="down">
          <i class="fa fa-chevron-down"></i>
        </div>
      </div>

      <div class="wrapper">
        <div class="left">
          <div>
            <h2>Blended Field Service Management Software </h2>
            <p style={{textAlign:'center'}}>
            Deliver Customer Delight with power of Fixed + Gig workforce 
            <ul style={{ftextAlign:'center'}}>
												<li>Scale Field Operations</li>
												  <li>Optimized Scheduling</li>
												  <li>Improve Customer Support</li>
											   </ul>
            </p>
            <button><a href="https://youtu.be/twIUN8trU8c" class="theme-btn one lightbox-image">Video Tour</a></button>
          </div>

          <div>
            <h2>Become Our Service Partner to get more work, more income </h2>
            <p>
            Join MyMobiForce to get work near your home along with other benefits like Insurance, on-the-job training, loan, etc. 
            </p>
            <button><a href="https://play.google.com/store/apps/details?id=com.hopefloats.mobiforce" class="theme-btn one">Download</a></button>
          </div>

          <div>
            <h2>Become Our Service Partner to get more work, more income </h2>
            <p>
            Join MyMobiForce to get work near your home along with other benefits like Insurance, on-the-job training, loan, etc. 
            </p>
            <button><a href="https://play.google.com/store/apps/details?id=com.hopefloats.mobiforce" class="theme-btn one">Download</a></button>
          </div>

          <div>
            <h2>Become Our Service Partner to get more work, more income </h2>
            <p>
            Join MyMobiForce to get work near your home along with other benefits like Insurance, on-the-job training, loan, etc. 
            </p>
            <button><a href="https://play.google.com/store/apps/details?id=com.hopefloats.mobiforce" class="theme-btn one">Download</a></button>
          </div>

          <div>
            <h2>India’s largest B2B Service Marketplace  </h2>
            <p>
            Scale your business and drive customer experience with the power of gig workforce
            </p>
            <button ><a href="https://youtu.be/twIUN8trU8c" class="theme-btn one lightbox-image">Video Tour</a></button>
          </div>
          {/* //// */}
        </div>
        <div class="right">
         
          <div>
            <img src="https://www.mymobiforce.com/images/sliders/slider-12-i-1.jpg"  />
          </div>

          <div>
            <img src="https://www.mymobiforce.com/images/sliders/slider-12-i-1.jpg"  />
          </div>

          <div>
            <img src="https://www.mymobiforce.com/images/sliders/slider-12-i-1.jpg"   />
          </div>

          <div>
            <img src="https://www.mymobiforce.com/images/sliders/slider-12-i-2.jpg" />
          </div>

          <div>
            <img src="https://www.mymobiforce.com/images/sliders/platform-img.png"  />
          </div>
        </div>
      </div>
    </div>
    {/* image slider close */}
    <br/>
    {/* clint-slider-start */}
    <div class="slider1">
  <div class="slide-track">
    <div class="slide">
      <img src="https://www.mymobiforce.com/images/clients/logo-18.jpg" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://www.mymobiforce.com/images/clients/logo-19.jpg" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://www.mymobiforce.com/images/clients/logo-20.jpg" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://www.mymobiforce.com/images/clients/logo-21.jpg" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://www.mymobiforce.com/images/clients/logo-22.jpg" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://www.mymobiforce.com/images/clients/logo-23.jpg" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://www.mymobiforce.com/images/clients/logo-24.jpg" height="100" width="250" alt="" />
    </div>
    <div class="slide">
      <img src="https://www.mymobiforce.com/images/clients/logo-25.jpg" height="100" width="250" alt="" />
    </div>
  </div>
</div>
 {/* clint-slider-close */}

 {/* <!-- ADVERTISERS SERVICE CARD --> */}
<section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
  <div class="container">
    <div class="row">
      <div class="section-header text-center">
        <h2 class="fw-bold fs-1">
        Supercharge
          <span class="b-class-secondary"> Your Business with </span> MyMobiForce  <br/><br/>
          <h6>Take your brand’s reach and revenue to new heights with never-before field service and after-sales support.</h6>
        </h2>
        <p class="sec-icon"><i class="fa-solid fa-gear"></i></p>
      </div>
    </div>
    <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
      <div class="col">
        <div class="service-card">
          <div class="icon-wrapper">
            <img src='https://www.mymobiforce.com/images/icons/crm.png'/>
          </div>
          <h3>Built-in CRM</h3>
          <p>
          With our homegrown, brand-first platform Oneserv, you’ll get a customisable CRM for all your business needs.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="service-card">
          <div class="icon-wrapper">
            <img src='https://www.mymobiforce.com/images/icons/cust-app.png'/>
          </div>
          <h3>Intuitive customer app</h3>
          <p>
          Wow your customers with a sleek, user-friendly consumer app with seamless navigation, instant updates, and interactive features.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="service-card">
          <div class="icon-wrapper">
            <img src='https://www.mymobiforce.com/images/icons/pan.png'/>
          </div>
          <h3>PAN-India service network</h3>
          <p>
          No more boundaries – it's time to go nationwide with our 54K+ active and on-demand skilled field technicians.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="service-card">
          <div class="icon-wrapper">
           <img src='https://www.mymobiforce.com/images/icons/manage-service.png'/>
          </div>
          <h3>Managed services</h3>
          <p>
          Managing operations and platforms feels cumbersome? Don’t worry. You focus on your selling while our in-house team manages the our platform and daily field operations on your behalf.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="service-card">
          <div class="icon-wrapper">
          <img src='https://www.mymobiforce.com/images/icons/after-sales.png'/>
          </div>
          <h3>Seamless after-sales support</h3>
          <p>
          Streamlines service requests, improves response times, and enhances customer satisfaction – giving your business the edge it deserves with our brand-first platform Oneserv.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="service-card">
          <div class="icon-wrapper">
          <img src='https://www.mymobiforce.com/images/icons/integration.png'/>
          </div>
          <h3>Quick & easy intergrations</h3>
          <p>
          Worried about compatibility? Fear not! Our platform seamlessly integrates with your existing systems, ensuring a smooth transition and effortless operation from .
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- ADVERTISERS SERVICE CARD ENDED --> */}
 
                              {/* <!-- careds2-start --> */}
<div style={{backgroundImage:"url('https://www.mymobiforce.com/images/sliders/slider-12-1.jpg')"}}>
  <div class="container mt-4">
    <br></br>
    <div class="title_sections">
      <h3><span style={{ fontSize: '32px', }}> <center>Our Offerings</center></span></h3>
      <br></br>
      <p> <center>Deployed gig workforce and scaled 6 core enterprise field operations.</center></p>
    </div>
    <div class="row">
      {/* Service Box 1 */}
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div class="service_box style_three dark_color">
          <div class="service_content">
            <div class="content_inner">
              <small className="nom">01</small>
              <h5>Installations</h5>
              <p>Large pool of highly skilled professionals for installations of enterprise and home appliances in connectivity and Consumer goods.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Service Box 2 */}
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div class="service_box style_three dark_color">
          <div class="service_content">
            <div class="content_inner">
              <small className="nom">02</small>
              <h5>Break/ Fix</h5>
              <p>Machine Repairs. Enhance your field service network with highly trained professionals.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* <!-- Service Box 3 --> */}
<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
  <div class="service_box style_three dark_color">
    <div class="service_content">
        <div class="content_inner">
            <small class="nom">03</small>
            <h5>Preventive Maintenance</h5>
            <p>Routine maintenance of various appliances maintaining asset
              uptime.</p>
        </div>
    </div>
</div>
</div>
{/* <!-- Service Box 4 --> */}
<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
  <div class="service_box style_three dark_color">
    <div class="service_content">
        <div class="content_inner">
            <small class="nom">04</small>
            <h5>RMA</h5>
            <p>Goods/parts return and logistics governed by strong technical
              platform.</p>
        </div>
    </div>
</div>
</div>
{/* 
<!-- Service Box 5 --> */}
<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
  <div class="service_box style_three dark_color">
    <div class="service_content">
        <div class="content_inner">
            <small class="nom">05</small>
            <h5>Audit / Surveys</h5>
            <p>Leverage our on field network for KYC audits, RF and Broadband surveys, background checks etc.</p>
        </div>
    </div>
</div>
</div>

      {/* Service Box 6 */}
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div class="service_box style_three dark_color">
          <div class="service_content">
            <div class="content_inner">
              <small className="nom">06</small>
              <h5>Warehousing</h5>
              <p>Manage on demand storage hub spots along with warehouses countrywide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
     <br></br>
     <br></br>
      {/* second-card-complet */}
     
     {/* third-image-case */}
     <div class="container8">
    <div class="row">
        {/* <!-- Left Column --> */}
        <div class="col-xl-6 col-lg-12">
            <div class="service_wrapper">
                <img src="https://www.mymobiforce.com/images/slider-12-i-11.jpg" class="img-fluid" alt="image"/>
            </div>
        </div>

        {/* <!-- Right Column --> */}
        <div class="col-xl-6 col-lg-12">
            <div class="title_all_box style_one dark_color">
                <div class="title_sections left">
                  <br></br>
                    <h5><span style={{fontsize:'32px'}}>Network of over 70K skilled partners </span></h5>
                </div>
            </div>
            {/* <!-- Spacing --> */}
            <div class="spacing"></div>
            
            {/* <!-- Process Boxes -->
            <!-- Repeat this block for each process box --> */}
            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/manage-jobs.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                        <h6>15000 + Pin Codes covered</h6>
                        <p> Cover Pan India operations at scale.</p>
                    </div>
                </div>
            </div>

            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/distribution.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                        <h6>Network of brand authorized service centers</h6>
                        <p>  On boarded freelancers, franchisees etc . </p>
                    </div>
                </div>
            </div>

            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/assignment.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                        <h6>Network of brand authorized service centers</h6>
                        <p>  On boarded freelancers, franchisees etc . </p>
                    </div>
                </div>
            </div>

            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/development-plan.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                        <h6>4 Million work orders delivered </h6>
                        <p> Cover Pan India operations at scale.</p>
                    </div>
                </div>
            </div>
          
           
        </div>
    </div>
</div>

  <br></br>
    {/* third-image-close */}
          
       {/* footer-complete */}
       <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: '  rgb(201, 35, 18)' }}>
      <h5 style={{textalign: 'center', letterspacing: '2px',color:'#fff',fontweight:'normal'}}>
        <span style={{fontsize:'1.5em'}}>100+</span> Customers served   <span style={{margin: '0 3em'}}>
          |</span>   <span style={{fontsize:'1.5em'}}>650</span> Cities  <span style={{margin: '0 3em'}}>|</span>   
          <span style={{fontsize:'1.5em'}}>4M</span> work orders delivered  </h5>
      </div>
    </MDBFooter>
      <br></br>
          {/* footer-close */}        
                              
          {/* forth-image-case */}
     <div class="container8">
    <div class="row">
        {/* <!-- Left Column --> */}
        <div class="col-xl-6 col-lg-12">
            <div class="title_all_box style_one dark_color">
                <div class="title_sections left">
                  <br></br>
                    <h5><span style={{fontsize:'32px'}}>Leveraging Technology for faster and reliable execution </span></h5>
                </div>
            </div>
            {/* <!-- Spacing --> */}
            <div class="spacing"></div>
            
            {/* <!-- Process Boxes -->
            <!-- Repeat this block for each process box --> */}
            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/manage-jobs.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                        <h6>  No Code Tech platform</h6>
                        <p>  Cover Pan India operations at scale.</p>
                    </div>
                </div>
            </div>

            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/distribution.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                        <h6>Service Helpdesk</h6>
                        <p> Manage complete ticket life cycle.  </p>
                    </div>
                </div>
            </div>

            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/assignment.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                        <h6>Mobile app for partners</h6>
                        <p>  Powerful tool used by partners to execute jobs.  </p>
                    </div>
                </div>
            </div>

            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/development-plan.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                        <h6>Customer Dashboard for enterprises  </h6>
                        <p> Manage field operations with deeper data insights.</p>
                    </div>
                </div>
            </div>
          
           
        </div>
       
        {/* <!-- Right Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="service_wrapper" >
            <br></br>
            <br></br>
            <br></br>
                <img src="https://www.mymobiforce.com/images/leveraging-tech.png" class="img-fluid"  alt="image"/>
            </div>
        </div>
    </div>
</div>

  <br></br>
    {/* forth-image-close */}                      
                              
        {/* footer-complete */}
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: '  rgb(201, 35, 18)' }}>
      <h5 style={{textalign: 'center', letterspacing: '2px', color:'#fff',fontweight:'normal'}}>
        <span style={{fontsize:'1.5em'}}>15%</span>  
      Cost Saving – Thanks to our proprietary AI powered match making engine and auto scheduler </h5>
      </div>
    </MDBFooter>
      <br></br>
          {/* footer-close */}                             
							   <br></br>
							   
                {/* 5-image-case */}
     <div class="container8">
    <div class="row">
        {/* <!-- Left Column --> */}
        <div class="col-xl-6 col-lg-12">
        <br></br>
            <div class="service_wrapper">
                <img src="https://www.mymobiforce.com/images/unloack-roi.jpg" class="img-fluid" alt="image"/>
            </div>
        </div>

        {/* <!-- Right Column --> */}
        <div class="col-xl-6 col-lg-12">
            <div class="title_all_box style_one dark_color">
                <div class="title_sections left">
                  <br></br>
                    <h5><span style={{fontsize:'32px'}}>Unlock ROI and transform your business with MyMobiForce </span></h5>
                </div>
            </div>
            {/* <!-- Spacing --> */}
            <div class="spacing"></div>
            
            {/* <!-- Process Boxes -->
            <!-- Repeat this block for each process box --> */}
            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/manage-jobs.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                        <h6> Zero Technology Investment</h6>
                        <p> Manager your fixed + gig field force on MyMobiForce.</p>
                    </div>
                </div>
            </div>

            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/distribution.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                    <h6>Ready Pan India Service Network</h6>
                    <p> Reach new horizons effortlessly! </p>
                    </div>
                </div>
            </div>

            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/assignment.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                    <h6>24x7 Service Support</h6>
                    <p> Round-the-clock service support by dedicated teams. </p>
                    </div>
                </div>
            </div>

            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/development-plan.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                    <h6>Boost Service Revenue  </h6>
                    <p>Elevate your service revenue with ease! </p>
                    </div>
                </div>
            </div>
          
           
        </div>
    </div>
</div>

  <br></br>
    {/* 5-image-close */}                  
                              
           {/* footer-complete */}
           <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: '  rgb(201, 35, 18)' }}>
      <h5 style={{textalign: 'center', letterspacing: '2px',color:'#fff',fontweight:'normal'}}>
        <span style={{fontsize:'1.5em'}}>60%</span> Same Day Closure  <span style={{margin: '0 3em'}}>
          |</span>   NPS of <span style={{fontsize:'1.5em'}}>82</span>      
       <span style={{margin: '0 3em'}}>|</span>   <span style={{fontsize:'1.5em'}}>2000+</span> Trainings delivered  </h5>
      </div>
    </MDBFooter>
      <br></br>
          {/* footer-close */}                           

               {/* 6-image-case */}
     <div class="container8">
    <div class="row">
        {/* <!-- Left Column --> */}
        <div class="col-xl-6 col-lg-12">
            <div class="title_all_box style_one dark_color">
                <div class="title_sections left">
                  <br></br>
                    <h5><span style={{fontsize:'32px'}}>Oneserv – Easiest way for customers to connect with brands for their servicing needs </span></h5>
                </div>
            </div>
            {/* <!-- Spacing --> */}
            <div class="spacing"></div>
            
            {/* <!-- Process Boxes -->
            <!-- Repeat this block for each process box --> */}
            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/manage-jobs.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                        <h6> Establish customer connect </h6>
                        <p>Provide exceptional customer experience via oneserv.</p>
                    </div>
                </div>
            </div>

            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/distribution.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                    <h6>Tighter integration with OEMs</h6>
                    <p>Customers can now reach to any brand from one app. </p>
                    </div>
                </div>
            </div>

            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/assignment.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                    <h6>Direct service booking to brand CRM in 30 Seconds</h6>
                    <p> Activate warranty and book any service with brands. </p>
                    </div>
                </div>
            </div>

            <div class="process_box style_one dark_color">
                <div class="process_box_outer">
                    <div class="icon">
                        <img src="https://www.mymobiforce.com/images/icons/development-plan.png" alt="Icon"/>
                    </div>
                    <div class="content_box">
                    <h6>Buy AMC, extended warranty and parts </h6>
                    <p>Consumer can buy AMC or extended warranty directly from brands.</p>
                    </div>
                </div>
            </div>
          
           
        </div>
       
        {/* <!-- Right Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="service_wrapper" >
            <br></br>
            <br></br>
            <br></br>
                <img src="https://www.mymobiforce.com/images/oneserv.png" class="img-fluid"  alt="image"/>
            </div>
        </div>
    </div>
</div>

  <br></br>
    {/* 6-image-close */}                            
							   
		   {/* footer-complete */}
       <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: '  rgb(201, 35, 18)' }}>
      <h5 style={{textalign: 'center', letterspacing: '0.5px',color:'#fff', fontweight:'normal'}}>
         <span style={{fontsize:'1.5em'}}>30</span>  Seconds to book Service 
           <span style={{margin: '0 2em'}}>|</span>   
            <span style={{fontsize:'1.5em'}}>99%</span>  happy Customers 
            <span style={{margin: '0 2em'}}>|</span>   Brand QR for direct customer connect </h5>
      </div>
    </MDBFooter>
      <br></br>
          {/* footer-close */}        					   
							   
          <section class="services">
        <div class="container">
            <h2 class="title">Industries We Serve</h2>
            <div class="cards">

                <div class="card">
            <center>  <img src='https://www.mymobiforce.com/images/industries/signal-tower-1.png' width={'50px'} height={'100px'}/></center>  
                    <h3>Telecom</h3>
                    
                </div>

                <div class="card">
                <center>  <img src='https://www.mymobiforce.com/images/industries/fridge-2.png' width={'50px'} height={'100px'}/></center>  
                    <h3>White Goods</h3>
                   
                </div>

                <div class="card">
            <center>   <img src='https://www.mymobiforce.com/images/industries/wifi-router.png' width={'50px'} height={'100px'}/></center> 
                    <h3>Networking</h3>
                    
                </div>

                <div class="card">
            <center>   <img src='https://www.mymobiforce.com/images/industries/charging-station.png' width={'50px'} height={'100px'}/></center> 
                    <h3>EV</h3>
                    
                </div>

                <div class="card">
             <center>   <img src='https://www.mymobiforce.com/images/industries/solar-panel-1.png' width={'50px'} height={'100px'}/></center>
                    <h3>Solar</h3>
                 
                </div>

                <div class="card">
                <center>    <img src='https://www.mymobiforce.com/images/industries/home.png' width={'50px'} height={'100px'}/></center> 
                    <h3>Utility Products</h3>
                    
                </div>

            </div>
        </div>
    </section>
						{/* Accordion-start	    */}
            <p style={{textAlign:'center',color:'black',textTransform:'capitalize',fontSize:'50px'}}><strong>FAQs</strong></p>
                 <Accordion defaultActiveKey="0" style={{marginLeft:'100px',marginRight:'100px',backgroundColor:'white'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header >
											 What types of services can your network of technicians perform?
											 </Accordion.Header>
        <Accordion.Body>
        Our network of technicians can perform services including installations of enterprise and home appliances, break/fix repairs, preventive maintenance, RMA services, audits/surveys, and warehousing.
        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Do you offer preventive maintenance services, and how can it help maintain asset uptime?</Accordion.Header>
        <Accordion.Body>
        Yes, we provide preventive maintenance services that help ensure the continuous uptime of various appliances and assets by conducting routine maintenance tasks.
        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is the process for returning goods or parts through the RMA service?</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <Accordion.Item eventKey="4">
        <Accordion.Header> How can MyMobiForce assist with audit and survey-related tasks?</Accordion.Header>
        <Accordion.Body>
        MyMobiForce leverages our on-field network to perform tasks like KYC audits, RF and Broadband surveys, background checks, and more, ensuring accuracy and efficiency. We also provide general field survey, pick-and-drop and background verification activities.
        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <Accordion.Item eventKey="5">
        <Accordion.Header> Can you explain the warehousing services you provide?</Accordion.Header>
        <Accordion.Body>
        We offer on-demand storage hubs and warehouses nationwide, helping you manage inventory and storage requirements efficiently.
        </Accordion.Body>
      </Accordion.Item>

      <br></br>
      <Accordion.Item eventKey="6">
        <Accordion.Header>	 How can customers stay updated on job status and invoices, and communicate with technicians?</Accordion.Header>
        <Accordion.Body>
        Yes, our customer support team is available to assist you with any questions or issues you may encounter while using MyMobiForce.
        </Accordion.Body>
      </Accordion.Item>
      <br></br>

      <Accordion.Item eventKey="7">
        <Accordion.Header> Is customer support available if we have questions or encounter issues while using MyMobiForce?</Accordion.Header>
        <Accordion.Body>
        Yes, our customer support team is available to assist you with any questions or issues you may encounter while using MyMobiForce.
        </Accordion.Body>
      </Accordion.Item>

      <br></br>
      <Accordion.Item eventKey="8">
        <Accordion.Header>What industries or businesses can benefit the most from MyMobiForce's field service management solutions?</Accordion.Header>
        <Accordion.Body>
        MyMobiForce's solutions are adaptable and beneficial for a wide range of industries, including those in connectivity, consumer goods, appliances, and more that require efficient field service management.
        </Accordion.Body>
      </Accordion.Item>
      <br></br>

      <Accordion.Item eventKey="9">
        <Accordion.Header> How can customers stay updated on job status and invoices, and communicate with technicians?</Accordion.Header>
        <Accordion.Body>
        Customers receive real-time job status updates and invoice details via email, SMS, or WhatsApp. They can also communicate with technicians through various channels for seamless interaction.
        </Accordion.Body>
      </Accordion.Item>



    </Accordion>
          	{/* Accordion-close	    */} 
                              <br></br>
                      <div className='footerr'>
                              <MDBFooter style={{backgroundColor:'gray'}} >
      <MDBContainer className='p-4' style={{color:'wheat'}}>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Useful Links</h5>
            <br/>
            <ul className='list-unstyled mb-0'>
              <li>
              <a href="service-partner.html" style={{color:'white'}}>Service Partner</a>
              </li>
              <br/>
              <li>
              <a href="blogs.html" style={{color:'white'}}>Blog</a>
              </li>
              <br/>
              <li>
              <a href="https://login.mymobiforce.com/#/Login " style={{color:'white'}}>Login</a>
              </li>
              <br/>
              <li>
              <a href="privacy-policy.html" style={{color:'white'}}>Privacy policy</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Quick Connects</h5>
            <br/>
            <ul className='list-unstyled'>
              <li>
              For Telecom, Networking, Cyber Security, Home Appliances, Background verification, General Survey, and FSM-platform related queries 
              <a href="https://forms.gle/3bFiE3stJtwcjCBc7" target="_blank" style={{fontweight:'700', color: '#ffa197 !important',color:'white'}}>Click Here</a>
              </li>
               <br/>
            
               <li >For Freelancer, Service Partner, and Customer 
                <a href="https://forms.gle/nG8qqbBjfCxWv5kz9" target="_blank" 
                style={{fontweight:'700', color: '#ffa197 !important' ,color:'wheat'}}>Click Here</a>  <br/>or call +91-8069451255</li>
               
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Contact Us</h5>
            <br/>
            <ul className='list-unstyled mb-0'>
              <li>
               	Hopefloats Technologies Private Limited <br/>
							C-22 A, Sector-57, Noida (INDIA) <br/><strong>Email:</strong> sales@mymobiforce.com
              </li>
              <li>
                <a href='https://www.facebook.com/MyMobiForce/' className='text-dark'>
                  <img height={'30px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTxoQuW106YRzYTSxuIEc13ol1YHM740q6QGbITHXoA&s'/>
                </a> &nbsp;&nbsp;
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FMyMobiforce" target="_blank">
										<img src="https://www.mymobiforce.com/images/x-twitter.png" height={'30px'}/>
                                    </a>  &nbsp;&nbsp;
                                    <a href="https://www.instagram.com/my_mobiforce/" target="_blank">
                                      <img src='https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg' height={'40px'}/>
                                       
                                    </a>

              </li>
             
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'> WE ARE PRESENT IN</h5> <br/>
            <p> <strong>India/Australia/USA/Canada/UK//Indonesia</strong> </p>
                
            <ul className='list-unstyled'>
              <li>
               <img src='https://www.mymobiforce.com/images/flags.png'/>
              </li>
              <li>
               <strong>Reach us at</strong>: sales@mymobiforce.com
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    </div>

           {/* footer-end */}
    
	  
                              
                             
                        
    
   </>
  )
}

export default Mymobiforce