import { Tabs,TabIndicator, TabList,Tab, TabPanel,TabPanels} from '@chakra-ui/react';
import Columns from './Columns';
import IMAGES from '../../images/index1'




export const Uitabs = (props) => {
    return ( 


    <div className="">
    <Tabs position="relative" variant="unstyled" align='center' fontSize={40}>
    <TabList>
      <Tab>For Kids</Tab>
      <Tab>For Vegans</Tab>
      <Tab>For Family</Tab>

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
          <div className="card">
            <img src={IMAGES.creepysandwhich} alt="" />
            <div className="card-body">
              <Columns h2='Shwarma Sandwich' />
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
            <img src={IMAGES.creepysandwhich} alt="" />
            <div className="card-body">
              <Columns h2='Shwarma Sandwich' />
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
            <img src={IMAGES.creepysandwhich} alt="" />
            <div className="card-body">
              <Columns h2='Shwarma Sandwich' />
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

      {/* CARDS #2 */}

      <TabPanel>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <img src={IMAGES.creepybread} alt="" />
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
            <img src={IMAGES.creepybread} alt="" />
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
            <img src={IMAGES.creepybread} alt="" />
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
