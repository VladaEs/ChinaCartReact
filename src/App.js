import logo from './logo.svg';
import './App.css';
import { ReactDOM, React, useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import MainImage from './Components/mainImage/MainImage';
import CardMiddle from './Components/CardOnMiddle/CardMiddle';
import CardMenu from './Components/Menu/CardMenu';
import BusketAmount from './Components/Header/busket-contet';
import Cart from './Components/Cart/Cart';
function App() {
  const [CountItems, SetCountItems]=useState(0);
  const [isvisibleCart, SetIsvisibleCart]= useState(false);
  const [OrderedItemsArray,SetOrderedItemsArray ]=useState([]);

  return (
    <BusketAmount.Provider value={{
      AmountItems:CountItems,
      AmountItemsChange:SetCountItems,
      MenuItems: [
        {name:'California', description: 'Nori Cream cheese rice for sushi avocado pulp Wasabi roasted sesame Crab meat / fish / seafood of your choice', price: 11.99},
        {name:'Philadelphia', description: 'Nori rice for sushi Wasabi Pink pickled ginger Cream cheese Salmon avocado pulp', price: 9.99},
        {name:'The Dragon', description:'Nori rice for sushi  Cream cheese Acne Crab Eel Sauce Fresh cucumber / avocado pulp of your choice' , price: 15.99},
        {name:'Canada', description:'Nori rice for sushi Wasabi Pink pickled ginger Cream cheese Unagi sauce roasted sesame' , price: 7.99},
        {name:'Alaska', description:'Nori rice for sushi Wasabi  Crab meat Salmon roasted sesame Fresh cucumber' , price: 9.99},
    ],
    isvisibleBusket:isvisibleCart,
    SetVisibleBusket: SetIsvisibleCart,
    OrderedItems:OrderedItemsArray,
    AddOrderedItems:SetOrderedItemsArray,

    }}>
      <Header></Header>
      <MainImage/>
      <CardMiddle></CardMiddle>
      <CardMenu></CardMenu>
      <Cart IsOpen={isvisibleCart}></Cart>
    </BusketAmount.Provider>
  );
}

export default App;
