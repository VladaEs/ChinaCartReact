import React, {useState} from "react";

const BusketAmount = React.createContext({
    AmountItems:0,
    AmountItemsChange: ()=>{},
    AmountItemsGood:0,
    AmountItemsGoodChange:()=>{},
    MenuItems: [
        {name:'California', description: 'Nori Cream cheese rice for sushi avocado pulp Wasabi roasted sesame Crab meat / fish / seafood of your choice', price: 11.99},
        {name:'Philadelphia', description: 'Nori rice for sushi Wasabi Pink pickled ginger Cream cheese Salmon avocado pulp', price: 9.99},
        {name:'The Dragon', description:'Nori rice for sushi  Cream cheese Acne Crab Eel Sauce Fresh cucumber / avocado pulp of your choice' , price: 15.99},
        {name:'Canada', description:'Nori rice for sushi Wasabi Pink pickled ginger Cream cheese Unagi sauce roasted sesame' , price: 7.99},
        {name:'Alaska', description:'Nori rice for sushi Wasabi  Crab meat Salmon roasted sesame Fresh cucumber' , price: 9.99},
    ],

    isvisibleBusket:false,
    SetVisibleBusket: ()=>{},

    
})

export default BusketAmount;



