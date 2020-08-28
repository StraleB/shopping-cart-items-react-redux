import React from 'react';
import {connect} from 'react-redux';
import {addCart } from '../redux/itemActions';
import watch1 from '../images/watch1.png';
import watch2 from '../images/watch2.png';
import watch3 from '../images/watch3.png';
import watch4 from '../images/watch4.png';

function HomeComponent(props) {
    return (
        <div className="itemContainer">
           <section className="article1">
               <img className="img1" src={watch1}  alt="article-item"/>
               <h5>SMAEL Mens Watch Military Waterproof Sport Wrist Watch Digital </h5>
               <span onClick={props.addCart} className="add-to-cart cart1">Add To Cart</span>
               <h3>$9.03</h3>
           </section>

           <section className="article2">
               <img src={watch2}  alt="article-item"/>
               <span onClick={props.addCart} className="add-to-cart cart2">Add To Cart</span>
               <h5>CURREN Top Luxury Brand Fashion Quartz Men Watch</h5>
               <h3 style={{marginTop:'0.9em'}}>$17.00</h3>
           </section>

           <section className="article3">
               <img src={watch3}  alt="article-item"/>
               <span onClick={props.addCart} className="add-to-cart cart3">Add To Cart</span>
               <h5>SMAEL Brand Men Sports Watches Dual Display Analog Digital LED  </h5>
               <h3>$9.45</h3>
           </section>

           <section className="article4">
               <img src={watch4}  alt="article-item"/>
               <span onClick={props.addCart} className="add-to-cart cart4">Add To Cart</span>
               <h5>SMAEL Mens Watch Military Waterproof Sport Wrist Watch Digital </h5>
               <h3>$11.26</h3>
           </section>
        </div>
    )
}







export default connect(null,{addCart})(HomeComponent)
