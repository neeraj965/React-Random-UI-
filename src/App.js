import "./App.css";
import logo from './Logo/logo.png';

export default function App() {
  return (
    <div>
      <span id="fullstackegy">FULLSTACKEGY</span>
      <span id="fullstackegy-underline"></span>
      <span id="underline-down-text">
        Independent talent at the heart of every business
      </span>
      <span id="under-development">The Website is Under Development</span>

    
      <img src={logo} alt="" id='logo-image' />

      <img src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/2x/external-linkedin-in-logo-used-for-professional-networking-logo-shadow-tal-revivo.png' alt="" id="linkedin" />

      <img src="https://img.icons8.com/color/2x/twitter-squared.png" alt="" id="twitter"/>
     

      <img
        src="https://devtechnosys.ae/images/fullstack-development/full-sd.svg"
        alt=""
        id="vector"
      />
  


      <span id="vector-down-text">
        We work <br />
        your ideas
      </span>

      <footer>
        <span id="footer">
          &copy;Copyrights FullStackegy | All Rights Reserved
        </span>

        <span style={{ margin: "0rem 3rem" }}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Instagram-512.png"
            alt=""
            id="insta"
          />
      
          
        </span>
      </footer>
      <div className="cloud1"></div>
    </div>
  );
}
