import IMAGES from "../../images/index1"

export const  Footer = () => {
    return ( 
    <div className="footer">
        <div className="top-row">
            <div>
                <hr />
                <img src={IMAGES.footerlogo} alt="footerlogo" />
                <hr />
            </div>

        <div className="row">
            <div className="col-lg-4">            
                <div className="row-items">
                <h3>Instagram Feed</h3>
                    <div className="stackedImages">
                        <img src={IMAGES.feed1} alt="feed1" />
                        <img src={IMAGES.feed2} alt="feed2" />
                        <img src={IMAGES.feed3} alt="feed3" />
                    </div>
                    <div className="icons"> 
                        <img src={IMAGES.twitter} alt="twitter" />
                        <img src={IMAGES.fb} alt="facebook" />
                        <img src={IMAGES.linkedin} alt="linkedin" />
                    </div>
                </div>
            </div>

            <div className="col-lg-2">
                <div className="stackedtxt">
                    <h3>Our Location</h3>
                    <p>1 Shepperton Road, Graniteside,Harare,
                    Zimbabwe.</p>
                </div>
            </div>

            <div className="col-lg-3">
                <div className="stackedtxt">
                    <h3>Our Location</h3>
                    <div>
                    <img src={IMAGES.call} alt="" />
                    <p> 08080151 </p>
                    </div>
                    
                    <div>
                    <img src={IMAGES.call} alt="" />
                    <p> 08080152 </p>
                    </div>

                    <div>
                    <img src={IMAGES.call} alt="" />
                    <p> +263 242 751 481 </p>
                    </div>

                    <div>
                    <img src={IMAGES.mail} alt="" />
                    <p> marketing@bakersinnzim.com </p>
                    </div>
                    
                </div>
            </div>

            <div className="col-lg-3">
                <div className="stackedtxt">
                <h3>Sitemap</h3>
                    <a href="/">Home</a>
                    <a href="/About">About Us</a>
                    <a href="/Products">Products</a>
                    <a href="/Receipes">Recipes</a>
                    <a href="/Kids">Kids Corner</a>
                    
                </div>
            </div>

        </div>
        <hr />
        <div className="bottom-items">
            <div>
                <h4>Subsidiary of</h4>
                <img src={IMAGES.inscor} alt="inscor" />
            </div>

            <div>Copyright © 2022 Bakers Inn. All rights reserved. Site by NoWalls Pan Africa</div>
        </div>
        </div>
    </div>
     )
}