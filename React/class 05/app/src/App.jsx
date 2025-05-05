import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Button from 'react-bootstrap/Button';
import ChildCmp from "./components/ChildCmp";
import "./App.css"

const App = () => {
  // var username = "JAFFAR AMAN"

  // const add = (num1, num2 , event) => {
  //   console.log("addition" , num1, num2 , event.target)
  // }

  // const foo = (event) => {
  //   console.log("event", event)
  // }

  // API DATA

  const FbLink = "https://www.facebook.com"


  const userName = "Sufiyan bhai"
  const email = "sufiyan@gmail.com"


  // const getChildValue = (childData) => {
  //   console.log("getChildVal", childData)
  // }

  const arr = [1, 2, 3, 4, 5]


  return (
    <>
      {/* <ul> */}
      {/* {
          arr.map((value, index) => {
            return (
              <li style={{ background: "red", color: "white" }} >  {value} </li>
            )
          })
        } */}

      {/* [] */}
      {/* {arr.map((value) => {
          return (
            <li> {value} </li>
          )
        })}


      </ul> */}
      {/* {
        [<h1>HELLO</h1>, <h1>WORLD</h1>, <h1>HELLO SMIT</h1>]
      } */}




      {/* <ChildCmp
        userName={userName}
        age={34}
        email={email}
        getChildValue={getChildValue}
      /> */}
      {/* <h1>CHILD: {childData}</h1> */}


      {
        products.map((product, index) => {
          return (
            <div key={product.id} className="product-card">
              <img src={product.images[0]} alt="Classic Black Hooded Sweatshirt" />
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-price">${product.price}</p>
                <p className="product-description">
                  {product.description}
                </p>
              </div>
            </div>
          )
        })
      }



    </>
  )
}


const products = [
  {
    "id": 5,
    "title": "Classic Black Hooded Sweatshirt",
    "slug": "classic-black-hooded-sweatshirt",
    "price": 79,
    "description": "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://i.imgur.com/cSytoSD.jpeg",
      "https://i.imgur.com/WwKucXb.jpeg",
      "https://i.imgur.com/cE2Dxh9.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 6,
    "title": "Classic Comfort Fit Joggers",
    "slug": "classic-comfort-fit-joggers",
    "price": 25000,
    "description": "Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://i.imgur.com/QkIa5tT.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T17:20:29.000Z"
  },
  {
    "id": 7,
    "title": "Classic Comfort Drawstring Joggers",
    "slug": "classic-comfort-drawstring-joggers",
    "price": 1254,
    "description": "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T17:22:29.000Z"
  },
  {
    "id": 8,
    "title": "Classic Red Jogger Sweatpants",
    "slug": "classic-red-jogger-sweatpants",
    "price": 98,
    "description": "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://i.imgur.com/9LFjwpI.jpeg",
      "https://i.imgur.com/vzrTgUR.jpeg",
      "https://i.imgur.com/p5NdI6n.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 9,
    "title": "Classic Navy Blue Baseball Cap",
    "slug": "classic-navy-blue-baseball-cap",
    "price": 61,
    "description": "Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://i.imgur.com/R3iobJA.jpeg",
      "https://i.imgur.com/Wv2KTsf.jpeg",
      "https://i.imgur.com/76HAxcA.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 10,
    "title": "Classic Blue Baseball Cap",
    "slug": "classic-blue-baseball-cap",
    "price": 86,
    "description": "Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear.",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://i.imgur.com/wXuQ7bm.jpeg",
      "https://i.imgur.com/BZrIEmb.jpeg",
      "https://i.imgur.com/KcT6BE0.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 11,
    "title": "Classic Red Baseball Cap",
    "slug": "classic-red-baseball-cap",
    "price": 35,
    "description": "Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://i.imgur.com/cBuLvBi.jpeg",
      "https://i.imgur.com/N1GkCIR.jpeg",
      "https://i.imgur.com/kKc9A5p.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 12,
    "title": "Classic Black Baseball Cap",
    "slug": "classic-black-baseball-cap",
    "price": 58,
    "description": "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://i.imgur.com/KeqG6r4.jpeg",
      "https://i.imgur.com/xGQOw3p.jpeg",
      "https://i.imgur.com/oO5OUjb.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 13,
    "title": "Classic Olive Chino Shorts",
    "slug": "classic-olive-chino-shorts",
    "price": 84,
    "description": "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://i.imgur.com/UsFIvYs.jpeg",
      "https://i.imgur.com/YIq57b6.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 14,
    "title": "Classic High-Waisted Athletic Shorts",
    "slug": "classic-high-waisted-athletic-shorts",
    "price": 43,
    "description": "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://i.imgur.com/eGOUveI.jpeg",
      "https://i.imgur.com/UcsGO7E.jpeg",
      "https://i.imgur.com/NLn4e7S.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 15,
    "title": "Classic White Crew Neck T-Shirt",
    "slug": "classic-white-crew-neck-t-shirt",
    "price": 39,
    "description": "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://i.imgur.com/axsyGpD.jpeg",
      "https://i.imgur.com/T8oq9X2.jpeg",
      "https://i.imgur.com/J6MinJn.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 16,
    "title": "Classic White Tee - Timeless Style and Comfort",
    "slug": "classic-white-tee-timeless-style-and-comfort",
    "price": 73,
    "description": "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://i.imgur.com/Y54Bt8J.jpeg",
      "https://i.imgur.com/SZPDSgy.jpeg",
      "https://i.imgur.com/sJv4Xx0.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 17,
    "title": "Classic Black T-Shirt",
    "slug": "classic-black-t-shirt",
    "price": 35,
    "description": "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://i.imgur.com/9DqEOV5.jpeg",
      "https://i.imgur.com/ae0AEYn.jpeg",
      "https://i.imgur.com/mZ4rUjj.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 18,
    "title": "Sleek White & Orange Wireless Gaming Controller",
    "slug": "sleek-white-orange-wireless-gaming-controller",
    "price": 69,
    "description": "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
    "category": {
      "id": 2,
      "name": "Electronics01",
      "slug": "electronics01",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T15:47:23.000Z"
    },
    "images": [
      "https://i.imgur.com/ZANVnHE.jpeg",
      "https://i.imgur.com/Ro5z6Tn.jpeg",
      "https://i.imgur.com/woA93Li.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 19,
    "title": "Sleek Wireless Headphone & Inked Earbud Set",
    "slug": "sleek-wireless-headphone-inked-earbud-set",
    "price": 44,
    "description": "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
    "category": {
      "id": 2,
      "name": "Electronics01",
      "slug": "electronics01",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T15:47:23.000Z"
    },
    "images": [
      "https://i.imgur.com/yVeIeDa.jpeg",
      "https://i.imgur.com/jByJ4ih.jpeg",
      "https://i.imgur.com/KXj6Tpb.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 20,
    "title": "Sleek Comfort-Fit Over-Ear Headphones",
    "slug": "sleek-comfort-fit-over-ear-headphones",
    "price": 28,
    "description": "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
    "category": {
      "id": 2,
      "name": "Electronics01",
      "slug": "electronics01",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T15:47:23.000Z"
    },
    "images": [
      "https://i.imgur.com/SolkFEB.jpeg",
      "https://i.imgur.com/KIGW49u.jpeg",
      "https://i.imgur.com/mWwek7p.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 21,
    "title": "Efficient 2-Slice Toaster",
    "slug": "efficient-2-slice-toaster",
    "price": 48,
    "description": "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",
    "category": {
      "id": 2,
      "name": "Electronics01",
      "slug": "electronics01",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T15:47:23.000Z"
    },
    "images": [
      "https://i.imgur.com/keVCVIa.jpeg",
      "https://i.imgur.com/afHY7v2.jpeg",
      "https://i.imgur.com/yAOihUe.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 22,
    "title": "Sleek Wireless Computer Mouse",
    "slug": "sleek-wireless-computer-mouse",
    "price": 10,
    "description": "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
    "category": {
      "id": 2,
      "name": "Electronics01",
      "slug": "electronics01",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T15:47:23.000Z"
    },
    "images": [
      "https://i.imgur.com/w3Y8NwQ.jpeg",
      "https://i.imgur.com/WJFOGIC.jpeg",
      "https://i.imgur.com/dV4Nklf.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 23,
    "title": "Sleek Modern Laptop with Ambient Lighting",
    "slug": "sleek-modern-laptop-with-ambient-lighting",
    "price": 43,
    "description": "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
    "category": {
      "id": 2,
      "name": "Electronics01",
      "slug": "electronics01",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T15:47:23.000Z"
    },
    "images": [
      "https://i.imgur.com/OKn1KFI.jpeg",
      "https://i.imgur.com/G4f21Ai.jpeg",
      "https://i.imgur.com/Z9oKRVJ.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 24,
    "title": "Sleek Modern Laptop for Professionals",
    "slug": "sleek-modern-laptop-for-professionals",
    "price": 97,
    "description": "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
    "category": {
      "id": 2,
      "name": "Electronics01",
      "slug": "electronics01",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T15:47:23.000Z"
    },
    "images": [
      "https://i.imgur.com/ItHcq7o.jpeg",
      "https://i.imgur.com/55GM3XZ.jpeg",
      "https://i.imgur.com/tcNJxoW.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 25,
    "title": "Stylish Red & Silver Over-Ear Headphones",
    "slug": "stylish-red-silver-over-ear-headphones",
    "price": 39,
    "description": "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
    "category": {
      "id": 2,
      "name": "Electronics01",
      "slug": "electronics01",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T15:47:23.000Z"
    },
    "images": [
      "https://i.imgur.com/YaSqa06.jpeg",
      "https://i.imgur.com/isQAliJ.jpeg",
      "https://i.imgur.com/5B8UQfh.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 26,
    "title": "Sleek Mirror Finish Phone Case",
    "slug": "sleek-mirror-finish-phone-case",
    "price": 27,
    "description": "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
    "category": {
      "id": 2,
      "name": "Electronics01",
      "slug": "electronics01",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T15:47:23.000Z"
    },
    "images": [
      "https://i.imgur.com/yb9UQKL.jpeg",
      "https://i.imgur.com/m2owtQG.jpeg",
      "https://i.imgur.com/bNiORct.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 27,
    "title": "Sleek Smartwatch with Vibrant Display",
    "slug": "sleek-smartwatch-with-vibrant-display",
    "price": 16,
    "description": "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
    "category": {
      "id": 2,
      "name": "Electronics01",
      "slug": "electronics01",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T15:47:23.000Z"
    },
    "images": [
      "https://i.imgur.com/LGk9Jn2.jpeg",
      "https://i.imgur.com/1ttYWaI.jpeg",
      "https://i.imgur.com/sPRWnJH.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 28,
    "title": "Sleek Modern Leather Sofa",
    "slug": "sleek-modern-leather-sofa",
    "price": 53,
    "description": "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
    "category": {
      "id": 3,
      "name": "Furniture",
      "slug": "furniture",
      "image": "https://i.imgur.com/Qphac99.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/Qphac99.jpeg",
      "https://i.imgur.com/dJjpEgG.jpeg",
      "https://i.imgur.com/MxJyADq.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 29,
    "title": "Mid-Century Modern Wooden Dining Table",
    "slug": "mid-century-modern-wooden-dining-table",
    "price": 24,
    "description": "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    "category": {
      "id": 3,
      "name": "Furniture",
      "slug": "furniture",
      "image": "https://i.imgur.com/Qphac99.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/DMQHGA0.jpeg",
      "https://i.imgur.com/qrs9QBg.jpeg",
      "https://i.imgur.com/XVp8T1I.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 30,
    "title": "Elegant Golden-Base Stone Top Dining Table",
    "slug": "elegant-golden-base-stone-top-dining-table",
    "price": 66,
    "description": "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
    "category": {
      "id": 3,
      "name": "Furniture",
      "slug": "furniture",
      "image": "https://i.imgur.com/Qphac99.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/NWIJKUj.jpeg",
      "https://i.imgur.com/Jn1YSLk.jpeg",
      "https://i.imgur.com/VNZRvx5.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 31,
    "title": "Modern Elegance Teal Armchair",
    "slug": "modern-elegance-teal-armchair",
    "price": 25,
    "description": "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
    "category": {
      "id": 3,
      "name": "Furniture",
      "slug": "furniture",
      "image": "https://i.imgur.com/Qphac99.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/6wkyyIN.jpeg",
      "https://i.imgur.com/Ald3Rec.jpeg",
      "https://i.imgur.com/dIqo03c.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 32,
    "title": "Elegant Solid Wood Dining Table",
    "slug": "elegant-solid-wood-dining-table",
    "price": 67,
    "description": "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
    "category": {
      "id": 3,
      "name": "Furniture",
      "slug": "furniture",
      "image": "https://i.imgur.com/Qphac99.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/4lTaHfF.jpeg",
      "https://i.imgur.com/JktHE1C.jpeg",
      "https://i.imgur.com/cQeXQMi.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 33,
    "title": "Modern Minimalist Workstation Setup",
    "slug": "modern-minimalist-workstation-setup",
    "price": 49,
    "description": "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
    "category": {
      "id": 3,
      "name": "Furniture",
      "slug": "furniture",
      "image": "https://i.imgur.com/Qphac99.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/3oXNBst.jpeg",
      "https://i.imgur.com/ErYYZnT.jpeg",
      "https://i.imgur.com/boBPwYW.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 34,
    "title": "Modern Ergonomic Office Chair",
    "slug": "modern-ergonomic-office-chair",
    "price": 71,
    "description": "Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
    "category": {
      "id": 3,
      "name": "Furniture",
      "slug": "furniture",
      "image": "https://i.imgur.com/Qphac99.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/3dU0m72.jpeg",
      "https://i.imgur.com/zPU3EVa.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 35,
    "title": "Futuristic Holographic Soccer Cleats",
    "slug": "futuristic-holographic-soccer-cleats",
    "price": 39,
    "description": "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
    "category": {
      "id": 4,
      "name": "Shoes",
      "slug": "shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/qNOjJje.jpeg",
      "https://i.imgur.com/NjfCFnu.jpeg",
      "https://i.imgur.com/eYtvXS1.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 36,
    "title": "Rainbow Glitter High Heels",
    "slug": "rainbow-glitter-high-heels",
    "price": 39,
    "description": "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
    "category": {
      "id": 4,
      "name": "Shoes",
      "slug": "shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/62gGzeF.jpeg",
      "https://i.imgur.com/5MoPuFM.jpeg",
      "https://i.imgur.com/sUVj7pK.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 37,
    "title": "Chic Summer Denim Espadrille Sandals",
    "slug": "chic-summer-denim-espadrille-sandals",
    "price": 33,
    "description": "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
    "category": {
      "id": 4,
      "name": "Shoes",
      "slug": "shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/9qrmE1b.jpeg",
      "https://i.imgur.com/wqKxBVH.jpeg",
      "https://i.imgur.com/sWSV6DK.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 39,
    "title": "Vibrant Pink Classic Sneakers",
    "slug": "vibrant-pink-classic-sneakers",
    "price": 84,
    "description": "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
    "category": {
      "id": 4,
      "name": "Shoes",
      "slug": "shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/mcW42Gi.jpeg",
      "https://i.imgur.com/mhn7qsF.jpeg",
      "https://i.imgur.com/F8vhnFJ.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 40,
    "title": "Futuristic Silver and Gold High-Top Sneaker",
    "slug": "futuristic-silver-and-gold-high-top-sneaker",
    "price": 68,
    "description": "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
    "category": {
      "id": 4,
      "name": "Shoes",
      "slug": "shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/npLfCGq.jpeg",
      "https://i.imgur.com/vYim3gj.jpeg",
      "https://i.imgur.com/HxuHwBO.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 41,
    "title": "Futuristic Chic High-Heel Boots",
    "slug": "futuristic-chic-high-heel-boots",
    "price": 36,
    "description": "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
    "category": {
      "id": 4,
      "name": "Shoes",
      "slug": "shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/HqYqLnW.jpeg",
      "https://i.imgur.com/RlDGnZw.jpeg",
      "https://i.imgur.com/qa0O6fg.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 42,
    "title": "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    "slug": "elegant-patent-leather-peep-toe-pumps",
    "price": 53,
    "description": "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
    "category": {
      "id": 4,
      "name": "Shoes",
      "slug": "shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/AzAY4Ed.jpeg",
      "https://i.imgur.com/umfnS9P.jpeg",
      "https://i.imgur.com/uFyuvLg.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 44,
    "title": "Classic Blue Suede Casual Shoes",
    "slug": "classic-blue-suede-casual-shoes",
    "price": 39,
    "description": "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
    "category": {
      "id": 4,
      "name": "Shoes",
      "slug": "shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/sC0ztOB.jpeg",
      "https://i.imgur.com/Jf9DL9R.jpeg",
      "https://i.imgur.com/R1IN95T.jpeg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 45,
    "title": "Sleek Futuristic Electric Bicycle",
    "slug": "sleek-futuristic-electric-bicycle",
    "price": 22,
    "description": "This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease.",
    "category": {
      "id": 5,
      "name": "Miscellaneous",
      "slug": "miscellaneous",
      "image": "https://i.imgur.com/BG8J0Fj.jpg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/BG8J0Fj.jpg",
      "https://i.imgur.com/ujHBpCX.jpg",
      "https://i.imgur.com/WHeVL9H.jpg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 46,
    "title": "Sleek All-Terrain Go-Kart",
    "slug": "sleek-all-terrain-go-kart",
    "price": 37,
    "description": "Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.",
    "category": {
      "id": 5,
      "name": "Miscellaneous",
      "slug": "miscellaneous",
      "image": "https://i.imgur.com/BG8J0Fj.jpg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/Ex5x3IU.jpg",
      "https://i.imgur.com/z7wAQwe.jpg",
      "https://i.imgur.com/kc0Dj9S.jpg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 47,
    "title": "Radiant Citrus Eau de Parfum",
    "slug": "radiant-citrus-eau-de-parfum",
    "price": 73,
    "description": "Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect for daily wear, it's an olfactory delight that leaves a lasting, zesty impression.",
    "category": {
      "id": 5,
      "name": "Miscellaneous",
      "slug": "miscellaneous",
      "image": "https://i.imgur.com/BG8J0Fj.jpg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/xPDwUb3.jpg",
      "https://i.imgur.com/3rfp691.jpg",
      "https://i.imgur.com/kG05a29.jpg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 48,
    "title": "Sleek Olive Green Hardshell Carry-On Luggage",
    "slug": "sleek-olive-green-hardshell-carry-on-luggage",
    "price": 48,
    "description": "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
    "category": {
      "id": 5,
      "name": "Miscellaneous",
      "slug": "miscellaneous",
      "image": "https://i.imgur.com/BG8J0Fj.jpg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/jVfoZnP.jpg",
      "https://i.imgur.com/Tnl15XK.jpg",
      "https://i.imgur.com/7OqTPO6.jpg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 49,
    "title": "Chic Transparent Fashion Handbag",
    "slug": "chic-transparent-fashion-handbag",
    "price": 61,
    "description": "Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction, luxe gold-tone hardware, and an elegant chain strap. Its compact size ensures you can carry your day-to-day items with ease and sophistication.",
    "category": {
      "id": 5,
      "name": "Miscellaneous",
      "slug": "miscellaneous",
      "image": "https://i.imgur.com/BG8J0Fj.jpg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/Lqaqz59.jpg",
      "https://i.imgur.com/uSqWK0m.jpg",
      "https://i.imgur.com/atWACf1.jpg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 50,
    "title": "Trendy Pink-Tinted Sunglasses",
    "slug": "trendy-pink-tinted-sunglasses",
    "price": 38,
    "description": "Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.",
    "category": {
      "id": 5,
      "name": "Miscellaneous",
      "slug": "miscellaneous",
      "image": "https://i.imgur.com/BG8J0Fj.jpg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/0qQBkxX.jpg",
      "https://i.imgur.com/I5g1DoE.jpg",
      "https://i.imgur.com/myfFQBW.jpg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 51,
    "title": "Elegant Glass Tumbler Set",
    "slug": "elegant-glass-tumbler-set",
    "price": 50,
    "description": "Enhance your drinkware collection with our sophisticated set of glass tumblers, perfect for serving your favorite beverages. This versatile set includes both clear and subtly tinted glasses, lending a modern touch to any table setting. Crafted with quality materials, these durable tumblers are designed to withstand daily use while maintaining their elegant appeal.",
    "category": {
      "id": 5,
      "name": "Miscellaneous",
      "slug": "miscellaneous",
      "image": "https://i.imgur.com/BG8J0Fj.jpg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://i.imgur.com/TF0pXdL.jpg",
      "https://i.imgur.com/BLDByXP.jpg",
      "https://i.imgur.com/b7trwCv.jpg"
    ],
    "creationAt": "2025-05-05T09:17:38.000Z",
    "updatedAt": "2025-05-05T09:17:38.000Z"
  },
  {
    "id": 60,
    "title": "Test",
    "slug": "test",
    "price": 400,
    "description": "gk;mm",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://www.bing.com/images/search?view=detailV2&ccid=gWJq3kzL&id=88E61BF843C213C190DE3D57FA2C4CE215D02C78&thid=OIP.gWJq3kzLumBCnZ--TTU3EAHaDt&mediaurl=https%3a%2f%2fopengraph.githubassets.com%2f9b3103057330cc8ea05bf018f5307001ed9470d91b0513a7f4e541c538f82cea%2fcake-build%2fprocesses%2fissues%2f15&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.81626ade4ccbba60429d9fbe4d353710%3frik%3deCzQFeJMLPpXPQ%26pid%3dImgRaw%26r%3d0&exph=600&expw=1200&q=cake+api&simid=608018558143455486&FORM=IRPRST&ck=8FDA1529048B71FD501C175ED8DA1A0A&selectedIndex=4&itb=0"
    ],
    "creationAt": "2025-05-05T12:48:04.000Z",
    "updatedAt": "2025-05-05T12:48:04.000Z"
  },
  {
    "id": 61,
    "title": "Test Now",
    "slug": "test-now",
    "price": 700,
    "description": "gjkhk",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://www.bing.com/images/search?view=detailV2&ccid=gWJq3kzL&id=88E61BF843C213C190DE3D57FA2C4CE215D02C78&thid=OIP.gWJq3kzLumBCnZ--TTU3EAHaDt&mediaurl=https%3a%2f%2fopengraph.githubassets.com%2f9b3103057330cc8ea05bf018f5307001ed9470d91b0513a7f4e541c538f82cea%2fcake-build%2fprocesses%2fissues%2f15&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.81626ade4ccbba60429d9fbe4d353710%3frik%3deCzQFeJMLPpXPQ%26pid%3dImgRaw%26r%3d0&exph=600&expw=1200&q=cake+api&simid=608018558143455486&FORM=IRPRST&ck=8FDA1529048B71FD501C175ED8DA1A0A&selectedIndex=4&itb=0"
    ],
    "creationAt": "2025-05-05T12:58:18.000Z",
    "updatedAt": "2025-05-05T12:58:18.000Z"
  },
  {
    "id": 62,
    "title": "New Product",
    "slug": "new-product",
    "price": 10,
    "description": "A description",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2025-05-05T13:32:04.000Z",
    "updatedAt": "2025-05-05T13:32:04.000Z"
  },
  {
    "id": 63,
    "title": "New Karate Product",
    "slug": "new-karate-product",
    "price": 999,
    "description": "Created via Karate POST",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2025-05-05T13:53:06.000Z",
    "updatedAt": "2025-05-05T13:53:06.000Z"
  },
  {
    "id": 64,
    "title": "New Karate Products",
    "slug": "new-karate-products",
    "price": 999,
    "description": "Created via Karate POST",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2025-05-05T14:00:26.000Z",
    "updatedAt": "2025-05-05T14:00:26.000Z"
  },
  {
    "id": 65,
    "title": "steven Product",
    "slug": "steven-product",
    "price": 1000000,
    "description": "Description of the new product",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2025-05-05T14:04:21.000Z",
    "updatedAt": "2025-05-05T14:04:21.000Z"
  },
  {
    "id": 66,
    "title": "New Product - Debomita1",
    "slug": "new-product-debomita1",
    "price": 10,
    "description": "A description",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2025-05-05T14:32:42.000Z",
    "updatedAt": "2025-05-05T14:32:42.000Z"
  },
  {
    "id": 67,
    "title": "New Product - Debomita2",
    "slug": "new-product-debomita2",
    "price": 10,
    "description": "A description",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2025-05-05T14:33:15.000Z",
    "updatedAt": "2025-05-05T14:33:15.000Z"
  },
  {
    "id": 68,
    "title": "New Karate Products - Debomita1",
    "slug": "new-karate-products-debomita1",
    "price": 150,
    "description": "Created via Karate POST",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2025-05-05T14:33:45.000Z",
    "updatedAt": "2025-05-05T14:33:45.000Z"
  },
  {
    "id": 69,
    "title": "New Karate Product - Debomita211",
    "slug": "new-karate-product-debomita211",
    "price": 150,
    "description": "Created via Karate POST",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2025-05-05T14:42:13.000Z",
    "updatedAt": "2025-05-05T14:42:13.000Z"
  },
  {
    "id": 70,
    "title": "New Karate Product - Debomita441",
    "slug": "new-karate-product-debomita441",
    "price": 150,
    "description": "Created via Karate POST",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2025-05-05T14:46:38.000Z",
    "updatedAt": "2025-05-05T14:46:38.000Z"
  },
  {
    "id": 71,
    "title": "New Karate Product - Debomita311",
    "slug": "new-karate-product-debomita311",
    "price": 150,
    "description": "Created via Karate POST",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2025-05-05T14:49:55.000Z",
    "updatedAt": "2025-05-05T14:49:55.000Z"
  },
  {
    "id": 72,
    "title": "New Karate Product - Debomita376",
    "slug": "new-karate-product-debomita376",
    "price": 150,
    "description": "Created via Karate POST",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2025-05-05T14:52:30.000Z",
    "updatedAt": "2025-05-05T14:52:30.000Z"
  },
  {
    "id": 73,
    "title": "New Karate Product - Debomita168",
    "slug": "new-karate-product-debomita168",
    "price": 150,
    "description": "Created via Karate POST",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2025-05-05T14:55:49.000Z",
    "updatedAt": "2025-05-05T14:55:49.000Z"
  },
  {
    "id": 74,
    "title": "New Karate Product - Debomita337",
    "slug": "new-karate-product-debomita337",
    "price": 150,
    "description": "Created via Karate POST",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2025-05-05T14:57:07.000Z",
    "updatedAt": "2025-05-05T14:57:07.000Z"
  },
  {
    "id": 75,
    "title": "New Karate Product - Debomita483",
    "slug": "new-karate-product-debomita483",
    "price": 150,
    "description": "Created via Karate POST",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2025-05-05T15:19:23.000Z",
    "updatedAt": "2025-05-05T15:19:23.000Z"
  },
  {
    "id": 77,
    "title": "New Karate Product - Debomita297",
    "slug": "new-karate-product-debomita297",
    "price": 150,
    "description": "Created via Karate POST",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2025-05-05T15:21:31.000Z",
    "updatedAt": "2025-05-05T15:21:31.000Z"
  },
  {
    "id": 82,
    "title": "New Karate Product - Debomita273",
    "slug": "new-karate-product-debomita273",
    "price": 150,
    "description": "Created via Karate POST",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "creationAt": "2025-05-05T15:35:24.000Z",
    "updatedAt": "2025-05-05T15:35:24.000Z"
  },
  {
    "id": 83,
    "title": "hjvhv",
    "slug": "hjvhv",
    "price": 644,
    "description": "kjerferguerfouegf ihfoi\"'hefhe eihjfoiehfo",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2025-05-05T16:24:25.000Z",
    "updatedAt": "2025-05-05T16:24:25.000Z"
  },
  {
    "id": 84,
    "title": "erg",
    "slug": "erg",
    "price": 65464,
    "description": "uijgidesfohern e ferhfioher efyef eyh",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2025-05-05T16:38:41.000Z",
    "updatedAt": "2025-05-05T16:38:41.000Z"
  },
  {
    "id": 85,
    "title": "yufyfu",
    "slug": "yufyfu",
    "price": 65465,
    "description": "lyuigb _y gi_m ihh",
    "category": {
      "id": 1,
      "name": "clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T17:00:01.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2025-05-05T16:52:02.000Z",
    "updatedAt": "2025-05-05T16:52:02.000Z"
  },
  {
    "id": 86,
    "title": "bgtftfr",
    "slug": "bgtftfr",
    "price": 210,
    "description": "gtrgrthgr  jyhtythty tryht",
    "category": {
      "id": 4,
      "name": "Shoes",
      "slug": "shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2025-05-05T16:56:06.000Z",
    "updatedAt": "2025-05-05T16:56:06.000Z"
  },
  {
    "id": 87,
    "title": "Laptop",
    "slug": "laptop",
    "price": 10,
    "description": "What a nice product",
    "category": {
      "id": 2,
      "name": "Electronics01",
      "slug": "electronics01",
      "image": "https://i.imgur.com/ZANVnHE.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T15:47:23.000Z"
    },
    "images": [
      "https://i.imgur.com/QkIa5tT.jpeg"
    ],
    "creationAt": "2025-05-05T16:59:40.000Z",
    "updatedAt": "2025-05-05T16:59:40.000Z"
  },
  {
    "id": 88,
    "title": "vdfvds",
    "slug": "vdfvds",
    "price": 11321,
    "description": "sdcqs zevezfcz zevzdz",
    "category": {
      "id": 4,
      "name": "Shoes",
      "slug": "shoes",
      "image": "https://i.imgur.com/qNOjJje.jpeg",
      "creationAt": "2025-05-05T09:17:38.000Z",
      "updatedAt": "2025-05-05T09:17:38.000Z"
    },
    "images": [
      "https://placehold.co/600x400"
    ],
    "creationAt": "2025-05-05T17:20:06.000Z",
    "updatedAt": "2025-05-05T17:20:06.000Z"
  }
]


export default App