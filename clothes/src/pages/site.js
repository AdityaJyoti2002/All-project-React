import React, { useState } from 'react';
import './styles12.css';
import './styles11.css';
// import './styles13css';
import "./mouse.css"
// import logo from "./logo.png"
// import Jewellery from "./1.png"
// import Jewellery2 from "./2.png"
// import Jewellery3 from "./3.png"
// import Jewellery4 from "./4.png"
// import Jewellery5 from "./5.png"

const Tshirt = () => {

  const allProducts = {
    women: [
      { title: 'Pink Shirt', price: '₹1000' },
      { title: 'Yellow Dress', price: '₹3000' },
      { title: 'Yellow Dress', price: '₹3000' },
      { title: 'Yellow Dress', price: '₹3000' },
      { title: 'Black Trousers', price: '₹1500' },
      { title: 'White Shirt', price: '₹1200' },
      { title: 'Pink Shirt', price: '₹1000' },
      { title: 'Yellow Dress', price: '₹3000' },
      { title: 'Yellow Dress', price: '₹3000' },
      { title: 'Yellow Dress', price: '₹3000' },
      { title: 'Black Trousers', price: '₹1500' },
      { title: 'White Shirt', price: '₹1200' },
    ],
    men: [
      { title: 'Black Trousers', price: '₹1500' },
      { title: 'White Shirt', price: '₹1200' },
    ],
    other: [
      { title: 'Casual Jacket', price: '₹2500' },
      { title: 'Sports Shoes', price: '₹3500' },
    ],
    Dresses: [
      { title: 'Red Shirt', price: '₹1000' },
      { title: 'white Dress', price: '₹3000' },
    ],
    Nordic_Looks: [
      { title: 'Black Trousers', price: '₹1500' },
      { title: 'White Shirt', price: '₹1200' },
    ],
    New_In: [
      { title: 'Casual Jacket', price: '₹2500' },
      { title: 'Sports Shoes', price: '₹3500' },
    ],
    Clothing: [
      { title: 'Pink Shirt', price: '₹1000' },
      { title: 'Yellow Dress', price: '₹3000' },
    ],
    Shoes: [
      { title: 'Black Trousers', price: '₹1500' },
      { title: 'White Shirt', price: '₹1200' },
    ],
    Accessories: [
      { title: 'Casual Jacket', price: '₹2500' },
      { title: 'Sports Shoes', price: '₹3500' },
    ],
    Streetwear: [
      { title: 'Casual Jacket', price: '₹2500' },
      { title: 'Sports Shoes', price: '₹3500' },
    ],
    Sports: [
      { title: 'Casual Jacket', price: '₹2500' },
      { title: 'Sports Shoes', price: '₹3500' },
    ],
    Gifting:[
        { title: 'Casual Jacket', price: '₹2500' },
      { title: 'Sports Shoes', price: '₹3500' },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState('women');


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  
  const products = allProducts[selectedCategory];



  // mouse moveent design
  const spark = (event) =>{
    let i = document.createElement("i");
    i.style.top = (event.pageY) + "px";
    i.style.left = (event.pageX) + "px";

    i.style.scale = `${Math.random() *2+1}`;

    i.style.setProperty("--x", getTransitionValue());
    i.style.setProperty("--y", getTransitionValue());
    document.body.appendChild(i);

    setTimeout(() => {
        document.body.removeChild(i);
        
    }, 200);


}

const getTransitionValue = ()=>{
    return `${Math.random() * 400 - 200 }px`
}
document.addEventListener("mousemove", spark);


  return (
    <div>
      {/* Navbar 1 */}
      <header className="navbar">
        <div className="navbar-left">
        {/* <img src={logo} alt="logo" className='logo'/> */}
            <input 
                type="text" 
                id="search-bar" 
                placeholder="Search here..." 
                // oninput="handleSearch(event)" 
            />
            <button class="search-button">Search</button>
            {/* <button>Clear</button> */}
        
        </div>
        <div className="navbar-right">
          <a href="#" className="icon">Sign in</a>
          <a href="#" className="icon">Signup </a>
         
        </div>
      </header>

      {/* Navbar 2 */}
      <header className="navbar">
        <div className="navbar-center">
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Gifting')}>All Categories </a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Nordic_Looks')}>Featured Selection </a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('New_In')}>Trade Assurance</a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Clothing')}>Buyer Central</a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Shoes')}>Help Centre </a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Accessories')}>Get the App</a>

        </div>
      </header>
      <hr/>
       {/* Navbar 3 */}
       {/* <h1>Jewellery </h1>
       <header className="navbar Jewellery2">
        <div className="navbar-center ">
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Gifting')}><img src={Jewellery} alt="logo" className='Jewellery'/> Necklace  </a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Nordic_Looks')}><img src={Jewellery2} alt="logo" className='Jewellery'/>Rings</a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('New_In')}><img src={Jewellery3} alt="logo" className='Jewellery'/>Earrings</a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Clothing')}><img src={Jewellery4} alt="logo" className='Jewellery'/>Bracelet </a>
          <a href="#" className="nav-link" onClick={() => handleCategoryClick('Shoes')}><img src={Jewellery5} alt="logo" className='Jewellery'/>Sets</a>


        </div>
      </header> */}

     
      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          
          <ul>
            <li><a href="#" className='font color7'>Filters</a>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="New" className='checkbox'/>
            <label for="vehicle1"> New</label><br></br>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Trade" className='checkbox'/>
            <label for="vehicle1"> Trade Assurancee</label>
            <p>Protect your Orders</p>
            <br></br>
            {/* <div className="price-inputs">
            <div className="price-field">
                <label htmlFor="min-price">Min:</label>
                <input type="number" id="min-price" placeholder="Minimum Price"  />
            </div>
            <div className="price-field">
                <label htmlFor="max-price">Max:</label>
                <input type="number" id="max-price" placeholder="Maximum Price"  />
            </div>
        </div> */}
        {/* <div cla
        ss="price-output">
            Selected Range: ₹<span id="min-value">0</span> - ₹<span id="max-value">0</span>
        </div> */}
        </li>
            <li className='flex'><a href="#" className='font color5'>Supplier Features</a>
            {/* <h4>Rate Our Service</h4> */}
        <div className="stars">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='checkbox'/>
  <label for="vehicle1"> Verified Supplier</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='checkbox'/>
  <label for="vehicle1"> Verified Pro Supplier</label>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='checkbox'/>
  <label for="vehicle1"> 1h Response time</label><br></br>
 
        </div></li>
            
            <li><a href="#" className='font color5'>Merge Results</a>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='checkbox'/>
  <label for="vehicle1"> Merge By Supplier</label>
  <p>Only the most relevant item from each supplier will be shown</p><br></br>
  
  </li>
           
          </ul>
        </aside>

        {/* Main Content */}
        <main className="content">
          
          {/* <div className="items-count">Jewellery  /  Necklace  </div> */}
          <div className="products">
            {products.map((product, index) => (
              <div key={index} className="product">
                <div className="product-img"></div>
                <h3>{product.title}</h3>
                <p>₹{product.price}</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default Tshirt;
