import React from 'react'
import './Service.css';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

const Service = () => {

  return (
    <div>
      {/* style={{backgroundColor:'#92a8d1',textTransform:'capitalize',color:'black',zIndex:'1',position:'relative',overflow:'hidden'}} */}
      <nav class="navbar navbar-expand-lg " >
        <div class="container-fluid" >
          <div class="collapse navbar-collapse"  >
            <ul class="navbar-nav" >
              <li class="nav-item" >
                <a class="nav-link active" href="/Personal"> <strong></strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/otherdet"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Currentaddress"></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      {/* forth-image-case */}
      <div class="container8" >
        <div class="row" >
          {/* <!-- Left Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="title_all_box style_one dark_color">
              <div class="title_sections left">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h5><span style={{ fontsize: '32px' }}> Work Directly with Brands - Get jobs locally </span></h5>
                <p>Become MyMobiForce partner with zero joining fees</p>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="service_wrapper" >

              <img src="https://www.mymobiforce.com/images/sliders/partner-hero.png" class="img-fluid" alt="image" style={{ borderRadius: "56%" }} />
            </div>
          </div>
        </div>
      </div>

      <br></br>
      {/* forth-image-close */}

      {/* <!-- ADVERTISERS SERVICE CARD --> */}
      <section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-header text-center">
              <h2 class="fw-bold fs-1">
                Why 70K
                <span class="b-class-secondary"> partner trust MyMobiforce  </span> To Earn and grow  <br />

              </h2>
              <p class="sec-icon"><i class="fa-solid fa-gear"></i></p>
            </div>
          </div>
          <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  <img src='https://www.mymobiforce.com/images/icons/join.png' />
                </div>
                <h3>Zero Joining Fees</h3>
                <p>No upfront fees or hidden charges. It's absolutely free to become part of our thriving network.</p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  <img src='https://www.mymobiforce.com/images/icons/worker.png' />
                </div>
                <h3>Work Locally</h3>
                <p>Get connected with brands and consumers seeking services in your area. Work in your neighbourhood and save time on travel.</p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  <img src='https://www.mymobiforce.com/images/icons/responsibility.png' />
                </div>
                <h3>Insurance Coverage</h3>
                <p>Our peace of mind matters to us. Benefit from insurance coverage to protect you during service engagements.</p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  <img src='https://www.mymobiforce.com/images/icons/payment-gateway.png' />
                </div>
                <h3>Weekly and Timely Payments</h3>
                <p>Say goodbye to delayed payments. We ensure you receive your hard-earned money every week, promptly.</p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  <img src='https://www.mymobiforce.com/images/icons/earnings.png' />
                </div>
                <h3>Get Upskilled</h3>
                <p>Earn more, earn more! Avail yourself of our comprehensive training programs to upgrade your skills and stay ahead.</p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  <img src='https://www.mymobiforce.com/images/icons/tech-app.png' />
                </div>
                <h3>MobiCare</h3>
                <p>As a valued partner, we provide access to loan support and essential toolkits to enhance your service capabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ADVERTISERS SERVICE CARD ENDED --> */}

      {/* third-image-case */}
      <div class="container8">
        <div class="row">
          {/* <!-- Left Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="service_wrapper">
              <br></br>
              <br></br>
              <img src="https://www.mymobiforce.com/images/skills-img.png" class="img-fluid" alt="image" />
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="title_all_box style_one dark_color">
              <div class="title_sections left">
                <br></br>
                <br></br>
                <h5><span style={{ fontsize: '32px' }}> Multiple skill Jobs to Choose from</span></h5>
              </div>
            </div>
            {/* <!-- Spacing --> */}
            <div class="spacing"></div>

            {/* <!-- Process Boxes -->
            <!-- Repeat this block for each process box --> */}
            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/listing.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Choose from various categories.</h6>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/shield.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Improve your ratings with quality delivery.</h6>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/earnings.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Earn More!</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      {/* third-image-close */}


      {/* forth-image-case */}
      <div class="container8">
        <div class="row">
          {/* <!-- Left Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="title_all_box style_one dark_color">
              <div class="title_sections left">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h5><span style={{ fontsize: '32px' }}>Get Hyperlocal Jobs directly from Brands </span></h5>
              </div>
            </div>
            {/* <!-- Spacing --> */}
            <div class="spacing"></div>

            {/* <!-- Process Boxes -->
            <!-- Repeat this block for each process box --> */}
            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/gps.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>  Get jobs near your home.</h6>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/collaboration.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Select jobs based on your skills.</h6>

                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/time-management.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Save time and money.</h6>
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
              <img src="https://www.mymobiforce.com/images/hyperlocal.png" class="img-fluid" alt="image" />
            </div>
          </div>
        </div>
      </div>

      <br></br>
      {/* forth-image-close */}


      {/* 6-image-case */}
      <div class="container8">
        <div class="row">
          {/* <!-- Left Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="service_wrapper">
              <br></br>
              <br></br>
              <img src="https://www.mymobiforce.com/images/upskill.png" class="img-fluid" alt="image" />
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="title_all_box style_one dark_color">
              <div class="title_sections left">
                <br></br>
                <br></br>
                <h5><span style={{ fontsize: '32px' }}> Upskill and Earn more with MMF Academy</span></h5>
              </div>
            </div>
            {/* <!-- Spacing --> */}
            <div class="spacing"></div>

            {/* <!-- Process Boxes -->
            <!-- Repeat this block for each process box --> */}
            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/update.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Learn complimentary skills.</h6>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/opportunity.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Explore new opportunities.</h6>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/leader.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Learn from Industry experts.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      {/* 5-image-close */}


      {/* 6-image-case */}
      <div class="container8">
        <div class="row">
          {/* <!-- Left Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="title_all_box style_one dark_color">
              <div class="title_sections left">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h5><span style={{ fontsize: '32px' }}>Build your online service business in seconds </span></h5>
              </div>
            </div>
            {/* <!-- Spacing --> */}
            <div class="spacing"></div>

            {/* <!-- Process Boxes -->
            <!-- Repeat this block for each process box --> */}
            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/catalogue.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Quick Service Catalogue.</h6>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/booking.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Manage your customers and bookings. </h6>

                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/payment-gateway.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Accept online payments.</h6>
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
              <img src="https://www.mymobiforce.com/images/online-business.png" class="img-fluid" alt="image" />
            </div>
          </div>
        </div>
      </div>

      <br></br>
      {/* 6-image-close */}
      {/* image-open */}
      <center> <a href='https://www.mymobiforce.com/images/about-12.jpg'><img src="https://www.mymobiforce.com/images/about-12.jpg"
        alt="A black, brown, and white dog wearing a kerchief" style={{ display: 'flex', maxWidth: '50%', }} /></a></center>
      {/* image-close */}

      <br></br>

      {/* cards-4 */}
      <div class="container10">
        <div class="title_sections">
          <center> <h2>Meet out Partners </h2></center>
          <center><p>After being in this industry for over a decade and helping over 50,000+ lives, this is what our technicians have to say about us.</p></center>
          <br></br>
        </div>
        <div class="card-deck">
          <div class="card">
             <div class="card-body" >
            <br></br>
             <br></br>
              <br></br>
              <h3 class="card-title" >
                I don't have to sit without work anymore, all thanks to MyMobiForce. Now i earn as per my time and in my hometown, thanks to team MyMobiForce.
              </h3>
              <br />
               <p> <strong>Vinod Jain </strong></p>
            </div>
          </div>
          <div class="card">
              <div class="card-body" >
            <br></br>
             <br></br>
              <br></br>
              <h3 class="card-title" >
               Thanks to MyMobiForce, I am now working with top Indian companies and earinign more than 50,000 rs/month and ebjoying other social benefits also.
                                 
              </h3>
              <br />
               <p> <strong>Sunil Pathihar</strong></p>
            </div>
          </div>
          <div class="card">
             <div class="card-body" >
            <br></br>
             <br></br>
              <br></br>
              <h3 class="card-title" >
                I don't have to sit without work anymore, all thanks to MyMobiForce. Now i earn as per my time and in my hometown, thanks to team MyMobiForce.
              </h3>
              <br />
               <p> <strong>Vinod Jain </strong></p>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      {/* cards-close */}

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



    </div>

  )
}

export default Service