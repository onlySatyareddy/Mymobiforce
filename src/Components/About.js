import React from 'react'
import './About.css';
import {
   MDBFooter,
   MDBContainer,
   MDBCol,
   MDBRow
 } from 'mdb-react-ui-kit';

const About = () => {
   return (
      <>
         <div class="page_header_default style_one ">
            <div class="parallax_cover">
               <img src="https://www.mymobiforce.com/images/page-header-default.jpg" alt="bg_image" class="cover-parallax" />
            </div>
            <div class="page_header_content">
               <div class="auto-container">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="banner_title_inner">

                           <div class="title_page">
                              <br></br>
                              <strong>About Us</strong>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-12">
                        <div class="breadcrumbs creote">
                           <ul class="breadcrumb m-auto">
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* image close */}
         <br></br>
         {/* text-start */}
         <div className='texte'>
            <h1>Our Story</h1>
            <p>To meet our worlds field services demand, companies need to connect with Field service professionals in a reliable, agile way. We have been making it possible since 2018 using our tech stack driven fulfilment model for simple to complex operations delivered in a gig model.</p>
         </div>
         {/* text-close */}

         {/* card-start */}
         <div class="full_width_box" >
         
            <section class="team-section" >
               <h1> <br/>
                  <center>Meet Our Leaders</center>
                  <br/>
                  </h1>
             
               {/* <!-- Team Members Rows --> */}
               <div class="row" >
                  {/* <!-- Team Member 1 --> */}
                  <br></br>
                  <br></br>
                  <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  
                     <div class="team_box style_three">
                        <div class="team_box_outer">
                           <div class="image_box ">
                              <img src="https://www.mymobiforce.com/images/team/dheeraj.jpg" alt="Dheeraj Khatter" />
                           </div>
                           <div class="content_box ">
                              <h3>Dheeraj Khatter</h3>
                              <h6 class="job_details" style={{color:'red'}}>Co Founder, CEO</h6>
                              <p>Before helming MyMobiForce, Dheeraj worked with multinationals 
                                 like HCL, AT&T, T-MO, NEC, etc. There he built his expertise in Sales, 
                                 Accounts, Management, thereafter embarking on his serial entrepreneurship journey. 
                                 He loves strumming his guitar or taking long strolls at beaches when he 
                                 is not brainstorming on professional fronts.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <!-- Team Member 2 --> */}
                  <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                     <div class="team_box style_three">
                        <div class="team_box_outer">
                           <div class="image_box">
                              <img src="https://www.mymobiforce.com/images/team/himanshu.jpg" alt="Member Name" />
                           </div>
                           <div class="content_box">
                              <h3>Himanshu Kumar</h3>
                              <h6 class="job_details" style={{color:'red'}}>Co Founder, Chief of Operations</h6>
                              <p>Having corporate Expertise of 21 years in Technology &amp; Operations, 
                                 Mr. Himanshu has worked for several MNCs around the globe with multiple 
                                 technological patents under his name. </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <!-- Team Member 3--> */}
                  <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                     <div class="team_box style_three">
                        <div class="team_box_outer">
                           <div class="image_box">
                              <img src="https://www.mymobiforce.com/images/team/kshitiz-saini.jpg" alt="Member Name" />
                           </div>
                           <div class="content_box">
                              <h3>Kshitiz Saini</h3>
                              <h6 class="job_details" style={{color:'red'}}>Co Founder, Chief of Products</h6>
                              <p>Having worked with conglomerates like AT&amp;T, 
                                 T-Mobile, Qualcomm, NEC, etc., for over 20 years,&nbsp;
                                 Kshitiz's interests and skills lie&nbsp;in building and 
                                 driving high performance teams and digital transformational 
                                 projects. A serial entrepreneur and key AI enthusiast, he&nbsp;
                                 loves playing cricket, listening to music and travelling in his free time. </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* <!-- Team Member 4 --> */}
                  <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                     <div class="team_box style_three">
                        <div class="team_box_outer">
                           <div class="image_box">
                              <img src="https://www.mymobiforce.com/images/team/an.jpg" alt="Member Name" />
                           </div>
                           <div class="content_box">
                              <h3>Arun Nagar</h3>
                              <h6 class="job_details" style={{color:'red'}}>Head - International Business and Global Partnerships</h6>
                              <p>When it comes to laying out telecom and networking strategies, nothing comes close to Arun’s 
                                 foresight and experience - all thanks to those 21 years spent working with industry giants 
                                 and pioneers. A radiating personality and pleasure to talk to, his day starts with sharing 
                                 MyMobiForce’s mission and vision with prospects and ends with turning them into long-term clients. </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* <!-- Team Member 5 --> */}
                  <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                     <div class="team_box style_three">
                        <div class="team_box_outer">
                           <div class="image_box">
                              <img src="https://www.mymobiforce.com/images/team/sc.jpg" alt="Member Name" />
                           </div>
                           <div class="content_box">
                              <h3>Sandip Chaturvedi </h3>
                              <h6 class="job_details" style={{color:'red'}}>Business Head Telecom</h6>
                              <p>One of the oldest pillar of strength at MyMobiForce, Mr. Sandip has 
                                 been MyMobiForce since its foundation was laid. His 13-year long experience of telecom industry 
                                 and overall expertise at field and business operations makes him our "Mr. Troubleshooter" when things don't go as planned.</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* <!-- Team Member 6 --> */}
                  <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                     <div class="team_box style_three">
                        <div class="team_box_outer">
                           <div class="image_box">
                              <img src="https://www.mymobiforce.com/images/team/sudeepkumar.jpg" alt="Member Name" />
                           </div>
                           <div class="content_box">
                              <h3>Sudeep Kumar </h3>
                              <h6 class="job_details" style={{color:'red'}}>Business Head White Goods and SMB</h6>
                              <p>The heart and soul of the sales team, Sudeep is the head of the white good vertical at MyMobiForce. His typical day starts 
                                 and ends with pitching partnership benefits to clients - the non-typical ones are spent bonding with his team members 
                                 over a cup of tea.</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* <!-- Team Member 7 --> */}
                  <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                     <div class="team_box style_three">
                        <div class="team_box_outer">
                           <div class="image_box">
                              <img src="https://www.mymobiforce.com/images/team/jitendrer.jpg" alt="Member Name" />
                           </div>
                           <div class="content_box">
                              <h3>Jitendra Gangwar </h3>
                              <h6 class="job_details" style={{color:'red'}}>Chief Technical Officer</h6>
                              <p>Jitendra is the driving force behind MyMobiForce’s product development. With his knack 
                                 for attention to detail, his day starts with taking daily scrums and doesn't 
                                 end unless his team has perfected a feature discussed before to the platform or 
                                 has got rid of the bugs discussed yesterday.</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* <!-- Team Member 2 --> */}
                  <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                     <div class="team_box style_three">
                        <div class="team_box_outer">
                           <div class="image_box">
                              <img src="https://www.mymobiforce.com/images/team/ac.jpg" alt="Member Name" />
                           </div>
                           <div class="content_box">
                              <h3>Avneesh Chaudhary</h3>
                              <h6 class="job_details" style={{color:'red'}}>Head of Onboarding & BGV Business</h6>
                              <p>With 14 years of experience in operations &amp; onboarding, Avneesh manages one of the toughest jobs in-house - 
                                 onboarding freelancers and vendors from across the nation. From making the first call to running background 
                                 checks on their expertise, it’s his job to ensure that only the best of the best make the cut and join our field workforce.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!-- Additional rows as needed --> */}
            </section>
         </div>
         {/* card-close */}
               
                 {/* cards-5 */}
      <div class="container">
        <div class="title_sections">
           <h2><br/><center> MMF Is backed by strong investors </center></h2>
          <br></br>
        </div>
        <div class="card-deck">
          <div class="card">
            <br></br>
            <img src='https://www.mymobiforce.com/images/bharat.png'/>
            <br></br>
            <div class="card-body">
              <h5 class="card-title"><strong> Bharat Fund</strong></h5>
              <br/>
                 <p>Bharat Fund is an early stage venture capital fund investing in 
                  deeptech startups that serve global markets and digital startups 
                  bringing education, skills, work opportunities, healthcare and 
                  financial products to lower income groups in India.</p>
            </div>
          </div>
          <div class="card">
          <br></br>
           <img src='https://www.mymobiforce.com/images/bluehill.png' height={'225px'}/>
           <br></br>
            <div class="card-body">
              <h5 class="card-title">BlueHill Capital</h5>
              <br/>
             <p>Blue Hill Capital invests in smart founders who are willing to work hard. Outside of the capital, 
               they are very active investors and are available to help the founders to various fronts.</p>
            </div>
          </div>
          <div class="card">
           <img src='https://www.mymobiforce.com/images/shankar.png'/>
           <br></br>
            <div class="card-body">
              <h5 class="card-title">V Shankar</h5>
              <br/>
            <p>Mr. V. Shankar is the Director of Acsys Investments Pvt. Ltd., 
               a Public and Angel Investing company. He mentors startups and mature organisations.</p>
            </div>
          </div>
        </div>
        <br/>
        
      </div>
      <br/>
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
      </>
   )
}

export default About;