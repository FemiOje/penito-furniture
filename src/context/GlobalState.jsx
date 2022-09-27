import React, { useReducer } from "react";
// import { useState } from "react";
import CouchSofa from  '../images/couch-sofa.png'
import FootRestCouch from '../images/foot-rest-couch.png'
import GardenTable from '../images/garden-table.png'
import HomeWoodenLegChair from '../images/home-wooden-leg-chair.png'
import HomeWoodenLegTable from '../images/home-wooden-leg-table.png'
import LoungeChair from '../images/lounge-chair.png'
import PlasticChair from '../images/plastic-chair.png'
import RoomTableLamp from '../images/room-table-lamp.png'
import SofaWoodenLegChair from '../images/sofa-wooden-leg-chair.png'
import WoodenRoomLight from '../images/wooden-room-light.png'
import ShopContext from "./ShopContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./Reducers";

function GlobalState(props) {

  const products = [
    {
        id: 1,
        productName: "Home Wooden Leg Chair",
        productPrice: 250.00,
        discountedPrice: 210.00,
        categories: ["living room"],
        imageLink: HomeWoodenLegChair
    },
    {
        id: 2,
        productName: "Home Wooden Leg Table",
        productPrice: 250.00,
        discountedPrice: 210.00,
        categories: ["office", "bedroom"],
        imageLink: HomeWoodenLegTable
    },
    {
        id: 3,
        productName: "Couch Sofa",
        productPrice: 250.00,
        discountedPrice: 210.00,
        categories: ["sofas", "living room"],
        imageLink: CouchSofa
    },
    {
        id: 4,
        productName: "Foot Rest Couch",
        productPrice: 250.00,
        discountedPrice: 210.00,
        categories: ["sofas", "living room"],
        imageLink: FootRestCouch
    },
    {
        id: 5,
        productName: "Garden Table",
        productPrice: 250.00,
        discountedPrice: 210.00,
        categories: ["outdoor", "others"],
        imageLink: GardenTable
    },
    {
        id: 6,
        productName: "Lounge Chair",
        productPrice: 250.00,
        discountedPrice: 210.00,
        categories: ["living room", "sofas", "others"],
        imageLink: LoungeChair
    },
    {
        id: 7,
        productName: "Plastic Chair",
        productPrice: 250.00,
        discountedPrice: 210.00,
        categories: ["outdoors", "kitchen", "office"],
        imageLink: PlasticChair
    },
    {
        id: 8,
        productName: "Room Table Lamp",
        productPrice: 250.00,
        discountedPrice: 210.00,
        categories: ["bedroom"],
        imageLink: RoomTableLamp
    },
    {
        id: 9,
        productName: "Sofa Wooden Leg Chair",
        productPrice: 250.00,
        discountedPrice: 210.00,
        categories: ["office", "bedroom", "sofas", "living room"],
        imageLink: SofaWoodenLegChair
    },
    {
        id: 10,
        productName: "Wooden Room Light",
        productPrice: 250.00,
        discountedPrice: 210.00,
        categories: ["bedroom", "others"],
        imageLink: WoodenRoomLight
    }
]

  // const [cart, setCart] = useState([]);

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;