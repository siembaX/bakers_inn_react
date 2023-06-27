import 'bootstrap/dist/css/bootstrap.css';
import IMAGES from '../images/index1'
import Content from '../js/components/Content'
import { useState } from 'react'
import Columns from '../js/components/Columns'
import {  Uitabs } from '../js/components/Uitabs'
import {Modal} from '../js/components/Modal'
import {Modalz} from '../js/components/Modalz'
/* import { NavLink } from 'react-bootstrap'; */
import {NavLink} from 'react-router-dom';






export default function Home() {


/*   const  navLinkStyles = ({ isActive}) => {
    return{
       color: isActive ? 'rgb(12,255,255)' : 'rgb(11,250,255)',
    }
} */

  const buttonStyled = {
      border: 'none',
      borderRadius: '3px',
      color: '#fff',
      backgroundColor: '#B2904C',
      padding: '10px 20px 10px 20px',
      fontsize: '20px',
      cursor: 'pointer'
  }

  const[isOpen, setIsOpen]= useState(false)

  const[weOpen, setWeOpen]= useState(false)

  const[theyOpen, setTheyOpen]= useState(false)

const Button_Wrapper_Styles = {
  position: 'relative',
  zIndex:1
}

const BUTTON_LAYOUT ={
  color:'#fff',
  backgroundColor:'#B2904C',
  border:'none',
  borderRadius:'3px',
  padding: '10px 20px 10px 20px',
  fontSize:'20px',

}
    return (
      <>
       <div className="wrapper">
        <section className="Hero-Section">
            <div className="row">
              <div className="col-lg-6" id='hero-txt'>
                <h1>Bringing you the 
                <br /> best value at the 
                <br />best prices.</h1>
                <p>The freshest sandwiches you can make are
                <br /> with Baker’s inn soft white loaf.</p>
                <a href="#Hero-about"><button>READ MORE</button></a>
              </div>
              <div className="col-lg-6" id='bread-images'>
                  <div className="sliding-images">
                    <img src={ IMAGES.soft_bread_white } alt="bread" />
                    <img src={ IMAGES.low_gi } alt="bread" />
                    <img src={ IMAGES.High_Energy } alt="bread" />
                    <img src={ IMAGES.whole_grain } alt="bread" />
                  </div>
              </div>
            </div>
        </section>
        <div className="gap-below"></div>
        <section className="Hero-About" id='Hero-about'>
            <div className="row" id='Hero-AboutContect'> 
              <div className="col-lg-6">
                  <h2>About Baker’s Inn</h2>
              </div>

              <div className="col-lg-6">
                <p>It all started back in the eighties when Baker's Inn 
                was just a small confectionery company that employed 40 
                people and produced about 30,000 loaves a day. We now aim 
                to provide a nourishing, convenient and accessible answer to 
                hunger’s call.</p>
                
                {/* <button className="">READ MORE</button> */}
                <NavLink style={buttonStyled} to="/about">Read More</NavLink>
              </div>
            </div>

              <div className="all-cards">
            <Content images={ IMAGES.card1} />
            <Content images={ IMAGES.card2} />
            <Content images={ IMAGES.card3}/>
            <Content images={ IMAGES.card4}/>
              </div>

        </section>

        <section className="ProductRange-Section">
          <h2>Our Product Range</h2>
          <div className="product-range">
            <Content images={ IMAGES.card5} title='bread' />
            <Content images={ IMAGES.card6} title='Meat Pies'/>
            <Content images={ IMAGES.card7} title='Scones'/>
            <Content images={ IMAGES.card8} title='Donuts'/>
          </div>
          <a href="./about" className='my-btns'>VIEW PRODUCT RANGE</a>
        </section>

        <section className='Booking-FactoryTour'>
          <div className="row">
            <div className="col-lg-6" id='booking-txtcontent'>
              <Columns h2='Book A Factory Tour'/>
              <Columns p="Keen on seeing how Baker’s inn products are made? 
              Are you interested in a field trip day for your school’s class? 
              Get in touch with us to book a tour of our factory that is closest 
              to you. Fill in the booking form and we will get back to you." />
              
              <div style={Button_Wrapper_Styles}>
                <button onClick={() => setIsOpen(true)} style={BUTTON_LAYOUT}>Book A Factory Tour</button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <form action="">
                <h2>Book A Factory Tour</h2>
                <div>
                  <input type="text" placeholder='Name of Organization' />
                  <input type="text" placeholder='Name of Contact Person' />
                </div>
                  
                <div>
                <input type="text" name="" id="" placeholder='Organization Address'/>
                <input type="text" name="" id="" placeholder='Organization’s Resident Town'/>
                </div> 

                <div>
                <input type="text" name="" id="" placeholder='Contact Person’s Telephone'/>
                <input type="text" name="" id="" placeholder='Contact Person’s E-mail'/>
                </div> 

                <div>
                <input type="text" name="" id="" placeholder='Date of Visit'/>
                <select id="yourTitle" >
                <option value="Your Title">Number of Participants</option>
                    <option value="sir">Sir</option>
                    <option value="dr.">Dr.</option>
                    <option value="Prof">Prof.</option>
                </select>
                </div> 


                <div>
                <select name="" id="interestarea">
                    <option value="">Age Range of Participants</option>
                    <option value="">Value 2</option>
                  </select>
                </div>

                <div className='special-links'>
                  <p>Plant Visit <span>Terms & Conditions</span> </p>
                  <p>Plant Visit <span>Safety Regulations</span> </p>
                </div>
      
                <label>
                  <input type="checkbox" />Your organisation has agreed to the submission of this application and you have authorisation to submit it. The information you have provided on behalf of your organisation is accurate, full and correct.
                </label>
                <div className="gap-below-small"></div>
                <label>
                  <input type="checkbox" />Have Read The Safety Regulations
                </label>


                <button>SUBMIT</button>
            </form>

                </Modal>
              </div>

            </div>

            <div className="col-lg-6">
              <Columns images={ IMAGES.unsliced_loaves } />
            </div>
            
          </div>
        </section>

        <section className='Request-DonationSection'>
          <div className="row">
          <div className="col-lg-6">
              <Columns images={ IMAGES.workers_packing } />
            </div>
            <div className="col-lg-6" id='booking-txtcontent'>
              <Columns h2='Request A Donation'/>
              <Columns p="If you are holding an event that you wish to have us 
              donate to, we’re more than glad to help. Fill in the donation request 
              form for us to best understand how we can increase your event’s impact 
              in the local community" />
{/* MODAL BEGINS */}
              <div style={Button_Wrapper_Styles}>
                <button onClick={() => setWeOpen(true)} style={BUTTON_LAYOUT}>REQUEST DONATION</button>
                <Modalz open={weOpen} onClose={() => setWeOpen(false)}>
                <form action="">
                <h2>Request Product Donations</h2>
                <div>
                  <input type="text" placeholder='Name of Organization' />
                  <input type="text" placeholder='Name of Contact Person' />
                </div>
                  
                <div>
                <input type="text" name="" id="" placeholder='Contact Person Position'/>
                <input type="text" name="" id="" placeholder='Organization Address'/>
                </div> 

                <div>
                <input type="text" name="" id="" placeholder='Contact Person’s Telephone'/>
                <input type="text" name="" id="" placeholder='Contact Person’s E-mail'/>
                </div> 

                <div>
                <input type="text" name="" id="" placeholder='Date of Event'/>
                <select id="yourTitle" >
                <option value="Your Title">Intended Use of Donation</option>
                    <option value="sir">Sir</option>
                    <option value="dr.">Dr.</option>
                    <option value="Prof">Prof.</option>
                </select>
                </div> 

                <div>
                <select id="yourTitle" >
                <option value="Your Title">Number of Attendants</option>
                    <option value="sir">Sir</option>
                </select>

                <select id="yourTitle" >
                <option value="Your Title">What Product Are Specifically Looking For?</option>
                    <option value="sir">Sir</option>
                </select>
                </div> 

                {/* <button>PROCEED TO NEXT STEP</button> */}
{/* NESTED FORM */}
                <div style={Button_Wrapper_Styles}>
                <button onClick={() => setWeOpen(false)} style={BUTTON_LAYOUT}>Proceed to next step</button>
                <Modalz open={theyOpen} onClose={() => setTheyOpen(false)}>

              <form action="">
                <h2>Request Product Donations</h2>
                <div>
                  <input type="text" placeholder='Name of Organization' />
                  <input type="text" placeholder='Name of Contact Person' />
                </div>
                  
                <div>
                <input type="text" name="" id="" placeholder='Contact Person Position'/>
                <input type="text" name="" id="" placeholder='Organization Address'/>
                </div> 

                <div>
                <input type="text" name="" id="" placeholder='Contact Person’s Telephone'/>
                <input type="text" name="" id="" placeholder='Contact Person’s E-mail'/>
                </div> 
            </form>

                </Modalz>
              </div>
{/* NESTED FORM */}
            </form>

                </Modalz>
              </div>
{/* MODAL ENDS HERE */}
            </div>
            
          </div>
        </section>
        
        <section className='Kidz-cornerSection'>
              <div className="row">
                    <div className="col-lg-6">
                        <img src={  IMAGES.mariobros  } alt="mariobros" />
                    </div>

                    <div className="col-lg-6" id='kidz-txt'>
                        <h2>Kids Corner</h2>
                        <p>Let your children join the fun. 
                        Explore a place with exciting games 
                        and the top winners stand a chance to win 
                        exciting monthly prizes!</p>
                        <a href='./' className='mybtn'>PLAY GAMES</a>
                    </div>
              </div>
        </section>
        <div className="gap-below"></div>
        <section>
              <div className="tabs">
                  <Uitabs />

              </div>
        </section>
        
        <section className='newsletter-section'>
          <div className="row">
            <div className="col-lg-6">
                <div className='breadsettxt'>
                    <h2>Get Notified About Promotions We Offer</h2>
                    <div>
                  <form>
                      <input type="text" placeholder='your email'/>
                      <button type='submit'>SUBMIT</button>
                  </form>
                    </div>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="breadset">
                  <img src={IMAGES.whole_grain} alt="" />
                  <img src={IMAGES.soft_bread_white} alt="" className='middlebread'/>
                  <img src={IMAGES.High_Energy} alt="" />
                </div>
            </div>
          </div>
        </section>
        <div className="gap-below"></div>
      </div>

        <section className='footer'>
        
        </section>
      </>
 
    );
  }