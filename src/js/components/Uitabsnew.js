import { Tabs,TabIndicator, TabList,Tab, TabPanel,TabPanels, position} from '@chakra-ui/react';
import Columns from './Columns';
import IMAGES from '../../images/index1'




export const Uitabsnew = (props) => {

    const breadStyling = {
      width: '160px',
      position: 'relative',
      top: '-20px',
      textAlign: 'center',
      
    }

    const cardInStyling = {
      border:'none',
      backgroundColor: '#deb887',
      alignItems: 'center',
      textAlign: 'center',

    }

    const h2styling = {
      alignItems: 'center',
      textAlign: 'center',
    }
    return ( 


    <div className="" style={h2styling}>
    <h2>Our Products</h2>
    <Tabs position="relative" variant="unstyled" align='center' fontSize={40}>
    <TabList>
      <Tab>Bread</Tab>
      <Tab>Meat Pies</Tab>
      <Tab>Scones</Tab>
      <Tab>Scones</Tab>

    </TabList>

    <TabIndicator
      mt="-1.5px"
      height="5px"
      bg="blue.500"
      borderRadius="1px"
      align='center'
    />

    <TabPanels>
      <TabPanel>  
      <div className="row" id='alltabcards'>
        <div className="col-lg-4">
          <div className="card" style={cardInStyling}>
            <img style={breadStyling} src={IMAGES.soft_bread_white} alt="" />
            <div className="card-body" style={cardInStyling}>
              <p>Soft White Loaf</p>
              
              <div className='preptimes'>
              <h6>Our Family Loaf High Energy Brown loaves are a great source of fibre, high in energy and fortified with vitamins and minerals! They are perfect for sandwiches, toast, breadcrumbs – anything! The Family Loaf has 21 slices.</h6>
              </div>

            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card" style={cardInStyling}>
            <img style={breadStyling} src={IMAGES.low_gi} alt="" />
            <div className="card-body">
              <p>Low-Gi Seed</p>
              <div className='preptimes'>
              <h6>Our Premium Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf has 18 slices.</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card" style={cardInStyling}>
            <img style={breadStyling} src={IMAGES.High_Energy} alt="" />
            <div className="card-body">
              <p>High Energy Loaf</p>
              <div className='preptimes'>
              <h6>Our Family Loaf High Energy Brown loaves are a great source of fibre, high in energy and fortified with vitamins and minerals! They are perfect for sandwiches, toast, breadcrumbs – anything! The Family Loaf has 21 slices.</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="gap-below"></div>

      </div>
      </TabPanel>

      {/* CARDS #2 */}

      <TabPanel>
      <div className="row">
        <div className="col-lg-4">
          <div className="card" style={cardInStyling}>
            <img style={breadStyling} src={IMAGES.card2} alt="" />
            <div className="card-body">
              <Columns h2='Sweet Shortbread' />
              <div className='preptimes'>
                <h5>Prep Time: </h5>
                <h5><span>20 min</span></h5>
              </div>

              <div className='preptimes'>
                <h5>Serves: </h5>
                <h5><span>6 people</span></h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <img src={IMAGES.card2} alt="" />
            <div className="card-body">
              <Columns h2='Sweet Shortbread' />
              <div className='preptimes'>
                <h5>Prep Time: </h5>
                <h5><span>20 min</span></h5>
              </div>

              <div className='preptimes'>
                <h5>Serves: </h5>
                <h5><span>6 people</span></h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <img src={IMAGES.card2} alt="" />
            <div className="card-body">
              <Columns h2='Sweet Shortbread' />
              <div className='preptimes'>
                <h5>Prep Time: </h5>
                <h5><span>20 min</span></h5>
              </div>

              <div className='preptimes'>
                <h5>Serves: </h5>
                <h5><span>6 people</span></h5>
              </div>
            </div>
          </div>
        </div>

        <div className="gap-below"></div>
        
      </div>
      </TabPanel>

      <TabPanel>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <img src={IMAGES.salmonstrips} alt="" />
            <div className="card-body">
              <Columns h2='Salmon Strips' />
              <div className='preptimes'>
                <h5>Prep Time: </h5>
                <h5><span>20 min</span></h5>
              </div>

              <div className='preptimes'>
                <h5>Serves: </h5>
                <h5><span>6 people</span></h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <img src={IMAGES.salmonstrips} alt="" />
            <div className="card-body">
              <Columns h2='Salmon Strips' />
              <div className='preptimes'>
                <h5>Prep Time: </h5>
                <h5><span>20 min</span></h5>
              </div>

              <div className='preptimes'>
                <h5>Serves: </h5>
                <h5><span>6 people</span></h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <img src={IMAGES.salmonstrips} alt="" />
            <div className="card-body">
              <Columns h2='Salmon Strips' />
              <div className='preptimes'>
                <h5>Prep Time: </h5>
                <h5><span>20 min</span></h5>
              </div>

              <div className='preptimes'>
                <h5>Serves: </h5>
                <h5><span>6 people</span></h5>
              </div>
            </div>
          </div>
        </div>

        <div className="gap-below"></div>
        
      </div>
      </TabPanel>

    </TabPanels>
  </Tabs>
        </div>
     );
}
