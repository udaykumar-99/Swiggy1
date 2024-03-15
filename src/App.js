import React from 'react'

import { FaAmazon } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
/*import img ph */
import Swipera from './Swipera/Swipera';
import 'react-slideshow-image/dist/styles.css'
/*import HoverCarousel from "hover-carousel";
import ph1 from './assets/ph1.jpg'
import ph2 from './assets/ph2.jpg'
import ph3 from './assets/ph3.jpg'
import ph4 from './assets/ph4.jpg'
import ph5 from './assets/ph5.jpg'
import ph6 from './assets/ph6.jpg'
import ph7 from './assets/ph7.jpg'
import ph8 from './assets/ph8.jpg'
import ph9 from './assets/ph9.jpg'*/

import bodyimg from './assets/bodyimg.avif'
import boot from './assets/boot.jpg'
import './App.css'





/*const images = [
  ph1,
  ph2,
  ph3,
  ph4,
  ph5,
  ph6,
  ph7,
  ph8,
  ph9
 
  
];*/

const App = () => {
  return (
    <div className='main-amazonClone'>
      


      <div className='main-amazon-top-navbar'>
        <div className='amazon-top'> 
          <div className='amazon-top-fist'>
            <h1><FaAmazon fontSize={'40px'} color={'white'}/></h1>
            <h2 className='amazon_logo'>amazon </h2>
          </div>

          <div className='amazon-location'>
            <h3 className='location-heading'><FaLocationDot fontSize={'25px'}/></h3>
            <h3>Update location</h3>
          </div>

          <div className='search'>
            <div className='se'>
              <input type='text' placeholder='Search Amazon.in' className='amazon-search'/>
              <h1 className='search-h'><FaSearch  fontSize={'20px'} color={'white'}/></h1>
            </div>
          </div>
          <h1 className='search-account'>Hello, sign in Account</h1>
          <h1 className='search-orders'>Returns& Orders</h1>
          <h2><MdOutlineShoppingCart fontSize={'50px'}/></h2>
     
    
           
        </div>
      
        <div className='amazon-bottom'>
            <div className='bottom-heading'>
              <h3><FiAlignJustify  fontSize={'30px'}/></h3>
              <h3 className='point bottom-all ' >All</h3>
               
            </div>
            <h4 className='point'>Fresh</h4>
            <h4 className='point'>Amazon</h4>
            <h4 className='point'>Sell</h4>
            <h4 className='point'>Customer serives</h4>
            <h4>BastSellers</h4>
            <h4>Mobiles</h4>
            <h4>New Launches for Mobiles</h4>
            <h4>Shop now</h4>

        </div>
        
        
      

      </div>
        
      <div className='amazon-body'>
        <div className='body-fist'>
          <button className='buttonA'><FiChevronLeft fontSize={'100px'}/></button>
           <img src={bodyimg} alt='img' className='body-img'/>
           <button className='buttonA'><FiChevronRight fontSize={'100px'}/></button>
        </div>
        <div className='offers-cards'>
          <div className='card1'>
            <h3>Up to 75% off | Headphones</h3>
            
                <img className='cimg' src={boot} alt='img1'/>
                <img className='cimg' src={boot} alt='img1'/> 
                <img className='cimg' src={boot} alt='img1'/>
                <img className='cimg' src={boot} alt='img1'/>  
          </div>
          <div className='card1'> <h3>Up to 60% off | Styles for women</h3>
            
            <img className='cimg' src={boot} alt='img1'/>
            <img className='cimg' src={boot} alt='img1'/> 
            <img className='cimg' src={boot} alt='img1'/>
            <img className='cimg' src={boot} alt='img1'/>  </div>
          <div className='card1'> <h3>Delight your little one | Amazon Brands & more</h3>
            
            <img className='cimg' src={boot} alt='img1'/>
            <img className='cimg' src={boot} alt='img1'/> 
            <img className='cimg' src={boot} alt='img1'/>
            <img className='cimg' src={boot} alt='img1'/>  </div>
          <div className='card1'> <h3>Automotive essentials | Up to 60% off</h3>
            
            <img className='cimg' src={boot} alt='img1'/>
            <img className='cimg' src={boot} alt='img1'/> 
            <img className='cimg' src={boot} alt='img1'/>
            <img className='cimg' src={boot} alt='img1'/>  </div>
        </div>
        <div className='offers-cards'>
          <div className='card1'>5</div>
          <div className='card1'>6</div>
          <div className='card1'>7</div>
          <div className='card1'>8</div>
        </div>
        <div className='offers-cards'>
          <div className='new-sider'>
             <Swipera/>
          </div>
          
        </div>   
        <div className='offers-cards'>
          <div className='card1'>14</div>
          <div className='card1'>15</div>
          <div className='card1'>16</div>
          <div className='card1'>17</div>
          <div className='card1'>18</div>
        </div>
        <div className='offers-cards'>
          <div className='card1'>19</div>
          <div className='card1'>20</div>
          <div className='card1'>21</div>
          <div className='card1'>22</div>
          <div className='card1'>23</div>
          <div className='card1'>24</div>
        </div>

        <div className='offers-cards'>
          <div className='card1'>19</div>
          <div className='card1'>20</div>
          <div className='card1'>21</div>
          <div className='card1'>22</div>
          <div className='card1'>23</div>
          <div className='card1'>24</div>
        </div>

        <div className='offers-cards'>
          <div className='card1'>19</div>
          <div className='card1'>20</div>
          <div className='card1'>21</div>
          <div className='card1'>21</div>
        </div>
        
       
        
      </div>
      
      <div className='floor'>
        <div className='floor-top'> <h3>Back to Home</h3></div>
        <div className='floor-bottom'>
          <div className='bottom-floorA'>
            <div className='lastone'>
              <h2>Get to Know Us</h2>
              <p> About Us
                <br/>
                Careers
                <br/>
                Press Releases
                <br/>
                  Amazon Science
              </p>   
              </div>    
          
          
          
            
            <div className='lastone'>
              <h2>Connect with Us</h2>
              <p> Facebook
                <br/>
                Twitter
                <br/>
                Instgram
              </p>   
                 
            </div>

          
            <div className='lastone'>
              <h2>Mack Money with Us</h2>
              <p> Sell on Amozon
                <br/>
                Sell under Amazon Acceelrator
                <br/>
                Protect and Build Your Brand
                <br />
                Amazon Global Selling
                <br />
                Become an Affiliate
              </p>   
                  
            </div>

         
            <div className='lastone'>
              <h2>Let Us Help You </h2>
              <p> COVID-19 and Amazon
                <br/>
                Your Account
                <br/>
                Returns Centere
                <br />
                100% Purchase Protection 
                <br />
                Amazon App DoWnload
              </p>   
              </div>  
          </div> 
          <div className='find-last'>
            <div className='commonlast'>
              <h1><FaAmazon fontSize={'40px'} color={'white'} />Amazon</h1>
              <select defaultValue={'English'}>
                <option value='English'>English</option>
                <option value='Telugu'>Telugu</option>
                <option value='Spain'>Spain</option>
              </select>
            </div>
            <div className='find-country'>
              <p>Australia</p>
              <p>Brazil</p>
              <p>Canada</p>
              <p>China</p>
              <p>France</p>
              <p>Germany</p>
              <p>Italy</p>
              <p>Japan</p>
              <p>poland</p>
              <p>United States</p>
              <p>United Kingdom</p>
              <p>Mexico</p>
            </div>
            <p className='paralast'>Conditions of Use & Sale
              Privacy Notice<br/>
              Interest-Based Ads <br/>
              © 1996-2024, Amazon.com, Inc. or its affiliates</p>
                
            
                
          </div>
        </div>
         
          
           
            <div>
               
         
          

        </div>
        
        
      </div>

    </div>
  )
}

export default App
