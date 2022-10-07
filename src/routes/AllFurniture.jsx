import Navbar from "../components/Navbar";
import React from 'react'
import ShopContext from "../context/ShopContext";
import '../styles/Card.css';
import { Toaster } from 'react-hot-toast';



const AllFurniture = () => {
  
  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          
          <Toaster />

          <Navbar
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <div className="collection--cards">
              {context.products.map(product => (
              <div key={product.id} className='card'>
                <div className="card--image">
                  <img src={`${product.imageLink}`} alt={`${product.imageLink}`} />
                </div>
                <div className="card--text">
                  <p>{product.productName}</p>
                  <div className="card--prices">
                    <p className="main--price"><strike>${product.productPrice.toFixed(2)}</strike></p>
                    <p className="discounted--price">${product.discountedPrice.toFixed(2)}</p>
                  </div>
                  <div className="card--rating">
                    <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835" />
                    </svg>
                    <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835" />
                    </svg>
                    <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835" />
                    </svg>
                    <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835" />
                    </svg>
                    <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.2262 9.65555H15.5982L12.6131 0L9.628 9.65555H0L7.77808 15.6142L4.83502 25.2262L12.6131 19.2676L20.3912 25.2262L17.4061 15.5707L25.2262 9.65555Z" fill="#FDD835" />
                    </svg>
                  </div>
                  <button 
                  className='add--to--cart'
                  onClick={context.addProductToCart.bind(this, product)}
                  >Add to Cart</button>
                </div>
              </div>
              ))}                
          </div>
        </React.Fragment>
      )}
</ShopContext.Consumer>
)
}

export default AllFurniture;