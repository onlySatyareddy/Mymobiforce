import React from 'react'
import './OurPlatform';
import Accordion from 'react-bootstrap/Accordion';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

const OurPlatform = () => {
  return (
    <>
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
                <br></br>
                <h5><span style={{ fontsize: '32px' }}>Blended Field Service Mangement Software</span></h5>
              </div>
            </div>
            {/* <!-- Spacing --> */}
            <div class="spacing"></div>

            {/* <!-- Process Boxes -->
            <!-- Repeat this block for each process box --> */}
            <div class="process_box style_one dark_color">
              <div class="process_box_outer">

                <div class="content_box">
                  <h6>  Deliver Customer Delight with power of Fixed + Gig workforce</h6>
                  <p><ul style={{ float: 'left' }}>
                    <li>Scale Field Operations</li>
                    <li>Optimized Scheduling</li>
                    <li>Improve Customer Support</li>
                  </ul>
                    <ul style={{ float: 'left', marginleft: '1em' }}>
                      <li> Improve productivity</li>
                      <li>Deeper insights</li>
                      <li>Organized customer Data</li>
                    </ul>
                  </p>
                </div>

              </div>
              <button><a href="/Service" class="nav-link" style={{backgroundColor:'red',borderRadius:'10px 0px 10px 0px'}}>
                Service Partner
              </a></button>
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="service_wrapper" >
              <br></br>

              <img src="https://www.mymobiforce.com/images/platform-img.png" class="img-fluid" alt="image" />
            </div>
          </div>
        </div>
      </div>

      <br></br>
      {/* forth-image-close */}
      {/* clint-slider-start */}
      <div class="slider1">
        <div class="slide-track">
          <div class="slide">
            <img src="https://www.mymobiforce.com/images/clients/logo-12.jpg" height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://www.mymobiforce.com/images/clients/logo-13.jpg" height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://www.mymobiforce.com/images/clients/logo-14.jpg" height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://www.mymobiforce.com/images/clients/logo-15.jpg" height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://www.mymobiforce.com/images/clients/logo-17.jpg" height="100" width="250" alt="" />
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
      <br></br>
      {/* image-open */}
      <center> <a href='https://youtu.be/_HWZMWV6SWU'><img src="https://www.mymobiforce.com/images/fsmPlatform.jpg"
        alt="A black, brown, and white dog wearing a kerchief" style={{ display: 'flex', maxWidth: '50%', }} /></a></center>
      {/* image-close */}
      <br></br>

      {/* <!-- ADVERTISERS SERVICE CARD --> */}
      <section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-header text-center">
              <h2 class="fw-bold fs-1">
                Deliver
                <span class="b-class-secondary">  Delight with power of Fixed  </span> + Gig workforce <br />

              </h2>
              <p class="sec-icon"><i class="fa-solid fa-gear"></i></p>
            </div>
          </div>
          <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  <img src='https://www.mymobiforce.com/images/icons/work-order.png' />
                </div>
                <h3>Work Order Management</h3>
                <p>
                  MyMobiForce understands how the real world of field service works. Generate work orders with single or multiple services, subtasks, and parts specific to each service. Manage Appointments, data captured in the field along with activity traces and call logs.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  <img src='https://www.mymobiforce.com/images/icons/tech-app.png' />
                </div>
                <h3>Field Technician App</h3>
                <p>
                  A powerful tool equipped with features like Digital ID, Task Management, Route Optimization, Navigation Support, Chat, Audio, Video Support, Asset Management, Order Parts, and the MMF Shop for selling parts and products.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  <img src='https://www.mymobiforce.com/images/icons/schedule.png' />
                </div>
                <h3>Scheduling & Dispatching</h3>
                <p>
                  No more boundaries – it's time to go nationwide with our 54K+ active and on-demand skilled field technicians.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  <img src='https://www.mymobiforce.com/images/icons/gps.png' />
                </div>
                <h3>GPS Tracking and Navigation</h3>
                <p>
                  GPS tracking helps monitor field technician location to ensure that there’s no delay in reaching the job site.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  <img src='https://www.mymobiforce.com/images/icons/dispatch-note.png' />
                </div>
                <h3>Dispatch Control</h3>
                <p>
                  Manage your entire global field teams in one platform, from people data, time off and expenses to reporting, performance and more.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="service-card">
                <div class="icon-wrapper">
                  <img src='https://www.mymobiforce.com/images/icons/employees.png' />
                </div>
                <h3>On Demand Workforce</h3>
                <p>
                  your gateway to nationwide on-demand talent. Access a pool of skilled gig workers who can quickly respond to your service calls on demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ADVERTISERS SERVICE CARD ENDED --> */}

      {/* first-image-case */}
      <div class="container8">
        <div class="row">
          {/* <!-- Left Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="title_all_box style_one dark_color">
              <div class="title_sections left">
                <br></br>
                <h5><span style={{ fontsize: '32px' }}> Intelligent Scheduling and Optimization </span></h5>
              </div>
            </div>
            {/* <!-- Spacing --> */}
            <div class="spacing"></div>

            {/* <!-- Process Boxes -->
            <!-- Repeat this block for each process box --> */}
            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/manage-jobs.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6> Manage jobs with auto scheduling console </h6>
                  <p> Get a 360 view of all jobs.</p>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/distribution.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Assign work based on business rules</h6>
                  <p> Ensure right job is assigned to right resource. </p>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/assignment.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Get complete visibility into jobs</h6>
                  <p> Track and divide work based on geography. </p>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/development-plan.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Optimize resource schedules  </h6>
                  <p> Automatically optimize based on distance, rate card and schedule. </p>
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
              <img src="https://www.mymobiforce.com/images/demoJob.png" class="img-fluid" alt="image" />
            </div>
          </div>
        </div>
      </div>

      <br></br>
      {/* first-image-close */}

      {/* footer-complete */}
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: '  rgb(201, 35, 18)' }}>
          <h5 style={{ color: '#fff' }}>Achieve optimal scheduling with MyMobiforce's
            intelligent algorithms, which take into consideration your organization's business objectives, compliance
            rules, team locations, availability, skill sets, and calendars to plan tasks. </h5>
        </div>
      </MDBFooter>
      <br></br>
      {/* footer-close */}
      {/* third-image-case */}
      <div class="container8">
        <div class="row">
          {/* <!-- Left Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="service_wrapper">
              <br></br>
              <br></br>
              <img src="https://www.mymobiforce.com/images/fieldEngineer.png" class="img-fluid" alt="image" />
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="title_all_box style_one dark_color">
              <div class="title_sections left">
                <br></br>
                <h5><span style={{ fontsize: '32px' }}> Cutting Edge Mobile application for Field Engineers</span></h5>
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
                  <h6>Access and update information when offline</h6>
                  <p> View job details from anywhere without network connectivity.</p>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/collaboration.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Collaborate with backend SMEs with chat/audio/video</h6>
                  <p> Access knowledge articles and communicate with experts. </p>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/time-management.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Manage inventory in real time</h6>
                  <p>Track your inventory and order parts on the job. </p>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/bill.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Generate service reports and invoices on site</h6>
                  <p> Capture customer signature, happy codes etc while job completion. </p>
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
          <h5 style={{ color: '#fff', letterspacing: '2px' }}>MyMobiForce App - a
            powerful tool equipped with features like Digital ID, Task Management,
            Route Optimization, Navigation Support, Chat, Audio, Video Support,
            Asset Management, Order Parts, and the MMF Shop for selling parts and products. </h5>
        </div>
      </MDBFooter>
      <br></br>
      {/* footer-close */}

      {/* 5-image-case */}
      <div class="container8">
        <div class="row">
          {/* <!-- Left Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="title_all_box style_one dark_color">
              <div class="title_sections left">
                <br></br>
                <h5><span style={{ fontsize: '32px' }}>Service 360 – Deliver service on every channel </span></h5>
              </div>
            </div>
            {/* <!-- Spacing --> */}
            <div class="spacing"></div>

            {/* <!-- Process Boxes -->
            <!-- Repeat this block for each process box --> */}
            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/responsibility.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Omni channel Engagement</h6>
                  <p>Communicate across traditional and modern channels.</p>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/time-management.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Real time support with live chat/audio/video</h6>
                  <p> Chat/video 1 on 1 instantly or groups on any device. </p>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/whatsapp.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Deeper engagement with Whatsapp channel</h6>
                  <p> Send all transactional alerts/notifications instantly. </p>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/bot.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Automated BOTs for customer service</h6>
                  <p> Enable customers to engage in messaging conversations in response to outbound messages via Whatsapp/Web integrations. </p>
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
              <img src="https://www.mymobiforce.com/images/leveraging-tech.png" class="img-fluid" alt="image" />
            </div>
          </div>
        </div>
      </div>

      <br></br>
      {/* 6-image-close */}

      {/* footer-complete */}
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: '  rgb(201, 35, 18)' }}>
          <h5 style={{ color: '#fff', letterspacing: '2px' }}>Improve customer support with Service Task 360.
            Track every customer interaction, attach proofs of service, audio, video, and chat conversations,
            and gather valuable customer ratings. </h5>
        </div>
      </MDBFooter>
      <br></br>
      {/* footer-close */}

      {/* 6-image-case */}
      <div class="container8">
        <div class="row">
          {/* <!-- Left Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="service_wrapper">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <img src="https://www.mymobiforce.com/images/panIndia.png" class="img-fluid" alt="image" />
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div class="col-xl-6 col-lg-12">
            <div class="title_all_box style_one dark_color">
              <div class="title_sections left">
                <h5><span style={{ fontsize: '32px' }}>  On Demand Field Service – Maximise your field force with MyMobiForce Pan India Service network</span></h5>
              </div>
            </div>
            {/* <!-- Spacing --> */}
            <div class="spacing"></div>

            {/* <!-- Process Boxes -->
            <!-- Repeat this block for each process box --> */}
            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/worker.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Schedule contractors/Gig workers on same platform</h6>
                  <p>Dispatch in-house and Gig workers from MyMobiForce marketplace from one view.</p>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/user.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Manage your service network at one place</h6>
                  <p>Brand authorised service centres or smaller service partners or individual freelancers. </p>
                </div>
              </div>
            </div>

            <div class="process_box style_one dark_color">
              <div class="process_box_outer">
                <div class="icon">
                  <img src="https://www.mymobiforce.com/images/icons/budget.png" alt="Icon" />
                </div>
                <div class="content_box">
                  <h6>Fixed to Flexible cost operations</h6>
                  <p>By utilising gig marketplace part of fixed cost can be variabalised. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      {/* 6-image-close */}
      {/* footer-complete */}
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: '  rgb(201, 35, 18)' }}>
          <h5 style={{ color: '#fff', letterspacing: '2px' }}>Introducing MyMobiforce's On-Demand Field Service Model
            - your gateway to nationwide on-demand talent. Access a pool of skilled gig workers who can quickly
            respond to your service calls on demand. </h5>
        </div>
      </MDBFooter>
      <br></br>
      {/* footer-close */}

      {/* cards-4 */}
      <div class="container">
        <div class="title_sections">
          <center> <h2>Pricing Plans </h2></center>
          <center><p>Transaction Based</p></center>
          <br></br>
        </div>
        <div class="card-deck">
          <div class="card">
            <br></br>
            <h1 style={{ backgroundColor: '#f0f3f9', }}>Help Desk <br></br> </h1>
            <br></br>
            <div class="card-body">
              <h5 class="card-title">Intelligent dispatch control with CRM capability</h5>
              <br/>
              <ul style={{minheight: '140px'}}>
                <li>
                  <span> Dispatch Console and scheduling</span>
                </li>
                <br/>
                <li>
                  <span> Tickets Management</span>
                </li>
                <br/>
                <li>
                  <span> Workflow Automation</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
          <br></br>
          <h1 style={{ backgroundColor: '#f0f3f9', }}>Field Service <br></br> </h1>
           <br></br>
            <div class="card-body">
              <h5 class="card-title">Manage all field teams with full CRM and field service capability</h5>
              <br/>
              <ul style={{minheight: '140px'}}>
                <li>
                  <span> Dispatch Console and scheduling</span>
                </li>
                <br/>
                <li>
                  <span> Mobile App</span>
                </li>
                <br/>
                <li>
                  <span> Service Insights</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
          <br></br>
          <h1 style={{ backgroundColor: '#f0f3f9', }}>Contractors <br></br> </h1>
           <br></br>
            <div class="card-body">
              <h5 class="card-title">Empower and manage third party contractors/vendors</h5>
              <br/>
              <ul style={{minheight: '140px'}}>
                <li>
                  <span> Onboarding</span>
                </li>
                <br/>
                <li>
                  <span> Payments</span>
                </li>
                <br/>
                <li>
                  <span>Contractor Teams</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
          <br></br>
          <h1 style={{ backgroundColor: '#f0f3f9', }}>Gig Workforce <br></br> </h1>
           <br></br>
            <div class="card-body">
              <h5 class="card-title">Manage fixed + gig service network on same platform</h5>
              <br/>
              <ul style={{minheight: '140px'}}>
                <li>
                  <span>Partner Onboarding</span>
                </li>
                <br/>
                <li>
                  <span> Payments</span>
                </li>
                <br/>
                <li>
                  <span>Compliances</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br/>
        <center><button style={{backgroundColor:'red',borderRadius:'10px 0px 10px 0px'}}><a href="/RequestDemo" target="_blank" class="theme-btn one"  style={{color:'wheat'}}>Request a Demo</a></button></center>
      </div>
      <br/>
      {/* cards-close */}

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

export default OurPlatform