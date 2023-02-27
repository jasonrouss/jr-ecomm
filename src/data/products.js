// cartItems.js
import flower from "./flower.jpg";
import apple from "./apple.jpg";

import necklace from "./necklace.png";
import glass from "./glass.jpg";
import hat from "./hat.jpg";
import headset from "./headset.jpg";
import hoodie from "./hoodie.jpg";
import monitor from "./monitor.jpg";
import mouse from "./mouse.jpg";
import mousepad from "./mousepad.jpg";
import keyboard from "./keyboard.jpg";

import phone from "./phone.png";
import shirt from "./shirt.jpg";
import tyre from "./tyre.jpg"
const products = [
  {
    id: 1,
    name: "Apple",
    description: "Nutritious and delicious apple.",
    price: 0.99,
    quantity: 1,
    img: apple,
    date: "2023-02-15",
    onSale: "no",
  },
  {
    id: 2,
    name: "Keyboard",
    description: "Wireless black work keyboard.",
    price: 39.99,
    quantity: 2,
    img: keyboard,
    date: "2023-02-15",
    onSale: "no",
  },
  {
    id: 3,
    name: "Hat",
    description: "Brown summer beach hat.",
    price: 7.99,
    quantity: 1,
    img: hat,
    date: "2023-02-15",
    onSale: "yes",
  },
  {
    id: 4,
    name: "Sunglasses",
    description: "Stylish black sunglasses.",
    price: 15.99,
    quantity: 1,
    img: glass,
    date: "2023-02-15",
    onSale: "yes",
  },
  {
    id: 5,
    name: "Headset",
    description: "Wired white gaming headset.",
    price: 64.99,
    quantity: 1,
    img: headset,
    date: "2023-02-15",
    onSale: "yes",
  },
  {
    id: 6,
    name: "Hoodie",
    description: "Comfortable blue hoodie.",
    price: 24.99,
    quantity: 1,
    img: hoodie,
    date: "2023-02-15",
    onSale: "no",
  },
  {
    id: 7,
    name: "Monitor",
    description: "Brand new monitor HD LED.",
    price: 127.49,
    quantity: 1,
    img: monitor,
    date: "2023-02-15",
    onSale: "yes",
  },
  {
    id: 8,
    name: "Mouse",
    description: "Wired white work mouse.",
    price: 31.99,
    quantity: 1,
    img: mouse,
    date: "2023-02-15",
    onSale: "no",
  },
  {
    id: 9,
    name: "Mousepad",
    description: "Work long black mousepad.",
    price: 12.99,
    quantity: 1,
    img: mousepad,
    date: "2023-02-15",
    onSale: "yes",
  },
  {
    id: 10,
    name: "Phone",
    description: "Used phone in great condition.",
    price: 99.99,
    quantity: 1,
    img: phone,
    date: "2023-02-15",
    onSale: "yes",
  },
  {
    id: 11,
    name: "Shirt",
    description: "Sport orange shirt short sleeve.",
    price: 9.99,
    quantity: 1,
    img: shirt,
    date: "2023-02-15",
    onSale: "yes",
  },
  {
    id: 12,
    name: "Tire",
    description: "Racing preformance tire.",
    price: 36.99,
    quantity: 1,
    img: tyre,
    date: "2023-02-15",
    onSale: "no",
  },
  {
    id: 13,
    name: "Necklace",
    description: "Affordable fashion gold necklace.",
    price: 15.99,
    quantity: 1,
    img: necklace,
    date: "2023-02-15",
    onSale: "yes",
  },{
    id: 14,
    name: "Flower",
    description: "White flower for your loved ones .",
    price: 4.99,
    quantity: 1,
    img: flower,
    date: "2023-02-15",
    onSale: "yes",
  },
  
];

export default products;
