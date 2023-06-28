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

    const donutimages = {
      width: '200px',
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
      color:'#261B6C',
      fontSize: '40px'
    }
    return ( 


    <div className="" style={h2styling}>
    <h1>Our Products</h1>
    <div className="gap-below"></div>
    <Tabs position="relative" variant="unstyled" align='center' fontSize={40}>
    <TabList>
      <Tab fontSize={30}>Bread</Tab>
      <Tab fontSize={30}>Meat Pies</Tab>
      <Tab fontSize={30}>Scones</Tab>
      <Tab fontSize={30}>Donuts</Tab>

    </TabList>

    <TabIndicator
      mt="-1.5px"
      height="7px"
      bg="#B2904C"
      borderRadius="2px"
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
            <img style={donutimages}  src={IMAGES.meatpies} alt="" />
            <div className="card-body">
            <p>Yummy Meat Pies</p>
              <div className='preptimes'>
              <h6>Our Family Loaf High Energy Brown loaves are a great source of fibre, high in energy and fortified with vitamins and minerals! They are perfect for sandwiches, toast, breadcrumbs – anything! The Family Loaf has 21 slices.</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card" style={cardInStyling}>
            <img style={donutimages} src={IMAGES.meatpies} alt="" />
            <div className="card-body">
            <p>Yummy Meat Pies</p>
              <div className='preptimes'>
                
                <h6>Our Premium Soft juicy meatpies are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf has 18 slices.</h6>
              </div>

            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card" style={cardInStyling}>
            <img style={donutimages} src={IMAGES.meatpies} alt="" />
            <div className="card-body">
              <p>Yummy Meat Pies</p>
              <div className='preptimes'>
                <h6>Our Family Loaf High Energy Brown loaves are a great source of fibre, high in energy and fortified with vitamins and minerals! They are perfect for sandwiches, toast, breadcrumbs – anything! The Family Loaf has 21 slices.</h6>
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
          <div className="card" style={cardInStyling}>
            <img style={donutimages} src={IMAGES.sconesp} alt="" />
            <div className="card-body">
              <p>Sugar Free Scones</p>
              <div className='preptimes'>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card" style={cardInStyling}>
            <img style={donutimages} src={IMAGES.sconesp} alt="" />
            <div className="card-body">
              <p>Sugar Free Scones</p>
              <div className='preptimes'>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card" style={cardInStyling}>
            <img style={donutimages} src={IMAGES.sconesp} alt="" />
            <div className="card-body">
              <p>Sugar Free Scones</p>
              <div className='preptimes'>
              <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
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
          <div className="card" style={cardInStyling}>
            <img style={donutimages} src={IMAGES.donut1} alt="" />
            <div className="card-body">
              <p>Sprinkled Choc Donuts</p>
              <div className='preptimes'>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card" style={cardInStyling}>
            <img style={donutimages} src={IMAGES.donut2} alt="" />
            <div className="card-body">
              <p>Caramel Choc Donuts</p>
              <div className='preptimes'>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card" style={cardInStyling}>
            <img style={donutimages} src={IMAGES.donut3} alt="" />
            <div className="card-body">
              <p>Chocolate Donuts</p>
              <div className='preptimes'>
              <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
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
