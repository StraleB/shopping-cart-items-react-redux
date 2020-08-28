import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import {getItems} from '../redux/getAction'

function NavbarComponent(props) {
    useEffect(() => {
       getItems()
    }, [])
    return (
        <div>
            <header>
                
             <nav>
             <h2>Shopster</h2>
                 <ul>
                     <li><a href="/">Store</a></li>
    <li className="cart"><a href="/"> <ion-icon name="cart-outline"></ion-icon> Cart {props.numOfItems}</a></li>
                 </ul>
            </nav>
            </header>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        numOfItems :state.numOfItems,
    }
}

export default connect(mapStateToProps,{getItems}) (NavbarComponent)
