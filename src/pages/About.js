import 'bootstrap/dist/css/bootstrap.css';
import IMAGES from '../images/index1';
import Columns from '../js/components/Columns';


export default function About() {
  return (
    <>
    <div className="wrapper">
          <div className="about-section">
              <h2>About Us</h2>
              
         </div>
         <div className='gap-below'></div>
         <div className="mission-section">
            <div className='flexed-items'>
            <img src={IMAGES.flag_logo} alt="FLAG" />
                <div>
                  <Columns h2='Our Mission' />
                  <Columns p='To sharpen our edge in the manufacture and 
                  marketing of quality baked products.' />
                </div>
                <img src={IMAGES.eyes_logo} alt="FLAG" />
                <div>
                
                  <Columns h2='Our Vision' />
                  <Columns p='To provide a nourishing, convenient and accessible 
                  answer to hunger’s call.' />
                </div>
            </div>
         </div>
         <div className='gap-below'></div>
         <div className='gap-below'></div>

         <div className="core-values">
          <h2>Our Core Values</h2>

          <div className="row" id='card-pos'>

              <div className="col-lg-4">
                <div className="card">
                <Columns images={ IMAGES.hands } />
                <div className="card-header">
                  <Columns h2='Teamwork' />
                  <Columns p='We set inspiring goals that we pursue with passion, 
                  unity and focus. We support each other, build on our strengths 
                  and ensure that every player in our team contributes fully. We 
                  play to win and realise that synergy, communication and 
                  alignment bind us together.' />
                </div>
              </div>

              </div>

              <div className="col-lg-4">
                <div className="card">
                <Columns images={ IMAGES.handshake } />
                <div className="card-header">
                  <Columns h2='Respect' />
                  <Columns p='We build self-esteem by treating each other fairly, 
                  communicating directly and respectfully. We have empathy, 
                  discipline and build on our diversity as a source of strength,
                   creativity and innovation.' />
                </div>
              </div>

              </div>

              <div className="col-lg-4">
                <div className="card">
                <Columns images={ IMAGES.handstogether } />
                <div className="card-header">
                  <Columns h2='Integrity' />
                  <Columns p='We uphold the highest professional and ethical standards. 
                  We guard the reputation of our brands. Our promises are 
                  bankable.' />
                </div>
              </div>

              </div>

              <div className="col-lg-4">
                <div className="card">
                <Columns images={ IMAGES.bakersoutlet } />
                <div className="card-header">
                  <Columns h2='Commitment' />
                  <Columns p='We are accountable to our stakeholders and commit 
                  to deliver what we promise. We translate plans into actions; 
                  strategies into achievements and tangible returns.' />
                </div>
              </div>

              </div>
              <div className="col-lg-4">
                <div className="card">
                <Columns images={ IMAGES.donutscoffe } />
                <div className="card-header">
                  <Columns h2='Excellence' />
                  <Columns p='We strive to be the best in our business. 
                  We improve all the time, in all aspects and passionately 
                  deliver at the highest level. We offer superior value and 
                  present our offering with pride.' />
                </div>
              </div>
              </div>

              <div className="gap-below"></div>
              <div className="gap-below"></div>
              <div className="gap-below"></div>

                <div className="ceo-remarks">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={IMAGES.ceo} alt="CEO" />
                    </div>

                    <div className="col-lg-6" id='ceo-texts'>
                      <h2>PROMISE OF QUALITY</h2>
                      <Columns p='Thank you for visiting our website. At Baker’s Inn, 
                      we are committed to delivering quality premium bread to 
                      our customers. We work with a team of over 1500 employees 
                      nationwide. Our aim is to uphold the highest ethical 
                      standards and perpetuate excellence in the delivery of our 
                      products. For us at Baker’s Inn, we aim to improve the 
                      accessibility of our bread. We are accountable to our 
                      stakeholders to deliver what we promise.' />

                      <Columns p='We translate plans into actions; dreams into reality; 
                      strategies into achievements and tangible returns. We strive 
                      to be the best in our business and in our partnerships. We are 
                      committed to every retail outlet, tuckshop, vendor and consumer in 
                      Zimbabwe who stock or consume our nourishing bread throughout Zimbabwe. 
                      We have built our top-quality brand and continue to grow as a company because 
                      of you. Thank you for your continued support of our brand.' />

                      <Columns p='We set inspiring goals that we pursue with passion, unity and focus. 
                      We support each other, build on our strengths and ensure that every player 
                      in our team contributes fully. We play to win and realise that synergy, 
                      communication and alignment bind us together.' />
                      
                      <div className="gap-below"></div>
                      <div>
                        <h2>C.E.O: </h2>
                        <p className='signatures'> Ngoni Mazango</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gap-below"></div>
          </div>
         </div>


    </div>

    </>
  );
}
