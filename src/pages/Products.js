import { Uitabsnew } from "../js/components/Uitabsnew";

export default function Products() {
    return (
      <div className="wrapper">
         <div className="products-sections">
            <h2>Our Product Range</h2>
         </div>
         <div className="gap-below"></div>

         <div className="bread-tabs">
            <Uitabsnew />
         </div>
      </div>

     
    );
  }